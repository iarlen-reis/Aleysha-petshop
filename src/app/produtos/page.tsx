import React from 'react'
import prisma from '@/utils/prisma'
import { Pagination } from '@/components/Pagination'
import { ProductCard } from '@/components/ProductCard'
import PageNavigation from '@/components/PageNavigation'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

interface Params {
  searchParams: {
    category: string
    page: string
  }
}

const ProductsPage = async ({ searchParams }: Params) => {
  const productsCount = await prisma.product.count({
    where: {
      type: {
        contains: searchParams.category,
        mode: 'insensitive',
      },
    },
  })

  const maxPage = Math.ceil(productsCount / 8)
  const existNextPage = Number(searchParams.page) < maxPage
  const existPreviousPage = Number(searchParams.page) > 1
  const page = Number(searchParams.page) || 1

  const products = await prisma.product.findMany({
    where: {
      type: {
        contains: searchParams.category,
        mode: 'insensitive',
      },
    },
    take: 8,
    skip: (page - 1) * 8,
  })

  return (
    <div className="min-h-screen flex flex-col gap-10 pb-12">
      <div className="mt-4">
        {searchParams.category ? (
          <PageNavigation
            title={searchParams.category}
            backText="Produtos"
            backLink="/produtos?page=1"
          />
        ) : (
          <PageNavigation
            title="Produtos"
            backText="Página inicial"
            backLink="/"
          />
        )}
      </div>
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:justify-between">
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
                text="Detalhes"
                link={`/produtos/${product.id}`}
              />
            </ProductCard.Root>
          ))}
      </div>
      <Pagination.Root>
        {existPreviousPage && (
          <Pagination.LinkContainer>
            <Pagination.Link
              url={`${
                searchParams.category
                  ? `/produtos?page=${page - 1}&category=${
                      searchParams.category
                    }`
                  : `/produtos?page=${page - 1}`
              }`}
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
              url={`${
                searchParams.category
                  ? `/produtos?page=${page + 1}&category=${
                      searchParams.category
                    }`
                  : `/produtos?page=${page + 1}`
              }`}
            >
              <Pagination.Icon icon={ChevronRightIcon} />
            </Pagination.Link>
          </Pagination.LinkContainer>
        )}
      </Pagination.Root>
    </div>
  )
}

export default ProductsPage
