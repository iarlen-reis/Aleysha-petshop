import { z } from 'zod'
import prisma from '@/utils/prisma'
import { useUser } from '@/hooks/useUser'
import { NextResponse, NextRequest } from 'next/server'

export async function GET() {
  try {
    const { session } = await useUser()

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const orders = await prisma.order.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        orderProducts: {
          include: {
            product: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(orders)
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

    const bodySchema = z.object({
      data: z.object({
        total: z.number(),
        products: z.array(
          z.object({
            id: z.string(),
            quantity: z.number(),
          }),
        ),
      }),
    })

    const {
      data: { products, total },
    } = bodySchema.parse(await request.json())

    const order = await prisma.order.create({
      data: {
        userId: session.user.id,
        total,
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
