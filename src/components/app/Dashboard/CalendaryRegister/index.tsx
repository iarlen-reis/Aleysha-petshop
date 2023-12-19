'use client'
import dayjs from 'dayjs'
import React from 'react'
import DatePicker from 'react-datepicker'
import { CalendarDaysIcon } from 'lucide-react'
import { AvailableDate } from '@/hooks/useHorary'
import 'react-datepicker/dist/react-datepicker.css'

interface CalendaryRegisterProps {
  disabled: boolean
  selectedDate: Date | null
  availableDates: AvailableDate[]
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>
}

const CalendaryRegister = ({
  disabled,
  selectedDate,
  availableDates,
  setSelectedDate,
}: CalendaryRegisterProps) => {
  const handleDateChange = (date: Date) => {
    setSelectedDate(date)
  }

  const filterDates = (date: Date) => {
    return dayjs().isBefore(dayjs(date))
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <h2 className="font-ruluko text-lg uppercase">Selecione a data:</h2>
      <div>
        <DatePicker
          showIcon
          disabled={disabled}
          dateFormat="dd/MM/yyyy"
          selected={selectedDate}
          filterDate={filterDates}
          onChange={handleDateChange}
          wrapperClassName="datePicker"
          placeholderText="Selecione uma data"
          excludeDates={availableDates.map((date) => new Date(date.date))}
          icon={<CalendarDaysIcon size={20} strokeWidth={2} color="#FFF" />}
        />
      </div>
    </div>
  )
}

export default CalendaryRegister
