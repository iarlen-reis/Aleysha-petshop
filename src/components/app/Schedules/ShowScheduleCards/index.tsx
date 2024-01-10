'use client'
import { api } from '@/services/api'
import { useQuery } from 'react-query'
import React, { useEffect } from 'react'
import ScheduleCard from '../ScheduleCard'
import { Pagination } from '@/components/Pagination'
import { SchedulePageProps } from '@/hooks/useSchedules'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

interface ShowScheduleCardsProps {
  status: string
  page: string
}

const ShowScheduleCards = ({ status, page }: ShowScheduleCardsProps) => {
  const { data: schedules, refetch } = useQuery('schedules', async () => {
    const { data } = await api.get<SchedulePageProps>(
      `/schedules?page=${page}${status ? `&status=${status}` : ''}`,
    )
    return data
  })

  useEffect(() => {
    refetch()
  }, [status, page])

  return (
    <>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:justify-between">
        {schedules &&
          schedules.schedules.map((schedule) => (
            <ScheduleCard key={schedule.id} {...schedule} />
          ))}
      </div>
      <Pagination.Root>
        {schedules && schedules.existPreviousPage && (
          <Pagination.LinkContainer>
            <Pagination.Link
              url={`/agendamentos?page=${schedules.page - 1}
            ${status ? `&status=${status}` : ''}
            `}
            >
              <Pagination.Icon icon={ChevronLeftIcon} />
            </Pagination.Link>
          </Pagination.LinkContainer>
        )}
        {schedules && schedules.maxPage > 1 && (
          <Pagination.Indicator page={schedules.page} />
        )}
        {schedules && schedules.existNextPage && (
          <Pagination.LinkContainer>
            <Pagination.Link
              url={`/agendamentos?page=${schedules.page + 1}
            ${status ? `&status=${status}` : ''}
            `}
            >
              <Pagination.Icon icon={ChevronRightIcon} />
            </Pagination.Link>
          </Pagination.LinkContainer>
        )}
      </Pagination.Root>
    </>
  )
}

export default ShowScheduleCards
