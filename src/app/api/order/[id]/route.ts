import { z } from 'zod'
import { prisma } from '@/utils/prisma'
import { NextRequest, NextResponse } from 'next/server'

interface ParamsProps {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, { params }: ParamsProps) {
  try {
    const paramSchema = z.object({
      id: z.string(),
    })

    const { id } = paramSchema.parse(params)

    const orders = await prisma.order.findMany({
      where: {
        userId: id,
      },
      include: {
        orderProducts: {
          include: {
            product: true,
          },
        },
      },
    })

    return NextResponse.json(orders)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
