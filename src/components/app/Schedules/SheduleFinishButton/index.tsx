'use client'
import React from 'react'
import { CheckIcon } from 'lucide-react'
import { useSchedules } from '@/hooks/useSchedules'

interface ScheduleFinishButtonProps {
  id: string
}

const ScheduleFinishButton = ({ id }: ScheduleFinishButtonProps) => {
  const { finishShedule, finishSheduleLoading } = useSchedules()
  const handleFinishSchedule = () => {
    if (confirm('Tem certeza que deseja finalizar o agendamento?')) {
      finishShedule(id)
    }
  }

  return (
    <button
      className="p-1 hover:bg-white hover:rounded-full transition-all duration-300"
      onClick={handleFinishSchedule}
      disabled={finishSheduleLoading}
    >
      <CheckIcon
        className="cursor-pointer text-green-500"
        shapeRendering={'geometricPrecision'}
        size={25}
      />
    </button>
  )
}

export default ScheduleFinishButton
