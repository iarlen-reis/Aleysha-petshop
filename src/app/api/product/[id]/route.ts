import { z } from 'zod'
import prisma from '@/utils/prisma'
import { NextResponse, NextRequest } from 'next/server'

interface IParamsProps {
  params: {
    id: string
  }
}
export async function GET(request: NextRequest, { params }: IParamsProps) {
  try {
    const paramSchema = z.object({
      id: z.string(),
    })

    const { id } = paramSchema.parse(params)

    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    })

    const fourProdcuts = await prisma.product.findMany({
      take: 4,
      where: {
        NOT: {
          id,
        },
      },
    })

    return NextResponse.json(
      { product, fourProdcuts },
      {
        status: 200,
      },
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: error },
      {
        status: 500,
      },
    )
  }
}

export async function PUT(request: NextRequest, { params }: IParamsProps) {
  try {
    const paramSchema = z.object({
      id: z.string(),
    })

    const bodySchema = z.object({
      name: z.string(),
      price: z.number(),
      type: z.string(),
      description: z.string(),
    })

    const { id } = paramSchema.parse(params)
    const { name, price, type, description } = bodySchema.parse(
      await request.json(),
    )

    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    })

    if (!product) {
      return NextResponse.json(
        { message: 'Product not found' },
        {
          status: 404,
        },
      )
    }

    const productUpdated = await prisma.product.update({
      where: {
        id,
      },
      data: {
        name,
        price,
        type,
        description,
      },
    })

    return NextResponse.json(
      { productUpdated },
      {
        status: 200,
      },
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: error },
      {
        status: 500,
      },
    )
  }
}

export async function DELETE(request: NextRequest, { params }: IParamsProps) {
  try {
    const paramSchema = z.object({
      id: z.string(),
    })

    const { id } = paramSchema.parse(params)

    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    })

    if (!product) {
      return NextResponse.json(
        { message: 'Product not found' },
        {
          status: 404,
        },
      )
    }

    await prisma.product.delete({
      where: {
        id,
      },
    })

    return NextResponse.json(
      { message: 'Product deleted successfully' },
      {
        status: 200,
      },
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: error },
      {
        status: 500,
      },
    )
  }
}
