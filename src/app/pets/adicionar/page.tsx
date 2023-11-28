import React from 'react'
import PetForm from '@/components/app/Pets/PetForm'
import PageNavigation from '@/components/PageNavigation'

const CreatePetPage = () => {
  return (
    <div className="min-h-screen max-w-[600px] w-full mx-auto flex flex-col gap-6">
      <PageNavigation title="Novo pet" backText="Meus pets" backLink="/pets" />
      <div className="mt-4">
        <PetForm />
      </div>
    </div>
  )
}

export default CreatePetPage
