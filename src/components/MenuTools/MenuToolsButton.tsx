import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

interface MenuToolsButtonProps {
  href: string
  text: string
}

const MenuToolsButton = ({text, href}: MenuToolsButtonProps) => {
  return (
    <Button variant="destructive">
      <Link href={href}>
        {text}
      </Link>
    </Button>
  )
}

export default MenuToolsButton