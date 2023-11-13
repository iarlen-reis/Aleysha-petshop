import React from 'react'
import { api } from '@/services/api'
import PageNavigation from '@/components/PageNavigation'
import ProductEditForm from '@/components/app/Dashboard/ProductEditForm'

interface ParamProps {
  params: {
    id: string
  }
}

interface ProductProps {
  id: string
  name: string
  description: string
  price: number
  type: string
  image: string
}

interface ProdcutDetailsProps {
  product: ProductProps
  fourProdcuts: ProductProps[]
}

const EditPage = async ({ params }: ParamProps) => {
  const response = await api.get<ProdcutDetailsProps>(`/product/${params.id}`)

  const product = response.data
  return (
    <div className="min-h-screen pb-12">
      <PageNavigation
        title={product.product.name}
        backText="Dashboard produtos"
        backLink="/dashboard/produtos"
      />
      <div className="mt-6">
        <ProductEditForm {...product.product} />
      </div>
    </div>
  )
}

export default EditPage
