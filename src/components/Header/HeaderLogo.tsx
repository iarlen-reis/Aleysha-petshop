import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface HeaderLogoProps {
  logoImage: StaticImageData
  alt: string
}

const HeaderLogo = ({ logoImage, alt }: HeaderLogoProps) => {
  return (
    <Link href="/" className="w-fit">
      <Image
        src={logoImage}
        alt={alt}
        width={180}
        height={180}
        className="w-32 h-12 md:w-36 md:h-12"
      />
    </Link>
  )
}

export default HeaderLogo