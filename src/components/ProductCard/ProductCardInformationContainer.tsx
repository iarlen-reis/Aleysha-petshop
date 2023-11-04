import React, { ReactNode } from 'react'

interface ProductCardInformationContainerProps {
  children: ReactNode
}

const ProductCardInformationContainer = ({
  children,
}: ProductCardInformationContainerProps) => {
  return (
    <div className="flex flex-col font-ruluko leading-relaxed">{children}</div>
  )
}

export default ProductCardInformationContainer
