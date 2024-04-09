import { useMutation, useQuery, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import { api } from '@/services/api'

interface AddHoraryProps {
  date: string
  timeSlot: string[]
}

export interface AvailableTimeProps {
  id: string
  dateId: string
  timeSlot: string
  reserved: boolean
}

export interface AvailableDate {
  id: string
  date: Date
  availableTimes: AvailableTimeProps[]
}

interface EditHoraryProps {
  availableDateId: string
  timeSlot: string[]
}

interface UseHoraryProps {
  addHorary: (data: AddHoraryProps) => void
  addHoraryLoading: boolean
  availableDates: AvailableDate[] | undefined
  availableDatesLoading: boolean
  editHorary: (data: EditHoraryProps) => void
  editHoraryLoading: boolean
}

export const useHorary = (): UseHoraryProps => {
  const queryClient = useQueryClient()

  const { mutate: addHorary, isLoading: addHoraryLoading } = useMutation(
    async ({ date, timeSlot }: AddHoraryProps) => {
      const response = await api.post('/dates', {
        date,
        timeSlot,
      })

      return response.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('availableDates')
        toast.success('Horário adicionado com sucesso!')
      },
    },
  )

  const { data: availableDates, isLoading: availableDatesLoading } = useQuery(['availableDates'], async () => {
    const response = await api.get<AvailableDate[]>(
      '/dates',
    )

    return response.data
  })

  const { mutate: editHorary, isLoading: editHoraryLoading } = useMutation(
    async ({ availableDateId, timeSlot }: EditHoraryProps) => {
      const response = await api.put(
        `/dates/${availableDateId}`,
        {
          timeSlot,
        },
      )

      return response.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('availableDates')
        toast.success('Horários atualizados com sucesso!')
      },
      onError: () => {
        toast.error('Erro ao atualizar os horários, tente novamente!')
      },
    },
  )
  return {
    addHorary,
    addHoraryLoading,
    availableDates,
    availableDatesLoading,
    editHorary,
    editHoraryLoading,
  }
}
