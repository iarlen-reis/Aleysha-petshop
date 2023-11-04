import React from 'react'
import { useProducts } from '@/hooks/useProducts'
import { ProductCard } from '@/components/ProductCard'
import { Pagination } from '@/components/Pagination'
import PageNavigation from '@/components/PageNavigation'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

interface Params {
  searchParams: {
    category: string
    page: string
  }
}

const ProductsPage = async ({ searchParams }: Params) => {
  const products = await useProducts(searchParams.page, searchParams.category)

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
                text="Detalhes"
                link={`/produto/${product.id}`}
              />
            </ProductCard.Root>
          ))}
      </div>
      <Pagination.Root>
        {products && products.existPreviousPage && (
          <Pagination.LinkContainer>
            <Pagination.Link
              url={`${
                searchParams.category
                  ? `/produtos?page=${products.page - 1}&category=${
                      searchParams.category
                    }`
                  : `/produtos?page=${products.page - 1}`
              }`}
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
              url={`${
                searchParams.category
                  ? `/produtos?page=${products.page + 1}&category=${
                      searchParams.category
                    }`
                  : `/produtos?page=${products.page + 1}`
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
