import React from 'react'
import prisma from '@/utils/prisma'
import { Pagination } from '@/components/Pagination'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import FilterSchedules from '@/components/app/Schedules/FilterSchedules'
import ScheduleReserved from '@/components/app/Schedules/ScheduleReserved'

interface Params {
  searchParams: {
    page: string
    status: string
  }
}

const HoraryPage = async ({ searchParams }: Params) => {
  const page = Number(searchParams.page) || 1

  const allHoraries = await prisma.schedule.count({
    where: {
      status: {
        contains: searchParams.status,
        mode: 'insensitive',
      }
    }
  })

  const maxPage = Math.ceil(allHoraries / 4)
  const existNextPage = page < maxPage
  const existPreviousPage = page > 1

  const horaries =  await prisma.schedule.findMany({
      where: {
        status: {
          contains: searchParams.status,
          mode: 'insensitive',
        },
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

  return (
    <div className="min-h-screen w-full flex flex-col gap-6">
      <div>
        <h1 className="font-ruluko font-semibold text-3xl">
          Horários reservados
        </h1>
        <p className="font-ruluko text-lg">
          Aqui estão todos os horários reservados.
        </p>
      </div>
      <FilterSchedules pathname="dashboard/horarios" />
      {horaries.map((schedule) => (
        <ScheduleReserved key={schedule.id} {...schedule} />
      ))}
      <Pagination.Root>
        {existPreviousPage && (
          <Pagination.LinkContainer>
            <Pagination.Link
              url={`/dashboard/horarios?page=${page - 1}${
                searchParams.status ? `&status=${searchParams.status}` : ''
              }`}
            >
              <Pagination.Icon icon={ChevronLeftIcon} />
            </Pagination.Link>
          </Pagination.LinkContainer>
        )}
        {maxPage > 1 && <Pagination.Indicator page={page} />}
        {existNextPage && (
          <Pagination.LinkContainer>
            <Pagination.Link
              url={`/dashboard/horarios?page=${page + 1}${
                searchParams.status ? `&status=${searchParams.status}` : ''
              }`}
            >
              <Pagination.Icon icon={ChevronRightIcon} />
            </Pagination.Link>
          </Pagination.LinkContainer>
        )}
      </Pagination.Root>
    </div>
  )
}

export default HoraryPage
