import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardHomeTextContainerProps {
  children: ReactNode
  aditionalStyles?: string
}
const CardHomeTextContainer = ({
  children,
  aditionalStyles,
}: CardHomeTextContainerProps) => {
  return (
      <div 
      data-testid="card-home-text-container"
      className={twMerge('flex flex-col items-center text-center gap-2 md:gap-3 mx-auto sm:mx-0', aditionalStyles)}>
        {children}
      </div>
  )
}

export default CardHomeTextContainer
