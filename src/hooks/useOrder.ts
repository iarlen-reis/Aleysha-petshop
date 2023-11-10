'use client'
import { api } from '@/services/api'
import { toast } from 'react-toastify'
import { useMutation } from 'react-query'
import { useCart } from '@/context/CartContext'

interface productProps {
  id: string
  quantity: number
}

interface CreateOrderProps {
  userId: string
  products: productProps[]
  total: number
}

interface useOrderProps {
  createOrderLoading: boolean
  createOrder: (data: CreateOrderProps) => void
}

export const useOrder = (): useOrderProps => {
  const { handleClearCart } = useCart()

  const { mutate: createOrder, isLoading: createOrderLoading } = useMutation(
    async (data: CreateOrderProps) => {
      const response = await api.post('/order', {
        data,
      })

      return response.data
    },
    {
      onSuccess: () => {
        toast.success('Pedido criado com sucesso!')
        handleClearCart()
      },
    },
  )

  return {
    createOrder,
    createOrderLoading,
  }
}
