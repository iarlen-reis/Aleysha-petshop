'use client'
import React from 'react'
import { useSchedules } from '@/hooks/useSchedules'

interface CancelScheduleButtonProps {
  idSchedule: string
}

export const CancelScheduleButton = ({
  idSchedule,
}: CancelScheduleButtonProps) => {
  const { cancelShedule, cancelSheduleLoading } = useSchedules()

  const handleCancelSchedule = () => {
    if (confirm('Tem certeza que deseja cancelar o agendamento?')) {
      cancelShedule(idSchedule)
    }
  }

  return (
    <button
      onClick={handleCancelSchedule}
      disabled={cancelSheduleLoading}
      className="w-full p-2 font-crimson font-semibold uppercase text-lg text-center rounded-lg text-white transition-all duration-300 bg-background-rose hover:opacity-80 disabled:bg-zinc-400 disabled:animate-pulse"
    >
      Cancelar agendamento
    </button>
  )
}
