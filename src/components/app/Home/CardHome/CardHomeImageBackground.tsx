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
      className={twMerge(
        'absolute bottom-0 h-full bg-background-rose z-[-1] rounded-3xl',
        adicionalStyles,
      )}
    ></div>
  )
}

export default CardHomeImageBackground
