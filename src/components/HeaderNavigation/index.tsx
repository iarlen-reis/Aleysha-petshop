'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { useSelectedLayoutSegment } from 'next/navigation'
import {
  XIcon,
  MenuIcon,
  ShoppingCartIcon,
  ClipboardListIcon,
} from 'lucide-react'
import { useCart } from '@/context/CartContext'

interface HeaderNavigationProps {
  pagesLinks: {
    name: string
    href: string
  }[]
}
const HeaderNavigation = ({ pagesLinks }: HeaderNavigationProps) => {
  const { cartLength } = useCart()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const segment = useSelectedLayoutSegment()

  const handleMenuMobile = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="flex items-center gap-4">
      <ul
        className={`z-[-1] left-0 w-full h-screen py-12 absolute pr-4 bg-background transition-all duration-500 ease-in md:flex md:duration-0 md:items-center md:pl-0 md:py-0 md:h-fit md:static md:z-auto md:w-auto md:bg-background ${
          isOpen ? 'top-16' : 'top-[-1080px]'
        }`}
      >
        {pagesLinks.map((link) => (
          <li
            key={link.name}
            className={twMerge(
              'w-fit font-ruluko text-xl my-5 mx-auto md:my-0 md:mr-4 transition-all duration-200 border-b border-b-transparent hover:border-b-background-rose',
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
        <div className="w-fit flex items-center gap-4 mx-auto">
          <Link href="/pedidos">
            <ClipboardListIcon
              size={28}
              className="hover:text-background-rose transition-all duration-200"
            />
          </Link>
          <Link href="/carrinho" className="relative">
            <ShoppingCartIcon
              size={28}
              className="hover:text-background-rose transition-all duration-200"
            />
            {cartLength > 0 && (
              <span className="absolute px-2 top-[-12px] right-[-15px] text-white bg-background-rose rounded-full">
                {cartLength}
              </span>
            )}
          </Link>
        </div>
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
