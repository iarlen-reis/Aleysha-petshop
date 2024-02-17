import React from 'react'
import clsx from 'clsx'
import HeaderMenuMobile from './HeaderMenuMobile'

interface HeaderNavigationProps {
  isOpen: boolean
  handleMenuMobile: () => void
  children: React.ReactNode
}

const HeaderNavigation = ({ children, isOpen, handleMenuMobile }: HeaderNavigationProps) => {

  return (
    <nav className="flex items-center gap-4">
      <ul
        className={clsx('z-[-1] left-0 w-full h-screen py-12 absolute pr-4 bg-background transition-all duration-500 ease-in md:flex md:duration-0 md:items-center md:pl-0 md:py-0 md:h-fit md:static md:z-auto md:w-auto md:bg-background', {
          'top-16': isOpen,
          'top-[-1080px]': !isOpen
        })}>
        {children}
      </ul>
      <HeaderMenuMobile isOpen={isOpen} handleMenuMobile={handleMenuMobile} />
    </nav>
  )
}

export default HeaderNavigation