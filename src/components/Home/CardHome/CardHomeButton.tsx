import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface CardHomeButtonProps {
  text: string
  link: string
  icon: LucideIcon
}

const CardHomeButton = ({ text, link, icon: Icon }: CardHomeButtonProps) => {
  return (
    <div className="max-w-[280px] w-full lg:max-w-[400px]">
      <Link
        href={link}
        className="py-3 px-4 flex items-center justify-center gap-3 bg-background-button text-white rounded-md sm:py-4 xl:text-xl transition-all duration-200 hover:opacity-80"
      >
        {text}
        <Icon size={25} />
      </Link>
    </div>
  )
}

export default CardHomeButton
