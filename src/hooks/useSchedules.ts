import { api } from '@/services/api'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useMutation, useQuery, useQueryClient } from 'react-query'

export interface PetProps {
  id: string
  name: string
  image: string
  race: string
  age: number
  gender: string
}

export interface ServiceProps {
  id: string
  name: string
  price: number
  image: string
  description: string
}

export interface AvailableDateProps {
  id: string
  date: Date
}

export interface TimeSlotProps {
  id: string
  timeSlot: string
}

export interface ScheduleProps {
  id: string
  status: string
  observations: string
  pet: PetProps
  service: ServiceProps
  availableDate: AvailableDateProps
  timeSlot: TimeSlotProps
}

interface SchedulePostProps {
  petId: string
  serviceId: string
  timeSlotId: string
  availableDateId: string
}

export interface SchedulePageProps {
  schedules: ScheduleProps[]
  page: number
  maxPage: number
  existNextPage: boolean
  existPreviousPage: boolean
}

interface useSchedulesProps {
  schedulesLoading: boolean
  schedules: SchedulePageProps | undefined
  getScheduleLoading: boolean
  schedule: ScheduleProps | undefined
  getSchedule: (scheduleId: string) => void
  addSheduleLoading: boolean
  addShedule: (data: SchedulePostProps) => void
  cancelSheduleLoading: boolean
  cancelShedule: (scheduleId: string) => void
  finishShedule: (scheduleId: string) => void
  finishSheduleLoading: boolean
}

export const useSchedules = (): useSchedulesProps => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const { data: schedules, isLoading: schedulesLoading } = useQuery(
    'schedules',
    async () => {
      const response = await api.get<SchedulePageProps>('/schedules')

      return response.data
    },
  )

  const { mutate: addShedule, isLoading: addSheduleLoading } = useMutation(
    async (data: SchedulePostProps) => {
      const response = await api.post('/schedules', {
        ...data,
      })

      return response.data
    },
    {
      onSuccess: () => {
        router.push('/agendamentos')
        queryClient.invalidateQueries('schedules')
        queryClient.invalidateQueries('availableDates')
        toast.success('Agendamento feito com sucesso!')
      },
    },
  )

  const {
    mutate: getSchedule,
    isLoading: getScheduleLoading,
    data: schedule,
  } = useMutation(async (scheduleId: string) => {
    const response = await api.get<ScheduleProps>(`/schedules/${scheduleId}`)

    return response.data
  })

  const { mutate: cancelShedule, isLoading: cancelSheduleLoading } =
    useMutation(
      async (scheduleId: string) => {
        const response = await api.delete(`/schedules/${scheduleId}`)

        return response.data
      },
      {
        onSuccess: () => {
          router.push('/agendamentos')
          queryClient.invalidateQueries('schedules')
          queryClient.invalidateQueries('availableDates')
          toast.success('Agendamento cancelado com sucesso!')
        },
      },
    )

  const { mutate: finishShedule, isLoading: finishSheduleLoading } =
    useMutation(
      async (scheduleId: string) => {
        const response = await api.patch(`/schedules/${scheduleId}`)
        return response.data
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries('schedules')
          queryClient.invalidateQueries('availableDates')
          toast.success('Agendamento finalizado com sucesso!')
        },
      },
    )

  return {
    schedules,
    schedulesLoading,
    getSchedule,
    schedule,
    getScheduleLoading,
    addShedule,
    addSheduleLoading,
    cancelShedule,
    cancelSheduleLoading,
    finishShedule,
    finishSheduleLoading,
  }
}
