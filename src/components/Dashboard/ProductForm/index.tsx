'use client'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Dropzone from '@/components/Dropzone'
import { useProduct } from '@/hooks/useProduct'
import InputField from '@/components/InputField'
import TextAreaInput from '@/components/TextAreaField'
import { FormProvider, useForm } from 'react-hook-form'

interface UseFormProps {
  name: string
  price: number
  type: string
  description: string
}

const ProductForm = () => {
  const methods = useForm<UseFormProps>()
  const [file, setFile] = useState<string>('')
  const { createProduct, createProductLoading } = useProduct()

  const handleAddProduct = async (data: UseFormProps) => {
    if (!file) {
      return toast.error('Insira uma imagem para o produto.')
    }

    createProduct({
      ...data,
      image: file,
    })

    methods.reset()
    setFile('')
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleAddProduct)}
        className="max-w-[600px] w-full mx-auto flex flex-col gap-3"
      >
        <Dropzone
          file={file}
          setFile={setFile}
          loading={createProductLoading}
        />
        <InputField
          name="name"
          label="Nome"
          type="text"
          placeholder="Ração Mandaí"
          disabled={createProductLoading}
          rules={{ required: 'O campo é obrigatório.' }}
        />
        <div className="flex flex-col gap-3 md:flex-row md:gap-4">
          <InputField
            name="type"
            label="Tipo"
            type="text"
            placeholder="Alimentação"
            disabled={createProductLoading}
            rules={{ required: 'O campo é obrigatório.' }}
          />
          <InputField
            name="price"
            label="Preço"
            type="number"
            step="0.01"
            placeholder="44.28"
            disabled={createProductLoading}
            rules={{ required: 'O campo é obrigatório.' }}
          />
        </div>
        <div>
          <TextAreaInput
            name="description"
            label="Descrição"
            disabled={createProductLoading}
            rules={{ required: 'O campo é obrigatório.' }}
          />
        </div>
        <div className="w-full flex items-center justify-end">
          <input
            type="submit"
            value="Adicionar"
            disabled={createProductLoading}
            className="max-w-[280px] w-full py-2 px-4 font-crimson uppercase md:px-6 md:text-lg text-white bg-background-rose rounded-md cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed hover:opacity-80 transition-all duration-200"
          />
        </div>
      </form>
    </FormProvider>
  )
}

export default ProductForm
