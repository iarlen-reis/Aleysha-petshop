import ProductForm from '@/components/Dashboard/ProductForm'
import PageNavigation from '@/components/PageNavigation'
import React from 'react'

const DashboardNewProduct = () => {
  return (
    <div className="min-h-screen flex flex-col gap-6">
      <div>
        <PageNavigation
          title="Adicionar produtos"
          backText="Dashboard"
          backLink="/dashboard"
        />
      </div>
      <div className="mt-4">
        <ProductForm />
      </div>
    </div>
  )
}

export default DashboardNewProduct
