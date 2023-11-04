import { formatePrice } from '@/utils/formatePrice'
import React from 'react'

interface ProductCardPriceProps {
  price: number
}

const ProductCardPrice = ({ price }: ProductCardPriceProps) => {
  const productPrice = formatePrice(price)
  return <span className="text-2xl font-semibold">{productPrice}</span>
}

export default ProductCardPrice
