'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { XIcon, MenuIcon } from 'lucide-react'
import { useSelectedLayoutSegment } from 'next/navigation'

interface HeaderNavigationProps {
  pagesLinks: {
    name: string
    href: string
  }[]
}
const HeaderNavigation = ({ pagesLinks }: HeaderNavigationProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const segment = useSelectedLayoutSegment()

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
            className={twMerge(
              'w-fit font-ruluko text-xl my-5 md:my-0 md:mr-4 transition-all duration-200 border-b border-b-transparent hover:border-b-background-rose',
              `${
                segment === link.name.toLowerCase()
                  ? 'border-b-background-rose'
                  : ''
              }`,
            )}
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
