import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'
import clsx from 'clsx'


interface HeaderNavigationIconProps {
  Icon: LucideIcon | IconType
  link: string
  marker?: number
}
const HeaderNavigationIcon = ({ Icon, link, marker }: HeaderNavigationIconProps) => {
  return (
    <Link href={link} className={clsx("", {
      'relative': marker
    })}>
      <Icon
        size={25}
        data-testid="icon"
        className="hover:text-background-rose transition-all duration-200"
      />
      {marker && (
        <span 
        data-testid="marker"
        className="absolute px-2 top-[-12px] right-[-15px] text-white bg-background-rose rounded-full">
          {marker}
        </span>
      )}
    </Link>
  )
}

export default HeaderNavigationIcon