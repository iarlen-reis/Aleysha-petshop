'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import NoneCartImage from '/public/images/cart/none-cart.png'
import CartList from '@/components/app/Cart/CartList'
import Checkout from '@/components/app/Cart/Checkout'

export const CartContent = () => {
  const { cartLength } = useCart()

  return (
    <>
      {cartLength > 0 ? (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_0.6fr]">
          <div className="order-2 flex flex-col gap-4 mt-4 lg:order-[0] lg:mt-0">
            <h2 className="font-ruluko uppercase text-lg sm:text-xl lg:hidden">
              Produtos no carrinho
            </h2>
            <CartList />
          </div>
          <Checkout />
        </div>
      ) : (
        <div className="max-w-[300px] w-full mx-auto flex flex-col items-center gap-4 sm:max-w-[400px]">
          <Image
            src={NoneCartImage}
            width={300}
            height={300}
            className="w-full"
            alt="Imagem de uma mulher segurando sacolas de compras em um shopping"
          />
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-ruluko text-2xl md:text-3xl">
              Nenhum item no carrinho
            </h1>
            <Link
              href="/produtos"
              className="w-full px-4 py-2 text-lg text-center rounded-lg text-white bg-background-rose hover:opacity-80 transition-all duration-200 lg:py-3"
            >
              Seção de produtos
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
