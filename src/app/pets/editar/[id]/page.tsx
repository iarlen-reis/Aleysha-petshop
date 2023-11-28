import React from 'react'
import { headers } from 'next/headers'
import PageNavigation from '@/components/PageNavigation'
import PetEditForm from '@/components/app/Pets/PetEditForm'

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
  const response = await fetch(`http://localhost:3000/api/pets/${params.id}`, {
    headers: headers(),
  })

  const pet: PetProps = await response.json()
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
