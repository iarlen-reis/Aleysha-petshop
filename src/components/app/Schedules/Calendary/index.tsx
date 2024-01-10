'use client'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'
import { CalendarDaysIcon } from 'lucide-react'
import { AvailableDate } from '@/hooks/useHorary'
import React, { useEffect, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'

interface AvailableTimeProps {
  id: string
  dateId: string
  timeSlot: string
  reserved: boolean
}

interface ScheduleProps {
  dateId: string
  timeId: string
}

interface CalendaryProps {
  disabled: boolean
  setSchedule: React.Dispatch<React.SetStateAction<ScheduleProps | null>>
  availableDates: AvailableDate[]
}

const Calendary = ({
  setSchedule,
  availableDates,
  disabled,
}: CalendaryProps) => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null)
  const [timeslots, setTimeslots] = useState<AvailableTimeProps[]>([])

  const handleDateTimeChange = (date: Date) => {
    const selectedDay = availableDates.find((day) => {
      return new Date(day.date).toDateString() === date.toDateString()
    })

    const selectedHorary = date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    })

    const selectedTime = selectedDay?.availableTimes.find((time) => {
      return time.timeSlot === selectedHorary
    })

    if (selectedDay && selectedTime) {
      setSchedule({
        dateId: selectedDay.id,
        timeId: selectedTime.id,
      })
    }

    setSelectedDateTime(date)
  }

  useEffect(() => {
    const selectedDay = availableDates.find((day) => {
      return (
        new Date(day.date).toDateString() === selectedDateTime?.toDateString()
      )
    }) as AvailableDate

    if (selectedDay && selectedDay.availableTimes) {
      const times = selectedDay.availableTimes
        .filter((time) => {
          return time.reserved === false
        })
        .map((time) => {
          const [hours, minutes] = time.timeSlot.split(':')
          const currentDate = new Date()
          currentDate.setHours(Number(hours))
          currentDate.setMinutes(Number(minutes))

          return {
            id: time.id,
            dateId: selectedDay.id,
            timeSlot: currentDate,
            reserved: time.reserved,
          }
        })

      setTimeslots(times as unknown as AvailableTimeProps[])
    }
  }, [availableDates, selectedDateTime])

  const filterTimeslots = (date: Date) => {
    return dayjs().isBefore(dayjs(date))
  }

  const filterDates = (date: Date) => {
    return dayjs().isBefore(dayjs(date))
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <h2 className="font-ruluko text-lg uppercase">Selecione a data:</h2>
      <DatePicker
        showIcon
        showTimeSelect
        timeFormat="HH:mm"
        disabled={disabled}
        filterDate={filterDates}
        selected={selectedDateTime}
        dateFormat="dd/MM/yyyy HH:mm"
        filterTime={filterTimeslots}
        onChange={handleDateTimeChange}
        wrapperClassName="datePicker"
        placeholderText="Selecione uma data"
        includeTimes={timeslots.map((time) => new Date(time.timeSlot))}
        includeDates={availableDates.map((date) => new Date(date.date))}
        icon={<CalendarDaysIcon size={20} strokeWidth={2} color="#000" />}
      />
    </div>
  )
}

export default Calendary
