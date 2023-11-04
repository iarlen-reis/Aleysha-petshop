import { api } from '@/services/api'

interface ProductProps {
  id: string
  name: string
  price: number
  image: string
  type: string
  description: string
}

interface AxiosResponseProps {
  maxPage: number
  existNextPage: boolean
  existPreviousPage: boolean
  page: number
  products: ProductProps[]
}

export const useProducts = async (
  page: string,
  category?: string,
): Promise<AxiosResponseProps> => {
  const response = await api.get<AxiosResponseProps>(
    `/products?page=${page}${category ? `&category=${category}` : ''}`,
  )

  return response.data
}
