'use client'
import { api } from '@/services/api'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useMutation, useQuery, useQueryClient } from 'react-query'

interface PetProps {
  id: string
  name: string
  image: string
  age: number
  race: string
  gender: string
  observations: string
}

interface GetAllPetProps {
  page: number
  maxPage: number
  existNextPage: boolean
  existPreviousPage: boolean
  pets: PetProps[]
}

interface UpdatePetProps extends PetProps {
  id: string
}

interface UsePetProps {
  pets: GetAllPetProps | undefined
  petsLoading: boolean
  createPet: (data: Omit<PetProps, 'id'>) => void
  createPetLoading: boolean
  updatePet: (data: UpdatePetProps) => void
  updatePetLoading: boolean
  deletePet: (id: string) => void
  deletePetLoading: boolean
}

export const usePet = (): UsePetProps => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const { data: pets, isLoading: petsLoading } = useQuery('pets', async () => {
    const response = await api.get<GetAllPetProps>('/pets')

    return response.data
  }, {
    staleTime: 1000 * 60 * 10 // 10 minutes
  })

  const { mutate: createPet, isLoading: createPetLoading } = useMutation(
    async (data: Omit<PetProps, 'id'>) => {
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
      onSuccess: (data: PetProps) => {
        const allPets = queryClient.getQueryData<GetAllPetProps>('pets')

        if (allPets) {
         const newPets = [...allPets.pets, data]

         queryClient.setQueryData('pets', {
           ...allPets,
           pets: newPets,
         })
        }

        router.push(`/pets`)
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
      onSuccess: (data: PetProps) => {
        const allPets = queryClient.getQueryData<GetAllPetProps>('pets')
        const pet = queryClient.getQueryData<PetProps>(['pet', data.id])

        if (allPets) {
          const newPets = allPets.pets.map((pet) => {
            if (pet.id === data.id) {
              return data
            }
            return pet
          })

          queryClient.setQueryData('pets', {
            ...allPets,
            pets: newPets,
          })
        }

        if (pet) {
          queryClient.setQueryData(['pet', data.id], data)
        }

        router.push(`/pets`)
        toast.success('Pet editado com sucesso')
      },
      onError: () => {
        toast.error('Erro ao editar o pet, tente novamente.')
      },
    },
  )

  const { mutate: deletePet, isLoading: deletePetLoading } = useMutation(
    async (id: string) => {
      const response = await api.delete(`/pets/${id}`)

      return response.data
    },
    {
      onSuccess: (data: PetProps) => {
        const allPets = queryClient.getQueryData<GetAllPetProps>('pets')

        if (allPets) {
          const newPets = allPets.pets.filter((pet) => pet.id !== data.id)

          queryClient.setQueryData('pets', {
            ...allPets,
            pets: newPets,
          })
        }

        router.push('/pets')
        toast.success('Pet deletado com sucesso')
      },
    },
  )

  return {
    pets,
    petsLoading,
    createPet,
    createPetLoading,
    updatePet,
    updatePetLoading,
    deletePet,
    deletePetLoading,
  }
}
