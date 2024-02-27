import React from 'react'
import prisma from '@/utils/prisma'
import { Pagination } from '@/components/Pagination'
import { ProductCard } from '@/components/ProductCard'
import PageNavigation from '@/components/PageNavigation'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

interface Params {
  searchParams: {
    page: string
  }
}

const DashboardProducts = async ({ searchParams }: Params) => {
  const PRODUCT_PER_PAGE = 8
  const page = Number(searchParams.page) || 1

  const allProducts = await prisma.product.count()

  const maxPage = Math.ceil(allProducts / PRODUCT_PER_PAGE)
  const existNextPage = page < maxPage
  const existPreviousPage = page > 1

  const products = await prisma.product.findMany({
    take: PRODUCT_PER_PAGE,
    skip: (page - 1) * PRODUCT_PER_PAGE,
    orderBy: {
      createdAt: 'desc',
    },
  })
  return (
    <div className="flex flex-col gap-10 min-h-screen pb-12">
      <PageNavigation
        title="Produtos"
        backText="Dashboard"
        backLink="/dashboard"
      />
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:justify-between">
        {products &&
          products.map((product) => (
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
                <ProductCard.Price price={Number(product.price)} />
                <ProductCard.Portion portion={Number(product.price)} />
              </ProductCard.PriceContainer>
              <ProductCard.Button
                text="Editar"
                link={`/dashboard/produtos/editar/${product.id}`}
              />
            </ProductCard.Root>
          ))}
      </div>
      <Pagination.Root>
        {existPreviousPage && (
          <Pagination.LinkContainer>
            <Pagination.Link
              url={`/dashboard/produtos?page=${page - 1}`}
            >
              <Pagination.Icon icon={ChevronLeftIcon} />
            </Pagination.Link>
          </Pagination.LinkContainer>
        )}
        {maxPage > 1 && (
          <Pagination.Indicator page={page} />
        )}
        {existNextPage && (
          <Pagination.LinkContainer>
            <Pagination.Link
              url={`/dashboard/produtos?page=${page + 1}`}
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
