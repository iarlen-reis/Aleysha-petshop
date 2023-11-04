import React from 'react'

interface PaginationIndicatorProps {
  page: number
}
const PaginationIndicator = ({ page }: PaginationIndicatorProps) => {
  return <span className="text-xl font-ruluko font-bold">{page}</span>
}

export default PaginationIndicator
