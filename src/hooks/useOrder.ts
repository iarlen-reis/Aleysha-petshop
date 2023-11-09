'use client'
import { api } from '@/services/api'
import { toast } from 'react-toastify'
import { useMutation } from 'react-query'
import { useCart } from '@/context/CartContext'

interface productProps {
  id: string
  quantity: number
}

interface OrderProps {
  userId: string
  products: productProps[]
}

interface useOrderProps {
  createOrderLoading: boolean
  createOrder: (data: OrderProps) => void
}

export const useOrder = (): useOrderProps => {
  const { handleClearCart } = useCart()

  const { mutate: createOrder, isLoading: createOrderLoading } = useMutation(
    async (data: OrderProps) => {
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
