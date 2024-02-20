import React from 'react'
import Link from 'next/link'
import { ChevronRightIcon } from 'lucide-react'

interface PageNavigationProps {
  backLink: string
  backText: string
  title: string
}
const PageNavigation = ({ title, backLink, backText }: PageNavigationProps) => {
  return (
    <ul className="flex items-center gap-1 font-ruluko capitalize lg:mt-3">
      <li className="text-lg lg:text-xl hover:opacity-80 transition-all duration-200">
        <Link 
        data-testid="back-link"
        href={backLink} >
          {backText}
        </Link>
      </li>
      <li>
        <ChevronRightIcon size={16} />
      </li>
      <li className="text-lg text-background-rose font-semibold lg:text-xl">
        {title}
      </li>
    </ul>
  )
}

export default PageNavigation
