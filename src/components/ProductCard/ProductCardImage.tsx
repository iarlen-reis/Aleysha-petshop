import Image from 'next/image'
import React from 'react'

interface ProductCardImageProps {
  image: string
  alt: string
}

const ProductCardImage = ({ image, alt }: ProductCardImageProps) => {
  return (
    <div className="w-[200px] h-[200px] mx-auto">
      <Image
        src={image}
        alt={alt}
        width={300}
        height={300}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  )
}

export default ProductCardImage
