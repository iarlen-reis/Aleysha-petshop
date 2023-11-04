import React from 'react'

interface ProductCardInformationNameProps {
  name: string
}

const ProductCardInformationName = ({
  name,
}: ProductCardInformationNameProps) => {
  return <h1 className="text-xl uppercase md:text-2xl">{name}</h1>
}

export default ProductCardInformationName
