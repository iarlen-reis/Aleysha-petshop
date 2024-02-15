import prisma from '@/utils/prisma'
import { useUser } from '@/hooks/useUser'
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
      const totalSchedules = await prisma.schedule.count()

      const maxPage = Math.ceil(totalSchedules / 4)
      const existNextPage = page < maxPage
      const existPreviousPage = page > 1

      const schedules = await prisma.schedule.findMany({
        include: {
          availableDate: {
            select: {
              date: true,
            },
          },
          pet: {
            select: {
              name: true,
            },
          },
          service: {
            select: {
              name: true,
            },
          },
          timeSlot: {
            select: {
              timeSlot: true,
              reserved: true,
            },
          },
        },
        take: 4,
        skip: (page - 1) * 4,
        orderBy: {
          availableDate: {
            date: 'asc',
          },
        },
      })

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
      },
    })

    const maxPage = Math.ceil(totalSchedules / 4)
    const existNextPage = page < maxPage
    const existPreviousPage = page > 1

    const schedules = await prisma.schedule.findMany({
      where: {
        status,
      },
      include: {
        availableDate: {
          select: {
            date: true,
          },
        },
        pet: {
          select: {
            name: true,
          },
        },
        service: {
          select: {
            name: true,
          },
        },
        timeSlot: {
          select: {
            timeSlot: true,
            reserved: true,
          },
        },
      },
      take: 4,
      skip: (page - 1) * 4,
      orderBy: {
        availableDate: {
          date: 'asc',
        },
      },
    })

    return NextResponse.json({
      page,
      maxPage,
      existNextPage,
      existPreviousPage,
      schedules,
    })
  } catch (error) {
    console.log(error)
  }
}
