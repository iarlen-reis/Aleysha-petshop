'use client'
import { toast } from 'react-toastify'
import React, { useState } from 'react'
import Dropzone from '@/components/Dropzone'
import { useService } from '@/hooks/useService'
import InputField from '@/components/InputField'
import TextAreaInput from '@/components/TextAreaField'
import { FormProvider, useForm } from 'react-hook-form'

interface UseFormProps {
  name: string
  price: number
  description: string
}

const NewServiceForm = () => {
  const { createService, createServiceLoading } = useService()
  const [file, setFile] = useState<string>('')
  const methods = useForm<UseFormProps>()

  const handleAddService = (data: UseFormProps) => {
    const service = {
      ...data,
      image: file,
    }

    if (!file) {
      return toast.error('Insira uma imagem para o serviço.')
    }

    createService(service)

    methods.reset()
    setFile('')
  }

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-4"
        onSubmit={methods.handleSubmit(handleAddService)}
      >
        <Dropzone
          file={file}
          setFile={setFile}
          loading={createServiceLoading}
        />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <InputField
            name="name"
            label="Nome"
            disabled={createServiceLoading}
            rules={{ required: 'O campo é obrigatório' }}
          />
          <InputField
            name="price"
            label="Preço"
            type="number"
            disabled={createServiceLoading}
            rules={{ required: 'O campo é obrigatório' }}
          />
        </div>
        <TextAreaInput
          name="description"
          label="Descrição"
          disabled={createServiceLoading}
          rules={{ required: 'O campo é obrigatório' }}
        />
        <div className="w-full flex items-end justify-end">
          <input
            type="submit"
            value="Adicionar"
            disabled={createServiceLoading}
            className="max-w-[220px] w-full py-2 px-4 font-crimson font-semibold uppercase md:px-6 md:text-lg text-white bg-background-rose rounded-md cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed hover:opacity-80 transition-all duration-200"
          />
        </div>
      </form>
    </FormProvider>
  )
}

export default NewServiceForm
