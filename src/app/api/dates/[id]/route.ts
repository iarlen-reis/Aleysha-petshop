import { z } from 'zod'
import prisma from '@/utils/prisma'
import { NextRequest, NextResponse } from 'next/server'

interface IParamsProps {
  params: {
    id: string
  }
}

export async function PUT(request: NextRequest, { params }: IParamsProps) {
  try {
    const paramSchema = z.object({
      id: z.string(),
    })

    const bodySchema = z.object({
      timeSlot: z.array(z.string()),
    })

    const { id } = paramSchema.parse(params)
    const { timeSlot } = bodySchema.parse(await request.json())

    const availableDate = await prisma.availableDate.update({
      where: {
        id,
      },
      data: {
        availableTimes: {
          deleteMany: {},
          createMany: {
            skipDuplicates: true,
            data: timeSlot.map((time) => ({
              timeSlot: time,
            })),
          },
        },
      },
      include: {
        availableTimes: true,
      },
    })

    return NextResponse.json(availableDate, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        error,
      },
      { status: 500 },
    )
  }
}
