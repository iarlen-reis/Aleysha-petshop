import React from 'react'

interface OrderDetailsProps {
  totalPrice: string | number
  cartLength: number
}

export const OrderDetails = ({ cartLength, totalPrice }: OrderDetailsProps) => {
  return (
    <div>
      <h2 className="font-ruluko font-semibold uppercase text-base sm:text-lg">
        - Informação do pedido
      </h2>
      <div className="flex flex-col gap-1 font-ruluko text-base sm:text-lg">
        <span>
          <span className="font-semibold">Quantidade:</span> {cartLength}
        </span>
        <span>
          <span className="font-semibold">Preço Total:</span> {totalPrice}
        </span>
      </div>
    </div>
  )
}
