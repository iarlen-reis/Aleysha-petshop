import React from 'react'
import Image from 'next/image'

interface OrderImageProps {
  image: string
  name: string
}

const OrderImage = ({ name, image }: OrderImageProps) => {
  return (
    <div>
      <Image
        src={image}
        alt={`imagem do produto ${name}`}
        width={100}
        height={100}
        className="w-[100px] h-[100px] object-contain md:w-[120px] md:h-[120px] xl:w-[140px] xl:h-[140px]"
      />
    </div>
  )
}

export default OrderImage
