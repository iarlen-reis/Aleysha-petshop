import { MenuIcon, XIcon } from 'lucide-react'
import React from 'react'

interface HeaderMenuMobileProps {
  isOpen: boolean
  handleMenuMobile: () => void
}

const HeaderMenuMobile = ({isOpen, handleMenuMobile}: HeaderMenuMobileProps) => {
  return (
    <button
        className="absolute right-3 top-4 cursor-pointer md:hidden"
        onClick={handleMenuMobile}
      >
        {isOpen ? <XIcon size={32} /> : <MenuIcon size={32} />}
      </button>
  )
}

export default HeaderMenuMobile