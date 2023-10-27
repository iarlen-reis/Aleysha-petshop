import React, { ComponentProps } from 'react'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

interface ButtonLoginProps extends ComponentProps<'button'> {
  text: string
  icon: IconType
  aditionalStyles?: string
}

const ButtonLogin = ({
  text,
  icon: Icon,
  aditionalStyles,
  ...props
}: ButtonLoginProps) => {
  return (
    <button
      className={twMerge(
        'max-w-[336px] w-full flex items-center justify-center gap-3 font-ruluko text-lg py-4 text-white rounded-lg lg:max-w-[400px] lg:gap-4 transition-all duration-200 hover:opacity-80',
        aditionalStyles,
      )}
      {...props}
    >
      {text}
      <Icon size={22} />
    </button>
  )
}

export default ButtonLogin
