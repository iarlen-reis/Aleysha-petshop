import React from 'react'
import { twMerge } from 'tailwind-merge'

interface CardHomeParagraphProps {
  text: string
  aditionalStyles?: string
}

const CardHomeParagraph = ({
  text,
  aditionalStyles,
}: CardHomeParagraphProps) => {
  return (
    <p
      className={twMerge(
        'font-ruluko text-lg leading-relaxed sm:text-xl max-w-[400px] lg:max-w-[620px] xl:text-2xl',
        aditionalStyles,
      )}
    >
      {text}
    </p>
  )
}

export default CardHomeParagraph
