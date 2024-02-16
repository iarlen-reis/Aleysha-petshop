import { Button } from '@/components/ui/button'
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
    <Button className="w-full max-w-[400px] h-[50px] md:h-[60px] lg:max-w-[400px]" asChild>
      <Link
        href={link}
      >
        {text}
        <Icon size={25} data-testid="icon" />
      </Link>
    </Button>
  )
}

export default CardHomeButton
