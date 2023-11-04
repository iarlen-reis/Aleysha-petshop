'use client'
import { api } from '@/services/api'
import { toast } from 'react-toastify'
import { useMutation } from 'react-query'
import { useRouter } from 'next/navigation'

interface ProductProps {
  id: string
  name: string
  description: string
  price: number
  type: string
  image: string
}

interface UseProduct {
  createProduct: (data: Omit<ProductProps, 'id'>) => void
  createProductLoading: boolean
  editProduct: (data: Omit<ProductProps, 'image'>) => void
  editProductLoading: boolean
  deleteProduct: (id: string) => void
  deleteProductLoading: boolean
}

export const useProduct = (): UseProduct => {
  const router = useRouter()
  const { mutate: createProduct, isLoading: createProductLoading } =
    useMutation(
      async (data: Omit<ProductProps, 'id'>) => {
        const response = await api.post(
          '/product',
          {
            ...data,
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        return response.data
      },
      {
        onSuccess: () => {
          toast.success('Produto criado com sucesso')
        },
        onError: () => {
          toast.error('Erro ao criar o produto, tente novamente.')
        },
      },
    )

  const { mutate: editProduct, isLoading: editProductLoading } = useMutation(
    async (data: Omit<ProductProps, 'image'>) => {
      const response = await api.put(`/product/${data.id}`, {
        ...data,
        price: Number(data.price),
      })
      return response.data
    },
    {
      onSuccess: () => {
        toast.success('Produto editado com sucesso!')
      },
      onError: () => {
        toast.error('Erro ao editar o produto, tente novamente.')
      },
    },
  )

  const { mutate: deleteProduct, isLoading: deleteProductLoading } =
    useMutation(
      async (productID: string) => {
        const response = await api.delete(`/product/${productID}`)

        return response.data
      },
      {
        onSuccess: () => {
          router.push('/dashboard/produtos')
          toast.success('Produto deletado com sucesso!')
        },
        onError: () => {
          toast.error('Erro ao deletar o produto, tente novamente.')
        },
      },
    )

  return {
    createProduct,
    createProductLoading,
    editProduct,
    editProductLoading,
    deleteProduct,
    deleteProductLoading,
  }
}
