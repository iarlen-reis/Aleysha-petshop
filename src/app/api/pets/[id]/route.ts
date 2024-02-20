import { z } from 'zod'
import prisma from '@/utils/prisma'
import { useUser } from '@/hooks/useUser'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

interface ParamProps {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, { params }: ParamProps) {
  try {
    const { session } = await useUser()

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const paramSchema = z.object({
      id: z.string(),
    })

    const { id } = paramSchema.parse(params)

    const pet = await prisma.pet.findUnique({
      where: {
        id,
      },
    })

    if (!pet) {
      return NextResponse.json({ message: 'Pet not found' }, { status: 404 })
    }

    if (pet.userId !== session.user.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    return NextResponse.json(pet, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: error }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: ParamProps) {
  try {
    const paramSchema = z.object({
      id: z.string(),
    })

    const bodySchema = z.object({
      name: z.string(),
      age: z.number(),
      race: z.string(),
      gender: z.string(),
      observations: z.string(),
    })

    const { id } = paramSchema.parse(params)
    const { name, age, race, gender, observations } = bodySchema.parse(
      await request.json(),
    )

    const { session } = await useUser()

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const pet = await prisma.pet.findUnique({
      where: {
        id,
      },
    })

    if (!pet) {
      return NextResponse.json({ message: 'Pet not found' }, { status: 404 })
    }

    if (pet.userId !== session.user.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const petUpdated = await prisma.pet.update({
      where: {
        id,
      },
      data: {
        name,
        age,
        race,
        gender,
        observations,
      },
    })

    revalidatePath('/pets')
    return NextResponse.json(petUpdated, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: error }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: ParamProps) {
  try {
    const paramSchema = z.object({
      id: z.string(),
    })

    const { id } = paramSchema.parse(params)

    const { session } = await useUser()

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const pet = await prisma.pet.findUnique({
      where: {
        id,
      },
    })

    if (!pet) {
      return NextResponse.json({ message: 'Pet not found' }, { status: 404 })
    }

    if (pet.userId !== session.user.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    await prisma.pet.delete({
      where: {
        id,
      },
    })

    return NextResponse.json(pet, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
