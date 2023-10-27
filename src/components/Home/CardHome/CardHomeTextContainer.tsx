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
    <div className="flex flex-col gap-4 lg:gap-4">
      <div className={twMerge('flex flex-col gap-3 lg:gap-4', aditionalStyles)}>
        {children}
      </div>
    </div>
  )
}

export default CardHomeTextContainer
