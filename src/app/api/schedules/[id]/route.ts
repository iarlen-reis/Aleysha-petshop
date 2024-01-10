import { z } from 'zod'
import prisma from '@/utils/prisma'
import { useUser } from '@/hooks/useUser'
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

    const schedule = await prisma.schedule.findUnique({
      where: {
        id,
      },
      include: {
        availableDate: true,
        pet: true,
        service: true,
        timeSlot: true,
      },
    })

    if (!schedule) {
      return NextResponse.json(
        { message: 'Schedule not found' },
        { status: 404 },
      )
    }

    if (schedule.userId !== session.user.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    return NextResponse.json(schedule, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: error }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: ParamProps) {
  try {
    const { session } = await useUser()

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const paramSchema = z.object({
      id: z.string(),
    })

    const { id } = paramSchema.parse(params)

    const schedule = await prisma.schedule.findUnique({
      where: {
        id,
      },
    })

    if (!schedule) {
      return NextResponse.json(
        { message: 'Schedule not found' },
        { status: 404 },
      )
    }

    if (schedule.userId !== session.user.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const updatedSchedule = await prisma.schedule.update({
      where: {
        id,
      },
      data: {
        status: 'canceled',
      },
    })

    await prisma.time.update({
      where: {
        id: updatedSchedule.timeSlotId,
      },
      data: {
        reserved: false,
      },
    })

    return NextResponse.json(updatedSchedule, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
