import axios from 'axios'
import { toast } from 'react-toastify'
import { useMutation, useQuery, useQueryClient } from 'react-query'

interface AddHoraryProps {
  date: string
  timeSlot: string[]
}

export interface AvailableTimeProps {
  id: string
  dateId: string
  timeSlot: string
}

export interface AvailableDate {
  id: string
  date: Date
  availableTimes: AvailableTimeProps[]
}

interface UseHoraryProps {
  addHorary: (data: AddHoraryProps) => void
  addHoraryLoading: boolean
  availableDates: AvailableDate[] | undefined
}

export const useHorary = (): UseHoraryProps => {
  const queryClient = useQueryClient()

  const { mutate: addHorary, isLoading: addHoraryLoading } = useMutation(
    async ({ date, timeSlot }: AddHoraryProps) => {
      const response = await axios.post('http://localhost:3000/api/dates', {
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

  const { data: availableDates } = useQuery(['availableDates'], async () => {
    const response = await axios.get<AvailableDate[]>(
      'http://localhost:3000/api/dates',
    )

    return response.data
  })

  return {
    addHorary,
    addHoraryLoading,
    availableDates,
  }
}
