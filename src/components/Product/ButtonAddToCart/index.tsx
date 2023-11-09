'use client'
import React from 'react'
import { toast } from 'react-toastify'
import { useCart } from '@/context/CartContext'

interface ProductSavedProps {
  id: string
  name: string
  price: number
  type: string
  image: string
}

interface ButtonAddToCartProps {
  product: ProductSavedProps
}

const ButtonAddToCart = ({ product }: ButtonAddToCartProps) => {
  const { handleAddToCart } = useCart()

  const handleAddToCartProduct = () => {
    handleAddToCart({
      id: product.id,
      type: product.type,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
    })

    toast.success('Produto adicionado ao carrinho com sucesso!')
  }
  return (
    <button
      onClick={handleAddToCartProduct}
      className="w-full text-center font-crimson text-base uppercase py-3 px-4 lg:text-lg rounded text-white bg-background-rose hover:opacity-80 transition-all duration-200"
    >
      Adicionar ao carrinho
    </button>
  )
}

export default ButtonAddToCart
