import React from 'react'
import Link from 'next/link'

interface FilterScheduleProps {
  status: string
}

const FilterSchedules = ({ status }: FilterScheduleProps) => {
  return (
    <div>
      <ul className="flex items-center gap-2 font-ruluko text-sm uppercase sm:text-base lg:text-lg">
        <li>
          <Link
            href="/agendamentos?page=1"
            prefetch
            className={
              status === undefined ? 'font-semibold text-background-rose' : ''
            }
          >
            Todos
          </Link>
        </li>
        <li>
          <Link
            href="/agendamentos?page=1&status=pending"
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
            href="/agendamentos?page=1&status=completed"
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
            href="/agendamentos?page=1&status=canceled"
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
