import React from 'react'
import { twMerge } from 'tailwind-merge'

interface CardHomeImageBackgroundProps {
  adicionalStyles?: string
}
const CardHomeImageBackground = ({
  adicionalStyles,
}: CardHomeImageBackgroundProps) => {
  return (
    <div
      className={twMerge('absolute bottom-0 h-full z-[-1]', adicionalStyles)}
    ></div>
  )
}

export default CardHomeImageBackground
