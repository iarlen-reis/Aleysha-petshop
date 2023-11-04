import Link from 'next/link'
import React from 'react'

interface ProductCardButtonProps {
  text: string
  link: string
}

const ProductCardButton = ({ text, link }: ProductCardButtonProps) => {
  return (
    <Link
      href={link}
      className="w-full p-2 font-crimson font-semibold uppercase text-lg text-center rounded-lg text-white transition-all duration-300 bg-background-rose hover:opacity-80"
    >
      {text}
    </Link>
  )
}

export default ProductCardButton
