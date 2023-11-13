'use client'
import Image from 'next/image'
import React from 'react'
import { Trash2Icon } from 'lucide-react'
import { formatePrice } from '@/utils/formatePrice'
import { useCart } from '@/context/CartContext'
import Link from 'next/link'

interface CartItemProps {
  id: string
  name: string
  type: string
  price: number
  image: string
  quantity: number
}

const CartItem = ({
  id,
  name,
  type,
  price,
  image,
  quantity,
}: CartItemProps) => {
  const { handleRemoveFromCart } = useCart()

  const totalPrice = formatePrice(price * quantity)

  const handleRemoveProduct = () => {
    handleRemoveFromCart(id)
  }

  return (
    <article className="py-3 px-2 flex justify-between rounded-md bg-background-input shadow-md">
      <div className="flex items-center gap-3">
        <div>
          <Link href={`/produto/${id}`}>
            <Image
              src={image}
              alt="Imagem de um homem e um cachorro"
              width={250}
              height={250}
              className="h-24 w-24 sm:h-32 sm:w-32 object-contain"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-start font-ruluko">
            <Link
              href={`/produto/${id}`}
              className="text-xl font-medium uppercase sm:text-2xl hover:opacity-80 transition-all duration-300"
            >
              {name}
            </Link>
            <span className="text-sm uppercase sm:text-lg text-background-rose">
              {type}
            </span>
          </div>
          <div className="flex flex-col items-start gap-1 font-crimson">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-semibold">
                Quantidade:
              </span>
              <span className="text-lg sm:text-xl">{quantity}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-semibold">Preço:</span>
              <span className="text-lg sm:text-xl">{totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-start">
        <button onClick={handleRemoveProduct}>
          <Trash2Icon size={25} className="text-background-rose" />
        </button>
      </div>
    </article>
  )
}

export default CartItem
