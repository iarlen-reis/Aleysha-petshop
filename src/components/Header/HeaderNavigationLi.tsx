'use client'
import React from 'react'
import clsx from 'clsx'
import { useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link'

interface HeaderNavigationLiProps {
  name: string
  link: string
}

const HeaderNavigationLi = ({ name, link }: HeaderNavigationLiProps) => {
  const segment = useSelectedLayoutSegment()

  return (
    <li
      className={clsx('w-fit font-ruluko text-lg my-5 mx-auto xl:text-xl 2xl:text-2xl md:my-0 md:mr-4 transition-all duration-200 border-b border-b-transparent hover:border-b-background-rose', {
        'border-b-background-rose': segment === link
      })}>
        <Link href={link}>{name}</Link>
      </li>
  )
}

export default HeaderNavigationLi