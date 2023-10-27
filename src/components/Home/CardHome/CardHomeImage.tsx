import Image, { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'

interface CardHomeImageProps {
  children: ReactNode
  src: StaticImageData
  alt: string
}

const CardHomeImage = ({ src, alt, children }: CardHomeImageProps) => {
  return (
    <div className="relative max-w-[350px] mx-auto sm:max-w-[400px] lg:max-w-[600px] lg:mx-0">
      <Image src={src} alt={alt} width={500} height={500} />
      {children}
    </div>
  )
}

export default CardHomeImage
