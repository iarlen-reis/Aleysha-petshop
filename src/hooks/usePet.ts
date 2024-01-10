'use client'
import { api } from '@/services/api'
import { toast } from 'react-toastify'
import { useMutation, useQuery } from 'react-query'
import { useRouter } from 'next/navigation'

interface PetProps {
  name: string
  image: string
  age: number
  race: string
  gender: string
  observations: string
}

interface GetPetProps extends PetProps {
  id: string
}

interface UpdatePetProps extends PetProps {
  id: string
}

interface DeletePetProps {
  id: string
  userId: string
}

interface UsePetProps {
  pets: GetPetProps[] | undefined
  createPet: (data: PetProps) => void
  createPetLoading: boolean
  updatePet: (data: UpdatePetProps) => void
  updatePetLoading: boolean
  deletePet: (data: DeletePetProps) => void
  deletePetLoading: boolean
}

export const usePet = (): UsePetProps => {
  const router = useRouter()

  const { data: pets } = useQuery('pets', async () => {
    const response = await api.get<GetPetProps[]>('/pets')

    return response.data
  })

  const { mutate: createPet, isLoading: createPetLoading } = useMutation(
    async (data: PetProps) => {
      const response = await api.post(
        '/pets',
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
      onSuccess: (data: GetPetProps) => {
        router.push(`/pets/${data.id}`)
        toast.success('Pet criado com sucesso')
      },
      onError: () => {
        toast.error('Erro ao criar o pet, tente novamente.')
      },
    },
  )

  const { mutate: updatePet, isLoading: updatePetLoading } = useMutation(
    async (data: UpdatePetProps) => {
      const response = await api.put(`/pets/${data.id}`, {
        ...data,
      })

      return response.data
    },
    {
      onSuccess: (data: GetPetProps) => {
        router.prefetch(`/pets/${data.id}`)
        router.push(`/pets/${data.id}`)
        toast.success('Pet editado com sucesso')
      },
      onError: () => {
        toast.error('Erro ao editar o pet, tente novamente.')
      },
    },
  )

  const { mutate: deletePet, isLoading: deletePetLoading } = useMutation(
    async (data: DeletePetProps) => {
      const response = await api.delete(`/pets/${data.id}`)

      return response.data
    },
    {
      onSuccess: () => {
        router.prefetch('/pets')
        router.push('/pets')
        toast.success('Pet deletado com sucesso')
      },
    },
  )

  return {
    pets,
    createPet,
    createPetLoading,
    updatePet,
    updatePetLoading,
    deletePet,
    deletePetLoading,
  }
}
