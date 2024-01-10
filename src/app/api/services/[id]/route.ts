import { z } from 'zod'
import prisma from '@/utils/prisma'
import { useUser } from '@/hooks/useUser'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

interface IParamsProps {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, { params }: IParamsProps) {
  try {
    const { session } = await useUser()

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const paramSchema = z.object({
      id: z.string(),
    })

    const { id } = paramSchema.parse(params)

    const service = await prisma.service.findUnique({
      where: {
        id,
      },
    })

    return NextResponse.json(service, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: error }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: IParamsProps) {
  try {
    const { session } = await useUser()

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.formData()

    const paramSchema = z.object({
      id: z.string(),
    })

    const serviceSchema = z.object({
      name: z.string(),
      price: z.number(),
      description: z.string(),
    })

    const { id } = paramSchema.parse(params)

    const { name, price, description } = serviceSchema.parse({
      name: data.get('name') as string,
      price: Number(data.get('price')),
      image: data.get('image') as unknown as Blob,
      description: data.get('description') as string,
    })

    const findService = await prisma.service.findUnique({
      where: {
        id,
      },
    })

    if (!findService) {
      return NextResponse.json(
        { message: 'Service not found' },
        { status: 404 },
      )
    }

    const service = await prisma.service.update({
      where: {
        id,
      },
      data: {
        name,
        price,
        description,
      },
    })

    revalidatePath('/dashboard/servicos/' + id)
    return NextResponse.json(service, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: error }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: IParamsProps) {
  try {
    const { session } = await useUser()

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const paramSchema = z.object({
      id: z.string(),
    })

    const { id } = paramSchema.parse(params)

    const service = await prisma.service.delete({
      where: {
        id,
      },
    })

    return NextResponse.json(service, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
