import { z } from 'zod'
import prisma from '@/utils/prisma'
import { v4 as uuidv4 } from 'uuid'
import { useUser } from '@/hooks/useUser'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { uploadImageToCloudinary } from '@/services/cloudinaryUpload'

export async function GET() {
  try {
    const { session } = await useUser()

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const services = await prisma.service.findMany()

    revalidatePath('/dashboard/services')
    return NextResponse.json(services, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: error }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { session } = await useUser()

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.formData()

    const serviceSchema = z.object({
      image: z.any(),
      name: z.string(),
      price: z.number(),
      description: z.string(),
    })

    const { image, name, price, description } = serviceSchema.parse({
      name: data.get('name') as string,
      price: Number(data.get('price')),
      image: data.get('image') as unknown as Blob,
      description: data.get('description') as string,
    })

    const uploadResultUrl = await uploadImageToCloudinary(
      image,
      uuidv4(),
      'petshop/services',
    )

    const service = await prisma.service.create({
      data: {
        name,
        price,
        description,
        image: uploadResultUrl,
      },
    })

    return NextResponse.json(service, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
