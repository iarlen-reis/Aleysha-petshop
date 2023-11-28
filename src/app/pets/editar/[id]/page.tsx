import PageNavigation from '@/components/PageNavigation'
import PetEditForm from '@/components/app/Pets/PetEditForm'
import { api } from '@/services/api'
import React from 'react'

interface Params {
  params: {
    id: string
  }
}

interface PetProps {
  id: string
  name: string
  image: string
  age: number
  race: string
  gender: string
  observations: string
}

const PetEditPage = async ({ params }: Params) => {
  const response = await api.get<PetProps>(`/pets/${params.id}`)

  const pet = response.data
  return (
    <div className="min-h-screen max-w-[600px] w-full mx-auto">
      <div>
        <PageNavigation
          title={pet.name}
          backText="Meus pets"
          backLink="/pets"
        />
      </div>
      <PetEditForm {...pet} />
    </div>
  )
}

export default PetEditPage
