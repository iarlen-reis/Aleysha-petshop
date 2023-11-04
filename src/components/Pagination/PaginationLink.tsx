import Link from 'next/link'
import React, { ReactNode } from 'react'

interface PaginationLinkProps {
  url: string
  children: ReactNode
}
const PaginationLink = ({ url, children }: PaginationLinkProps) => {
  return (
    <Link
      href={url}
      className="flex items-center justify-center group-hover:p-1 group-hover:text-white group-hover:bg-background-rose group-hover:rounded-[50%] transition-all duration-200"
    >
      {children}
    </Link>
  )
}

export default PaginationLink
