import React from 'react'
import { CartContent } from '@/components/Cart/CartContent'

const CartPage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-8 pb-12">
      <div className="flex flex-col items-start">
        <h1 className="font-ruluko font-semibold text-3xl">
          Carrinho de compras
        </h1>
        <p>Aqui estão todos seus produtos adicionados no carrinho.</p>
      </div>
      <CartContent />
    </div>
  )
}

export default CartPage
