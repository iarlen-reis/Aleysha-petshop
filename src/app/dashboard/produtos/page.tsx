import React from 'react'
import { useProducts } from '@/hooks/useProducts'
import { Pagination } from '@/components/Pagination'
import { ProductCard } from '@/components/ProductCard'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import PageNavigation from '@/components/PageNavigation'

interface Params {
  searchParams: {
    page: string
  }
}

const DashboardProducts = async ({ searchParams }: Params) => {
  const products = await useProducts(searchParams.page)
  return (
    <div className="flex flex-col gap-10 min-h-screen pb-12">
      <PageNavigation
        title="Produtos"
        backText="Dashboard"
        backLink="/dashboard"
      />
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:justify-between">
        {products &&
          products.products.map((product) => (
            <ProductCard.Root key={product.id}>
              <ProductCard.Image image={product.image} alt={product.name} />
              <ProductCard.InformationContainer>
                <ProductCard.InformationName name={product.name} />
                <ProductCard.InformationType
                  type={product.type}
                  link={`/produtos?page=1&category=${product.type}`}
                />
              </ProductCard.InformationContainer>
              <ProductCard.PriceContainer>
                <ProductCard.Price price={product.price} />
                <ProductCard.Portion portion={product.price} />
              </ProductCard.PriceContainer>
              <ProductCard.Button
                text="Editar"
                link={`/dashboard/produtos/editar/${product.id}`}
              />
            </ProductCard.Root>
          ))}
      </div>
      <Pagination.Root>
        {products && products.existPreviousPage && (
          <Pagination.LinkContainer>
            <Pagination.Link
              url={`/dashboard/produtos?page=${products.page - 1}`}
            >
              <Pagination.Icon icon={ChevronLeftIcon} />
            </Pagination.Link>
          </Pagination.LinkContainer>
        )}
        {products.existPreviousPage || products.existNextPage ? (
          <Pagination.Indicator page={products.page} />
        ) : (
          <></>
        )}
        {products && products.existNextPage && (
          <Pagination.LinkContainer>
            <Pagination.Link
              url={`/dashboard/produtos?page=${products.page + 1}`}
            >
              <Pagination.Icon icon={ChevronRightIcon} />
            </Pagination.Link>
          </Pagination.LinkContainer>
        )}
      </Pagination.Root>
    </div>
  )
}

export default DashboardProducts
