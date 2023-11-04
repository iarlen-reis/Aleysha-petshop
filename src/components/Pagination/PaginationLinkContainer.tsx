import React, { ReactNode } from 'react'

interface PaginationLinkContainerProps {
  children: ReactNode
}
const PaginationLinkContainer = ({
  children,
}: PaginationLinkContainerProps) => {
  return (
    <div className="flex items-center justify-center w-10 group">
      {children}
    </div>
  )
}

export default PaginationLinkContainer
