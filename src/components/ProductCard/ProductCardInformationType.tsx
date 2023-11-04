import Link from 'next/link'
import React from 'react'

interface ProductCardInformationTypeProps {
  link: string
  type: string
}

const ProductCardInformationType = ({
  type,
  link,
}: ProductCardInformationTypeProps) => {
  return (
    <Link
      href={link}
      className="text-sm text-background-rose uppercase md:text-lg hover:opacity-80 transition-all duration-300"
    >
      {type}
    </Link>
  )
}

export default ProductCardInformationType
