'use client'
import React from 'react'
import { useHorary } from '@/hooks/useHorary'
import PageNavigation from '@/components/PageNavigation'
import CalendaryRegister from '@/components/app/Dashboard/CalendaryRegister'
import CalendaryTimeSlots from '@/components/app/Dashboard/CalendaryTimeSlots'

const HoraryPage = () => {
  const { addHorary, addHoraryLoading, availableDates } = useHorary()
  const [selectedTimes, setSelectedTimes] = React.useState<string[]>([])
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null)

  const handleAddHorary = () => {
    if (!selectedDate || !selectedTimes.length) {
      return
    }
    const horary = {
      date: selectedDate.toISOString(),
      timeSlot: selectedTimes,
    }

    addHorary(horary)
    setSelectedTimes([])
    setSelectedDate(null)
  }

  return (
    <div className="min-h-screen max-w-[500px] w-full mx-auto flex flex-col gap-10">
      <PageNavigation
        title="Adicionar horários"
        backText="Dashboard"
        backLink="/dashboard"
      />

      <div className="flex flex-col gap-4">
        <CalendaryRegister
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          availableDates={availableDates || []}
          disabled={addHoraryLoading}
        />
        <CalendaryTimeSlots
          selectedTimes={selectedTimes}
          setSelectedTimes={setSelectedTimes}
          disabled={addHoraryLoading}
        />
        <button
          className="p-2 bg-background-rose text-white rounded hover:opacity-80 transition-all sm:w-[200px] sm:flex sm:self-end sm:items-center sm:justify-center disabled:bg-zinc-400 disabled:animate-pulse"
          onClick={handleAddHorary}
          disabled={addHoraryLoading || !selectedDate || !selectedTimes.length}
        >
          Adicionar
        </button>
      </div>
    </div>
  )
}

export default HoraryPage
