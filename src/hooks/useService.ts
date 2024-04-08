import { api } from '@/services/api'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useMutation, useQuery, useQueryClient } from 'react-query'

interface ServiceProps {
  id: string
  name: string
  price: number
  image: string
  description: string
}

interface UseServiceProps {
  services: ServiceProps[] | undefined
  servicesLoading: boolean
  getServiceById: (id: string) => void
  service: ServiceProps | undefined
  createServiceLoading: boolean
  createService: (data: Omit<ServiceProps, 'id'>) => void
  editServiceLoading: boolean
  editService: (data: Omit<ServiceProps, 'image'>) => void
  deleteServiceLoading: boolean
  deleteService: (id: string) => void
}

export const useService = (): UseServiceProps => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const { data: services, isLoading: servicesLoading } = useQuery('services', async () => {
    const response = await api.get<ServiceProps[]>('/services')

    return response.data
  })

  const { mutate: getServiceById, data: service } = useMutation(
    async (id: string) => {
      const response = await api.get<ServiceProps>(`/services/${id}`)

      return response.data
    },
  )

  const { mutate: createService, isLoading: createServiceLoading } =
    useMutation(
      async (data: Omit<ServiceProps, 'id'>) => {
        const response = await api.post(
          '/services',
          {
            ...data,
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        )

        return response.data
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries('services')
          toast.success('Serviço criado com sucesso!')
        },
        onError: () => {
          toast.error('Erro ao criar o serviço, tente novamente.')
        },
      },
    )

  const { mutate: editService, isLoading: editServiceLoading } = useMutation(
    async (data: Omit<ServiceProps, 'image'>) => {
      const response = await api.put(
        `/services/${data.id}`,
        {
          ...data,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )

      return response.data
    },
    {
      onSuccess: (data: ServiceProps) => {
        queryClient.invalidateQueries(['services', data.id])
        queryClient.invalidateQueries('services')
        router.push(`/dashboard/servicos/${data.id}`)
        toast.success('Serviço editado com sucesso!')
      },
      onError: () => {
        toast.error('Erro ao editar o serviço, tente novamente.')
      },
    },
  )

  const { mutate: deleteService, isLoading: deleteServiceLoading } =
    useMutation(
      async (id: string) => {
        const response = await api.delete(`/services/${id}`)

        return response.data
      },
      {
        onSuccess: () => {
          router.push('/dashboard/servicos')
          queryClient.invalidateQueries('services')
          toast.success('Serviço excluído com sucesso!')
        },
        onError: () => {
          toast.error('Erro ao excluir o serviço, tente novamente.')
        },
      },
    )

  return {
    services,
    servicesLoading,
    service,
    getServiceById,
    createServiceLoading,
    createService,
    editServiceLoading,
    editService,
    deleteServiceLoading,
    deleteService,
  }
}
