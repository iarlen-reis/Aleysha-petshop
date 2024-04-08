import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SearchIcon } from 'lucide-react'
import { convertStatus } from '@/utils/convertStatus'
import clsx from 'clsx'

interface PetProps {
  id: string
  name: string
  image: string
}

interface ServiceProps {
  id: string
  name: string
  price: number
}

interface AvailableDateProps {
  id: string
  date: Date
}

interface TimeSlotProps {
  id: string
  timeSlot: string
}

interface ScheduleCardProps {
  id: string
  status: string
  observations: string
  pet: PetProps
  service: ServiceProps
  availableDate: AvailableDateProps
  timeSlot: TimeSlotProps
}

const ScheduleCard = (schedule: ScheduleCardProps) => {
  const formattedDate = new Date(
    schedule.availableDate.date,
  ).toLocaleDateString()
  return (
    <div className="w-full flex p-3 items-center justify-between gap-3 mx-auto sm:mx-0 shadow rounded-md overflow-hidden bg-background-input">
      <div className="flex items-center gap-3">
        <Image
          width={80}
          height={80}
          src={schedule.pet.image}
          className="w-[70px] h-[70px] rounded-full object-cover"
          alt={`Imagem do pet ${schedule.pet.name}`}
        />
        <div className="flex flex-col gap-2">
          <ul className="flex flex-col items-start font-ruluko">
            <li className="text-xl capitalize">{schedule.pet.name}</li>
            <li className="text-background-rose">{schedule.service.name}</li>
          </ul>
          <ul>
            <li className={clsx('', {
              'text-green-500 font-medium': schedule.status === 'completed',
              'text-red-500 font-medium': schedule.status === 'canceled',
            })}>
              {convertStatus(schedule.status)}
            </li>
            <li>
              {formattedDate} - {schedule.timeSlot.timeSlot}
            </li>
          </ul>
        </div>
      </div>
      <Link
        href={`/agendamentos/${schedule.id}`}
        className="flex items-center justify-center w-[50px] h-[50px] rounded-xl transition-all duration-300 bg-background-rose hover:opacity-80"
      >
        <SearchIcon size={25} strokeWidth={2} className="text-white" />
      </Link>
    </div>
  )
}

export default ScheduleCard
