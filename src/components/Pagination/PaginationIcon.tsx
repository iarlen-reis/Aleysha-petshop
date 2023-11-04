import { LucideIcon } from 'lucide-react'
import React from 'react'
import { IconType } from 'react-icons'

interface PaginationIconProps {
  icon: LucideIcon | IconType
}
const PaginationIcon = ({ icon: Icon }: PaginationIconProps) => {
  return <Icon size={25} />
}

export default PaginationIcon
