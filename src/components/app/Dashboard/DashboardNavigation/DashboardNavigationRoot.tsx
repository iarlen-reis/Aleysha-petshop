import React from 'react'
import { twMerge } from 'tailwind-merge'

interface DashboardNavigationRootProps {
  children: React.ReactNode
  additionalStyles?: string
}

const DashboardNavigationRoot = ({
  children,
  additionalStyles,
}: DashboardNavigationRootProps) => {
  return (
    <ul
      className={twMerge(
        'w-fit flex items-center gap-3 p-2 border-b border-background-rose/50',
        additionalStyles,
      )}
    >
      {children}
    </ul>
  )
}

export default DashboardNavigationRoot
