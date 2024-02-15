'use client'
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface FilterScheduleProps {
  pathname: string
}

const FilterSchedules = ({ pathname }: FilterScheduleProps) => {
  const searchParams = useSearchParams()

  const status = searchParams.get('status')

  return (
    <div>
      <ul className="flex items-center gap-2 font-ruluko text-sm uppercase sm:text-base lg:text-lg">
        <li>
          <Link
            href={`/${pathname}?page=1`}
            prefetch
            className={
              status === null ? 'font-semibold text-background-rose' : ''
            }
          >
            Todos
          </Link>
        </li>
        <li>
          <Link
            href={`/${pathname}?page=1&status=pending`}
            prefetch
            className={
              status === 'pending' ? 'font-semibold text-background-rose' : ''
            }
          >
            Pendentes
          </Link>
        </li>
        <li>
          <Link
            href={`/${pathname}?page=1&status=completed`}
            prefetch
            className={
              status === 'completed' ? 'font-semibold text-background-rose' : ''
            }
          >
            Concluídos
          </Link>
        </li>
        <li>
          <Link
            href={`/${pathname}?page=1&status=canceled`}
            prefetch
            className={
              status === 'canceled' ? 'font-semibold text-background-rose' : ''
            }
          >
            Cancelados
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default FilterSchedules
