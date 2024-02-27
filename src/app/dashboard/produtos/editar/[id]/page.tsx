import React from 'react'
import prisma from '@/utils/prisma'
import { redirect } from 'next/navigation'
import PageNavigation from '@/components/PageNavigation'
import ProductEditForm from '@/components/app/Dashboard/ProductEditForm'

interface ParamProps {
  params: {
    id: string
  }
}

const EditPage = async ({ params }: ParamProps) => {
  const product = await prisma.product.findUnique({
    where: {
      id: params.id,
    },
  })

  if(!product) {
    return redirect('/dashboard/produtos')
  }

  return (
    <div className="min-h-screen pb-12">
      <PageNavigation
        title={product.name}
        backText="Dashboard produtos"
        backLink="/dashboard/produtos"
      />
      <div className="mt-6">
        <ProductEditForm {...product} price={Number(product.price)} />
      </div>
    </div>
  )
}

export default EditPage
