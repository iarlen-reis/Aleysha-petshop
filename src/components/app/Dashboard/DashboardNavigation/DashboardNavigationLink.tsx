import Link from 'next/link'
import React from 'react'

interface DashboardNavigationLinkProps {
  text: string
  link: string
}
const DashboardNavigationLink = ({
  text,
  link,
}: DashboardNavigationLinkProps) => {
  return (
    <li>
      <Link
        href={`/dashboard/${link}`}
        className="font-ruluko uppercase transition-all duration-300 hover:text-background-rose"
      >
        {text}
      </Link>
    </li>
  )
}

export default DashboardNavigationLink
