import { api } from '@/services/api'
import { useQuery } from 'react-query'

interface ProductChart {
  id: string
  name: string
  data: number[] | null[]
}

interface UseChartsProps {
  productCharts: ProductChart[] | undefined
}

export const useCharts = (): UseChartsProps => {
  const { data: productCharts } = useQuery('productCharts', async () => {
    const response = await api.get<ProductChart[]>('/charts')

    return response.data
  })

  return {
    productCharts,
  }
}
