'use client'
import { useHorary } from '@/hooks/useHorary'
import dayjs from 'dayjs'
import { CalendarDaysIcon } from 'lucide-react'
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import CalendaryTimeSlots from '../CalendaryTimeSlots'

const CalendaryEdit = () => {
  const { availableDates, editHorary, editHoraryLoading } = useHorary()
  const [timeSlots, setTimeSlots] = useState<string[]>([])
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [availableDateId, setAvailableDateId] = useState<string>('')

  const filterDates = (date: Date) => {
    return dayjs().isBefore(dayjs(date))
  }

  const handleSelectedDate = (date: Date) => {
    setSelectedDate(date)

    const findedDate = availableDates?.find((availableDate) => {
      return date.toISOString() === new Date(availableDate.date).toISOString()
    })

    if (findedDate) {
      setTimeSlots(
        findedDate.availableTimes.map(
          (availableTime) => availableTime.timeSlot,
        ),
      )

      setAvailableDateId(findedDate.id)
    }
  }

  const handleEditHorary = () => {
    editHorary({
      availableDateId,
      timeSlot: timeSlots,
    })
  }

  return (
    <div>
      <div className="flex flex-col gap-2 w-full">
        <h2 className="font-ruluko text-lg uppercase">Selecione a data:</h2>
        {availableDates && (
          <ReactDatePicker
            showIcon
            dateFormat="dd/MM/yyyy"
            selected={selectedDate}
            filterDate={filterDates}
            disabled={editHoraryLoading}
            wrapperClassName="datePicker"
            onChange={handleSelectedDate}
            placeholderText="Selecione uma data"
            includeDates={availableDates.map((date) => new Date(date.date))}
            icon={<CalendarDaysIcon size={20} strokeWidth={2} color="#FFF" />}
          />
        )}
      </div>
      {selectedDate && (
        <div className="flex flex-col gap-4">
          {timeSlots && (
            <CalendaryTimeSlots
              selectedTimes={timeSlots}
              setSelectedTimes={setTimeSlots}
              disabled={editHoraryLoading}
            />
          )}
          {timeSlots.length > 0 && (
            <button
              onClick={handleEditHorary}
              disabled={editHoraryLoading}
              className="p-2 bg-background-rose text-white rounded hover:opacity-80 transition-all sm:w-[200px] sm:flex sm:self-end sm:items-center sm:justify-center disabled:bg-zinc-400 disabled:animate-pulse"
            >
              Editar
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default CalendaryEdit
