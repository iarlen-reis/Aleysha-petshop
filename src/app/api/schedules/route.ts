import { z } from 'zod'
import prisma from '@/utils/prisma'
import { useUser } from '@/hooks/useUser'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { session } = await useUser()

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const status = request.nextUrl.searchParams.get('status') || null
    const page = Number(request.nextUrl.searchParams.get('page')) || 1

    if (!status) {
      const totalSchedules = await prisma.schedule.count({
        where: {
          userId: session.user.id,
        },
      })

      const maxPage = Math.ceil(totalSchedules / 9)
      const existNextPage = page < maxPage
      const existPreviousPage = page > 1

      const schedules = await prisma.schedule.findMany({
        where: {
          userId: session.user.id,
        },
        include: {
          availableDate: true,
          pet: true,
          service: true,
          timeSlot: true,
        },
        take: 9,
        skip: (page - 1) * 9,
      })

      revalidatePath('/agendamentos')
      return NextResponse.json({
        page,
        maxPage,
        existNextPage,
        existPreviousPage,
        schedules,
      })
    }

    const totalSchedules = await prisma.schedule.count({
      where: {
        status,
        userId: session.user.id,
      },
    })

    const maxPage = Math.ceil(totalSchedules / 9)
    const existNextPage = page < maxPage
    const existPreviousPage = page > 1

    const schedules = await prisma.schedule.findMany({
      where: {
        status,
        userId: session.user.id,
      },
      include: {
        availableDate: true,
        pet: true,
        service: true,
        timeSlot: true,
      },
      take: 9,
      skip: (page - 1) * 9,
    })

    revalidatePath('/agendamentos')
    return NextResponse.json({
      maxPage,
      existNextPage,
      existPreviousPage,
      page,
      schedules,
    })
  } catch (error) {
    console.log(error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const { session } = await useUser()

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const bodySchema = z.object({
      timeSlotId: z.string(),
      availableDateId: z.string(),
      petId: z.string(),
      serviceId: z.string(),
      observations: z.string(),
    })

    const { timeSlotId, availableDateId, petId, serviceId, observations } =
      bodySchema.parse(await request.json())

    await prisma.time.update({
      where: {
        id: timeSlotId,
      },
      data: {
        reserved: true,
      },
    })

    const schedule = await prisma.schedule.create({
      data: {
        timeSlotId,
        availableDateId,
        petId,
        serviceId,
        observations,
        userId: session.user.id,
      },
    })

    revalidatePath('/agendamentos')
    return NextResponse.json(schedule, { status: 201 })
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
