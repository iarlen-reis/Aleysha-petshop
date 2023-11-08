import { z } from 'zod'
import { prisma } from '@/utils/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const bodySchema = z.object({
      data: z.object({
        userId: z.string(),
        products: z.array(
          z.object({
            id: z.string(),
            quantity: z.number(),
          }),
        ),
      }),
    })

    const {
      data: { userId, products },
    } = bodySchema.parse(await request.json())

    const order = await prisma.order.create({
      data: {
        userId,
        total: 0,
        orderProducts: {
          create: products.map((product) => ({
            productId: product.id,
            quantity: product.quantity,
          })),
        },
      },
    })

    return NextResponse.json({ order }, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
