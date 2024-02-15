import React from 'react'
import ScheduleCancelButton from '../ScheduleCancelButton'
import ScheduleFinishButton from '../SheduleFinishButton'
import { convertStatus } from '@/utils/convertStatus'

interface ScheduleProps {
  id: string
  status: string
  availableDate: {
    date: Date
  }
  pet: {
    name: string
  }
  service: {
    name: string
  }
  timeSlot: {
    timeSlot: string
    reserved: boolean
  }
}

const ScheduleReserved = ({
  id,
  availableDate,
  timeSlot,
  pet,
  service,
  status,
}: ScheduleProps) => {
  const statusConverted = convertStatus(status)

  return (
    <div className="flex flex-col overflow-auto">
      <div className="w-fit text-lg py-2 px-3 font-semibold md:text-xl rounded-t text-white bg-background-rose">
        {new Date(availableDate.date).toLocaleDateString()} |{' '}
        {timeSlot.timeSlot}
      </div>
      <ul className="min-w-[768px] w-full flex items-center justify-between text-lg uppercase text-white bg-background-rose p-3 rounded rounded-b-none rounded-tl-none font-ruluko md:min-w-full md:text-xl overflow-auto">
        <li className="w-[200px] md:w-[248px]">Horário</li>
        <li className="w-[200px] md:w-[248px]">Status</li>
        <li className="w-[200px] md:w-[248px]">Nome do pet</li>
        <li className="w-[200px] md:w-[248px]">Serviço</li>
        <li className="w-[200px] md:w-[248px]">Ações</li>
      </ul>
      <ul className="min-w-[768px] w-full bg-zinc-200 font-ruluko md:min-w-full overflow-auto">
        <li className="w-full flex items-center justify-between p-2 text-lg md:text-xl not-last:border-b not-last:border-background-rose/20 not-last:pb-3">
          <span className="w-[200px] md:w-[248px]">{timeSlot.timeSlot}</span>
          <span className="w-[200px] md:w-[248px]">{statusConverted}</span>
          <span className="w-[200px] md:w-[248px]">{pet.name}</span>
          <span className="w-[200px] md:w-[248px]">{service.name}</span>
          <div className="w-[200px] md:w-[248px] flex items-center gap-4">
            {status === 'pending' && <ScheduleFinishButton id={id} />}
            {status === 'pending' && <ScheduleCancelButton id={id} />}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ScheduleReserved
