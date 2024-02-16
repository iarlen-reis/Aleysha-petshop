import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardHomeRootProps {
  children: ReactNode
  aditionalStyles?: string
}

const CardHomeRoot = ({ children, aditionalStyles }: CardHomeRootProps) => {
  return (
    <section
    data-testid="card-home-root"
      className={twMerge(
        'mt-6 flex flex-col gap-8 lg:flex-row lg:justify-between w-full px-2 lg:mt-8',
        aditionalStyles,
      )}
    >
      {children}
    </section>
  )
}

export default CardHomeRoot
