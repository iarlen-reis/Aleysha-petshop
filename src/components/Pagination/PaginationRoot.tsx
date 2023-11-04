import React, { ReactNode } from 'react'

interface PaginationRootProps {
  children: ReactNode
}

const PaginationRoot = ({ children }: PaginationRootProps) => {
  return (
    <div className="w-full h-8 flex items-center justify-end gap-2 mt-4 px-3">
      {children}
    </div>
  )
}

export default PaginationRoot
