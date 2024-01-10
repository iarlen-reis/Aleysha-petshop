'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useService } from '@/hooks/useService'
import InputField from '@/components/InputField'
import TextAreaInput from '@/components/TextAreaField'
import { FormProvider, useForm } from 'react-hook-form'

interface FormProps {
  name: string
  price: number
  description: string
}

interface EditServiceFormProps {
  serviceId: string
}

const EditServiceForm = ({ serviceId }: EditServiceFormProps) => {
  const methods = useForm<FormProps>()
  const {
    service,
    getServiceById,
    editService,
    editServiceLoading,
    deleteService,
    deleteServiceLoading,
  } = useService()

  const handleEditService = (data: FormProps) => {
    const newService = {
      id: serviceId,
      ...data,
    }

    editService(newService)
  }

  const handleDeleteService = () => {
    if (window.confirm('Tem certeza que deseja excluir este serviço?')) {
      deleteService(serviceId)
    }
  }

  useEffect(() => {
    getServiceById(serviceId)
  }, [serviceId])

  return (
    <FormProvider {...methods}>
      {service && (
        <form
          className="flex flex-col gap-4"
          onSubmit={methods.handleSubmit(handleEditService)}
        >
          <Image
            src={service.image}
            width={300}
            height={300}
            alt={service.name}
            className="mx-auto w-[250px] h-[250px] rounded-[50%] object-fill"
          />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <InputField
              name="name"
              label="Nome"
              defaultValue={service.name}
              disabled={editServiceLoading}
              rules={{ required: 'O campo é obrigatório' }}
            />
            <InputField
              name="price"
              label="Preço"
              type="number"
              step="0.01"
              defaultValue={service.price}
              disabled={editServiceLoading}
              rules={{ required: 'O campo é obrigatório' }}
            />
          </div>
          <TextAreaInput
            name="description"
            label="Descrição"
            disabled={editServiceLoading}
            defaultValue={service.description}
            rules={{ required: 'O campo é obrigatório' }}
          />
          <div className="w-full flex gap-4 items-end justify-end">
            <button
              type="button"
              onClick={handleDeleteService}
              disabled={deleteServiceLoading}
              className="max-w-[220px] w-full py-2 px-4 font-crimson font-semibold uppercase md:px-6 md:text-lg text-white bg-red-700 rounded-md cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed hover:opacity-80 transition-all duration-200"
            >
              Deletar
            </button>
            <input
              type="submit"
              value="Editar"
              disabled={editServiceLoading}
              className="max-w-[220px] w-full py-2 px-4 font-crimson font-semibold uppercase md:px-6 md:text-lg text-white bg-background-rose rounded-md cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed hover:opacity-80 transition-all duration-200"
            />
          </div>
        </form>
      )}
    </FormProvider>
  )
}

export default EditServiceForm
