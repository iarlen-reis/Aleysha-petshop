'use client'
import { toast } from 'react-toastify'
import React, { useState } from 'react'
import { usePet } from '@/hooks/usePet'
import Dropzone from '@/components/Dropzone'
import { useSession } from 'next-auth/react'
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
const PetForm = () => {
  const [file, setFile] = useState<string>('')
  const methods = useForm<useFormProps>()
  const { data: session } = useSession()
  const { createPet, createPetLoading } = usePet()

  if (!session?.user) {
    return
  }

  const handleAddPet = (data: useFormProps) => {
    if (!file) {
      return toast.error('Insira uma imagem para o pet.')
    }

    const pet = {
      ...data,
      image: file,
      userId: session?.user.id,
    }

    createPet(pet)
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
        data-testid="create-pet-form"
        onSubmit={methods.handleSubmit(handleAddPet)}
        className="w-full flex flex-col gap-3"
      >
        <Dropzone file={file} setFile={setFile} loading={createPetLoading} />
        <div className="flex flex-col gap-3 md:flex-row md:gap-4">
          <InputField
            name="name"
            label="Nome"
            type="text"
            disabled={createPetLoading}
          />
          <InputField
            name="age"
            label="Idade"
            type="number"
            min={0}
            disabled={createPetLoading}
          />
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:gap-4">
          <InputField
            name="race"
            label="Raça"
            type="text"
            disabled={createPetLoading}
          />
          <SelectField
            options={petGenderOptions}
            name="gender"
            label="Gênero"
            disabled={createPetLoading}
          />
        </div>
        <TextAreaInput
          name="observations"
          label="Observações"
          disabled={createPetLoading}
        />
        <div className="w-full flex items-center justify-end">
          <input
            type="submit"
            value="Adicionar"
            className="max-w-[280px] w-full py-2 px-4 font-crimson uppercase md:px-6 md:text-lg text-white bg-background-rose rounded-md cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed hover:opacity-80 transition-all duration-200"
            disabled={createPetLoading}
            data-testid="create-pet-button"
          />
        </div>
      </form>
    </FormProvider>
  )
}

export default PetForm
