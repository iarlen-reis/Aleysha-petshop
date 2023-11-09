'use client'
import React from 'react'
import CartItem from '../CartItem'
import { useCart } from '@/context/CartContext'

const CartList = () => {
  const { cartItems } = useCart()

  return (
    <div className="flex flex-col gap-4">
      {cartItems &&
        cartItems.map((item) => <CartItem key={item.id} {...item} />)}
    </div>
  )
}

export default CartList
