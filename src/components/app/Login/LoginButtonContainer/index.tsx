'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import { BsGithub } from 'react-icons/bs'
import { Button } from '@/components/ui/button'
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
      <Button 
        onClick={handleLoginWithGithub} 
        data-testid="login-with-github"
        className='max-w-[336px] w-full h-[46px] font-ruluko'
        >
        Faça login com o GitHub
        <BsGithub size={22} data-testid="icon" />
      </Button>
      <span className="font-ruluko text-lg italic lg:text-xl">ou</span>
      <Button 
        onClick={handleLoginWithGoogle} 
        data-testid="login-with-google"
        variant='destructive'
        className='max-w-[336px] w-full h-[46px] font-ruluko bg-[#EF4444] hover:opacity-80'
        >
        Faça login com o Google
        <AiFillGoogleCircle size={22} data-testid="icon" />
      </Button>
    </div>
  )
}

export default LoginButtonContainer
