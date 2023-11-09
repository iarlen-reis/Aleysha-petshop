import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '/public/images/logo.png'
import HeaderNavigation from '@/components/HeaderNavigation'

const Header = () => {
  const pageLinks = [
    { name: 'MEUS PETS', href: '/' },
    { name: 'PRODUTOS', href: '/produtos?page=1' },
    { name: 'DASHBOARD', href: '/dashboard' },
  ]

  return (
    <header className="w-full py-2 px-2 fixed top-0 left-0 bg-background z-10">
      <div className="container w-full flex flex-col md:flex-row md:items-center md:justify-between mx-auto">
        <Link href="/" className="w-fit flex-1">
          <Image
            src={LogoImage}
            alt="Logo do Aleysha Petshop"
            width={200}
            height={200}
            className="w-32 h-12 md:w-40 md:h-14"
          />
        </Link>
        <HeaderNavigation pagesLinks={pageLinks} />
      </div>
    </header>
  )
}

export default Header
