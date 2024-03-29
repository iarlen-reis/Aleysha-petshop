import React from 'react'

interface CardHomeTitleProps {
  text: string
}

const CardHomeTitle = ({ text }: CardHomeTitleProps) => {
  return (
    <h1 className="font-amatic text-3xl sm:text-4xl md:text-5xl font-bold uppercase xl:text-6xl">
      {text}
    </h1>
  )
}

export default CardHomeTitle
