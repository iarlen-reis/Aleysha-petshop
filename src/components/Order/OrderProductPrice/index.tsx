import { formatePrice } from '@/utils/formatePrice'
import React from 'react'

interface OrderProductPriceProps {
  quantity: number
  total: number
}

const OrderProductPrice = ({ total, quantity }: OrderProductPriceProps) => {
  const totalValue = formatePrice(total * quantity)

  return (
    <div className="flex flex-col items-start">
      <span className="text-sm font-semibold md:text-base xl:text-lg">
        Quantidade: <span className="font-normal">{quantity}</span>
      </span>
      <span className="text-sm font-semibold md:text-base xl:text-lg">
        Total: <span className="font-normal">{totalValue}</span>
      </span>
    </div>
  )
}

export default OrderProductPrice
