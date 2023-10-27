'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { XIcon, MenuIcon } from 'lucide-react'

interface HeaderNavigationProps {
  pagesLinks: {
    name: string
    href: string
  }[]
}
const HeaderNavigation = ({ pagesLinks }: HeaderNavigationProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleMenuMobile = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav>
      <ul
        className={`z-[-1] left-0 w-full h-screen pb-12 absolute pl-2 bg-background-input transition-all duration-500 ease-in md:flex md:items-center md:pl-0 md:pb-0 md:h-fit md:static md:z-auto md:w-auto md:bg-background ${
          isOpen ? 'top-16' : 'top-[-1080px]'
        }`}
      >
        {pagesLinks.map((link) => (
          <li
            key={link.name}
            className="w-fit font-ruluko text-xl my-5 md:my-0 md:mr-4 transition-all duration-200 hover:border-b hover:border-b-background-rose"
          >
            <Link href={link.href} onClick={handleMenuMobile}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className="absolute right-3 top-4 cursor-pointer md:hidden"
        onClick={handleMenuMobile}
      >
        {isOpen ? <XIcon size={32} /> : <MenuIcon size={32} />}
      </div>
    </nav>
  )
}

export default HeaderNavigation
