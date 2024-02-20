'use client'
import React from 'react'
import Image from 'next/image'
import { usePet } from '@/hooks/usePet'
import { useSession } from 'next-auth/react'
import ButtonDeletePet from '../ButtonDeletePet'
import InputField from '@/components/InputField'
import SelectField from '@/components/SelectField'
import TextAreaInput from '@/components/TextAreaField'
import { FormProvider, useForm } from 'react-hook-form'

interface useFormProps {
  age: number
  name: string
  race: string
  gender: 'M' | 'F'
  observations: string
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

const PetEditForm = (pet: PetProps) => {
  const methods = useForm<useFormProps>()
  const { updatePet, updatePetLoading } = usePet()
  const { data: session } = useSession()

  if (!session?.user) {
    return
  }

  const handleEditPet = (data: useFormProps) => {
    const petUpdated = {
      ...data,
      id: pet.id,
      image: pet.image,
      age: Number(data.age),
    }

    updatePet(petUpdated)
  }

  const petGenderOptions = [
    {
      label: 'Macho',
      value: 'M',
    },
    {
      label: 'Fêmea',
      value: 'F',
    },
  ]

  return (
    <FormProvider {...methods}>
      <form
        data-testid="edit-pet-form"
        onSubmit={methods.handleSubmit(handleEditPet)}
        className="max-w-[600px] w-full mx-auto flex flex-col gap-3"
      >
        <div className="w-full flex items-end justify-end">
          <ButtonDeletePet id={pet.id} data-testid="delete-pet-button" />
        </div>
        <Image
          src={pet.image}
          alt={`Imagem do pet ${pet.name}`}
          width={300}
          height={300}
          className="w-[200px] h-[200px] mx-auto rounded-[100px] object-cover"
        />
        <div className="flex flex-col gap-3 md:flex-row md:gap-4">
          <InputField
            name="name"
            label="Nome"
            type="text"
            defaultValue={pet.name}
            disabled={updatePetLoading}
            data-testid="pet-name"
          />
          <InputField
            name="age"
            label="Idade"
            type="number"
            min={0}
            defaultValue={pet.age}
            disabled={updatePetLoading}
            data-testid="pet-age"
          />
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:gap-4">
          <InputField
            name="race"
            label="Raça"
            type="text"
            defaultValue={pet.race}
            disabled={updatePetLoading}
            data-testid="pet-race"
          />
          <SelectField
            options={petGenderOptions}
            name="gender"
            label="Gênero"
            defaultValue={pet.gender}
            disabled={updatePetLoading}
            data-testid="pet-gender"
          />
        </div>
        <TextAreaInput
          name="observations"
          label="Observações"
          defaultValue={pet.observations}
          disabled={updatePetLoading}
          data-testid="pet-observations"
        />
        <div className="w-full flex items-center justify-end">
          <input
            type="submit"
            value="Editar"
            className="max-w-[280px] w-full py-2 px-4 font-crimson uppercase md:px-6 md:text-lg text-white bg-background-rose rounded-md cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed hover:opacity-80 transition-all duration-200"
            disabled={updatePetLoading}
            data-testid="edit-pet-button"
          />
        </div>
      </form>
    </FormProvider>
  )
}

export default PetEditForm
