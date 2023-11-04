import { calculatePortion } from '@/utils/calculatePortion'
import React from 'react'

interface ProductCardPortionProps {
  portion: number
}

const ProductCardPortion = ({ portion }: ProductCardPortionProps) => {
  const productPortion = calculatePortion(portion)

  return (
    <span className="text-sm text-background-button/50 md:text-base">
      4x R$ {productPortion}
    </span>
  )
}

export default ProductCardPortion
