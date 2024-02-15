import React from 'react'
import { headers } from 'next/headers'
import ScheduleReserved from '@/components/app/Schedules/ScheduleReserved'
import { Pagination } from '@/components/Pagination'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import FilterSchedules from '@/components/app/Schedules/FilterSchedules'

interface Params {
  searchParams: {
    page: string
    status: string
  }
}

interface ScheduleProps {
  id: string
  status: string
  availableDate: {
    date: Date
  }
  pet: {
    name: string
  }
  service: {
    name: string
  }
  timeSlot: {
    timeSlot: string
    reserved: boolean
  }
}

interface SchedulesProps {
  page: number
  maxPage: number
  existNextPage: boolean
  existPreviousPage: boolean
  schedules: ScheduleProps[]
}

const HoraryPage = async ({ searchParams }: Params) => {
  const response = await fetch(
    `http://localhost:3000/api/dashboard/schedules?page=${searchParams.page}${
      searchParams.status ? `&status=${searchParams.status}` : ''
    }`,
    {
      headers: headers(),
    },
  )

  const horaries: SchedulesProps = await response.json()

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
      {horaries.schedules.map((schedule) => (
        <ScheduleReserved key={schedule.id} {...schedule} />
      ))}
      <Pagination.Root>
        {horaries && horaries.existPreviousPage && (
          <Pagination.LinkContainer>
            <Pagination.Link
              url={`/dashboard/horarios?page=${horaries.page - 1}${
                searchParams.status ? `&status=${searchParams.status}` : ''
              }`}
            >
              <Pagination.Icon icon={ChevronLeftIcon} />
            </Pagination.Link>
          </Pagination.LinkContainer>
        )}
        {horaries.maxPage > 1 && <Pagination.Indicator page={horaries.page} />}
        {horaries && horaries.existNextPage && (
          <Pagination.LinkContainer>
            <Pagination.Link
              url={`/dashboard/horarios?page=${horaries.page + 1}${
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
