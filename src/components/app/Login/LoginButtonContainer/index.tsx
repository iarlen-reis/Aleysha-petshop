'use client'
import React from 'react'
import ButtonLogin from '../ButtonLogin'
import { signIn } from 'next-auth/react'
import { BsGithub } from 'react-icons/bs'
import { AiFillGoogleCircle } from 'react-icons/ai'

const LoginButtonContainer = () => {
  const handleLoginWithGithub = () => {
    signIn('github')
  }

  const handleLoginWithGoogle = () => {
    signIn('google')
  }

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <ButtonLogin
        text="Faça login com o GitHub"
        icon={BsGithub}
        aditionalStyles="bg-background-button"
        onClick={handleLoginWithGithub}
      />
      <span className="font-ruluko text-lg italic lg:text-xl">ou</span>
      <ButtonLogin
        text="Faça login com o Google"
        icon={AiFillGoogleCircle}
        aditionalStyles="bg-[#EF4444]"
        onClick={handleLoginWithGoogle}
      />
    </div>
  )
}

export default LoginButtonContainer
