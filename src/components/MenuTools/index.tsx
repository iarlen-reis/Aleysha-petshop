import React from 'react'
import Link from 'next/link'

interface MenuToolsProps {
  link: string
  text: string
}

const MenuTools = ({ link, text }: MenuToolsProps) => {
  return (
    <div className="flex items-center justify-end">
      <Link
        href={link}
        className="px-4 py-2 uppercase font-ruluko rounded text-white bg-background-button hover:opacity-80 transition-all duration-200"
      >
        {text}
      </Link>
    </div>
  )
}

export default MenuTools
