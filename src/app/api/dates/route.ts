import { z } from 'zod'
import prisma from '@/utils/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const availableDates = await prisma.availableDate.findMany({
      include: {
        availableTimes: true,
      },
    })

    return NextResponse.json(availableDates, { status: 200 })
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

export async function POST(request: NextRequest) {
  try {
    const bodySchema = z.object({
      date: z.string(),
      timeSlot: z.array(z.string()),
    })

    const { date, timeSlot } = bodySchema.parse(await request.json())

    const availableDate = await prisma.availableDate.create({
      data: {
        date,
        availableTimes: {
          createMany: {
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
