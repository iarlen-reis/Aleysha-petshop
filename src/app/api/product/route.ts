import { z } from 'zod'
import { v4 as uuidv4 } from 'uuid'
import prisma from '@/utils/prisma'
import { NextResponse, NextRequest } from 'next/server'
import { uploadImageToCloudinary } from '@/services/cloudinaryUpload'

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData()

    const formSchema = z.object({
      image: z.any(),
      name: z.string(),
      price: z.number(),
      type: z.string(),
      description: z.string(),
    })

    const { image, name, price, type, description } = formSchema.parse({
      name: data.get('name') as string,
      price: Number(data.get('price')),
      type: data.get('type') as string,
      description: data.get('description') as string,
      image: data.get('image') as unknown as Blob,
    })

    const uploadResult = await uploadImageToCloudinary(
      image,
      uuidv4(),
      'petshop/products',
    )

    await prisma.product.create({
      data: {
        name,
        price,
        type,
        description,
        image: uploadResult,
      },
    })

    return NextResponse.json({ status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
