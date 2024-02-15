'use client'
import React from 'react'
import { XIcon } from 'lucide-react'
import { useSchedules } from '@/hooks/useSchedules'

interface ScheduleCancelButtonProps {
  id: string
}

const ScheduleCancelButton = ({ id }: ScheduleCancelButtonProps) => {
  const { cancelShedule, cancelSheduleLoading } = useSchedules()

  const handleCancelSchedule = () => {
    if (confirm('Tem certeza que deseja cancelar o agendamento?')) {
      cancelShedule(id)
    }
  }

  return (
    <button
      className="p-1 hover:bg-white hover:rounded-full transition-all duration-300"
      onClick={handleCancelSchedule}
      disabled={cancelSheduleLoading}
    >
      <XIcon className="cursor-pointer text-background-rose" size={25} />
    </button>
  )
}

export default ScheduleCancelButton
