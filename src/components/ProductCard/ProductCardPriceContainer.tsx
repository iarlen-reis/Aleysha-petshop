import React, { ReactNode } from 'react'

interface ProductCardPriceContainerProps {
  children: ReactNode
}

const ProductCardPriceContainer = ({
  children,
}: ProductCardPriceContainerProps) => {
  return <div className="flex flex-col font-crimson">{children}</div>
}

export default ProductCardPriceContainer
