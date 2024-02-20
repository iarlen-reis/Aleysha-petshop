'use client'
import React from 'react'
import { useQuery } from 'react-query'
import { api } from '@/services/api'
import PetEditForm from '@/components/app/Pets/PetEditForm'
import PageNavigation from '@/components/PageNavigation'
import LoadingEdit from './loading'
import PetEditLoading from './loading'

export const dynamic = 'force-dynamic'

interface Params {
  params: {
    id: string
  }
}

interface PetProps {
  id: string;
  name: string;
  image: string;
  age: number;
  race: string;
  gender: string;
  observations: string;
}

const PetEditPage = ({ params }: Params) => {
  const {data: pet, isLoading} = useQuery(['pet', params.id], async () => {
    const response = await api.get<PetProps>(`/pets/${params.id}`)
    return response.data
  }, {
    staleTime: 1000 * 60 * 10 // 10 minutes
  })

  if(isLoading || !pet) {
    return <PetEditLoading />
  }

  return (
    <div className="min-h-screen h-full max-w-[600px] w-full mx-auto">
      <PageNavigation title={pet.name} backText="Meus pets" backLink="/pets" />
      <PetEditForm {...pet} />
    </div>
  )
}

export default PetEditPage
