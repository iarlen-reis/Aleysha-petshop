import React from 'react'
import Image from 'next/image'
import LogoDogImage from '/public/images/login/logo-icon.png'
import GirlWithCatImage from '/public/images/login/woman-with-cat.png'
import LoginButtonContainer from '@/components/Login/LoginButtonContainer'

const LoginPage = () => {
  return (
    <div className="w-full h-screen mt-12">
      <div className="md:grid md:grid-cols-[0.8fr_1fr] md:shadow-lg md:rounded-lg md:w-[720px] md:mx-auto lg:w-[900px] xl:w-[1000px]">
        <div className="hidden md:block w-full h-full">
          <Image
            src={GirlWithCatImage}
            alt="Uma mulher de cabelo colorido e roupão branco segurando um gato de cor grafite com listras pretas."
            width={600}
            height={600}
            className="w-full h-full rounded-tl-lg rounded-bl-lg"
          />
        </div>
        <div className="flex flex-col items-center gap-6 md:w-full md:mt-12 lg:my-auto">
          <div className="w-full flex flex-col items-center text-center gap-3">
            <div>
              <h1 className="font-ruluko text-3xl font-bold lg:text-4xl">
                Aleysha Petshop
              </h1>
              <span className="font-ruluko text-lg lg:text-xl">
                Amor em cada abraço!
              </span>
            </div>
            <Image src={LogoDogImage} alt="Imagem de um cara de cachorro" />
          </div>
          <LoginButtonContainer />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
