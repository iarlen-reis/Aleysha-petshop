import React from 'react'
import Image from 'next/image'
import { api } from '@/services/api'
import { formatePrice } from '@/utils/formatePrice'
import { ProductCard } from '@/components/ProductCard'
import PageNavigation from '@/components/PageNavigation'
import { calculatePortion } from '@/utils/calculatePortion'
import ButtonAddToCart from '@/components/app/Product/ButtonAddToCart'

export const dynamic = 'force-dynamic'

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

const ProductDetails = async ({ params }: ParamProps) => {
  const response = await api.get<ProdcutDetailsProps>(`/product/${params.id}`)
  const product = response.data

  const productPrice = formatePrice(product.product.price)
  const productPortion = calculatePortion(product.product.price)

  return (
    <div className="min-h-screen flex flex-col gap-8 pb-12">
      <PageNavigation
        title={product.product.name}
        backText="Produtos"
        backLink="/produtos"
      />
      <div className="flex flex-col gap-5 lg:flex-row lg:mt-5">
        <div className="w-full lg:w-fit">
          <Image
            src={product.product.image}
            alt={product.product.name}
            width={500}
            height={500}
            className="w-[250px] h-[250px] object-contain mx-auto sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]"
          />
        </div>
        <div className="flex flex-col gap-5 items-start mt-2 lg:mt-0">
          <div className="flex flex-col font-ruluko lg:gap-1">
            <h1 className="text-2xl uppercase sm:text-3xl lg:text-4xl">
              {product.product.name}
            </h1>
            <span className="text-base uppercase sm:text-lg lg:text-2xl text-background-rose">
              {product.product.type}
            </span>
          </div>
          <div className="flex flex-col font-crimson lg:gap-1">
            <span className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
              {productPrice}
            </span>
            <small className="text-lg text-background-button/60 sm:text-xl lg:text-2xl">
              4x de R${productPortion} sem juros
            </small>
          </div>
          <div className="flex flex-col font-crimson lg:gap-1">
            <h2 className="text-lg uppercase font-semibold sm:text-xl lg:text-2xl">
              Sobre o produto
            </h2>
            <p className="text-base max-w-[550px] sm:text-lg sm:max-w-[600px] lg:text-xl lg:max-w-[700px]">
              {product.product.description}
            </p>
          </div>
          <div className="w-full max-w-[360px]">
            <ButtonAddToCart product={product.product} />
          </div>
        </div>
      </div>
      {product.fourProdcuts.length > 0 && (
        <div className="hidden sm:flex sm:flex-col sm:gap-4 sm:mt-8">
          <h2 className="text-2xl uppercase">PRODUTOS RECOMENDADOS</h2>
          <div className="sm:grid sm:gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:justify-between">
            {product.fourProdcuts.map((product) => (
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
        </div>
      )}
    </div>
  )
}

export default ProductDetails
