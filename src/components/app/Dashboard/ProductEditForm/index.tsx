'use client'
import React from 'react'
import Image from 'next/image'
import { Trash2Icon } from 'lucide-react'
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

interface ProductProps {
  id: string
  image: string
  name: string
  price: number
  type: string
  description: string
}

const ProductEditForm = (product: ProductProps) => {
  const methods = useForm<UseFormProps>()
  const {
    editProduct,
    editProductLoading,
    deleteProduct,
    deleteProductLoading,
  } = useProduct()

  const handleEditProduct = (data: UseFormProps) => {
    editProduct({
      id: product.id,
      ...data,
    })
  }

  const handleDeleteProduct = () => {
    const confirmExclusion = confirm(
      'Tem certeza que deseja excluir este produto?',
    )

    if (!confirmExclusion) {
      return
    }

    deleteProduct(product.id)
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleEditProduct)}
        className="max-w-[600px] w-full mx-auto flex flex-col gap-3"
      >
        <div className="w-full flex items-end justify-end">
          <button onClick={handleDeleteProduct} type="button">
            <Trash2Icon size={24} color="red" />
          </button>
        </div>
        <Image
          src={product.image}
          alt={`Imagem do produto ${product.name}`}
          width={300}
          height={300}
          className="w-[200px] h-[200px] mx-auto rounded-[100px] object-cover"
        />
        <InputField
          name="name"
          label="Nome"
          type="text"
          placeholder="Ração Mandaí"
          disabled={editProductLoading || deleteProductLoading}
          defaultValue={product.name}
          rules={{ required: 'O campo é obrigatório.' }}
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <InputField
            name="type"
            label="Tipo"
            type="text"
            placeholder="Alimentação"
            disabled={editProductLoading || deleteProductLoading}
            defaultValue={product.type}
            rules={{ required: 'O campo é obrigatório.' }}
          />
          <InputField
            name="price"
            label="Preço"
            type="number"
            step="0.01"
            placeholder="44.28"
            disabled={editProductLoading || deleteProductLoading}
            defaultValue={product.price}
            rules={{ required: 'O campo é obrigatório.' }}
          />
        </div>
        <div>
          <TextAreaInput
            name="description"
            label="Descrição"
            disabled={editProductLoading || deleteProductLoading}
            defaultValue={product.description}
            rules={{ required: 'O campo é obrigatório.' }}
          />
        </div>
        <div className="w-full flex items-center justify-end gap-4">
          <input
            type="submit"
            value="Editar"
            disabled={editProductLoading || deleteProductLoading}
            className="max-w-[220px] w-full py-2 px-4 font-crimson font-semibold uppercase md:px-6 md:text-lg text-white bg-background-rose rounded-md cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed hover:opacity-80 transition-all duration-200"
          />
        </div>
      </form>
    </FormProvider>
  )
}

export default ProductEditForm
