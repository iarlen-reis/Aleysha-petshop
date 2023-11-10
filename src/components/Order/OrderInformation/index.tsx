import React from 'react'
import { formatDate } from '@/utils/formatDate'
import { formatePrice } from '@/utils/formatePrice'

interface OrderInformationProps {
  createdAt: Date
  length: number
  total: number
}

const OrderInformation = ({
  createdAt,
  length,
  total,
}: OrderInformationProps) => {
  const date = formatDate(createdAt)
  const totalPrice = formatePrice(total)

  return (
    <ul className="flex items-center gap-4 justify-between p-3 bg-pink-500 text-white sm:justify-start sm:gap-12">
      <li className="flex flex-col items-start gap-1 text-sm font-ruluko font-semibold md:text-base xl:text-lg">
        Data do pedido: <span className="font-normal">{date}</span>
      </li>
      <li className="flex flex-col items-start text-sm font-ruluko font-semibold md:text-base xl:text-lg">
        Produtos:
        <span className="font-normal">{length}</span>
      </li>
      <li className="flex flex-col items-start gap-1 text-sm font-ruluko font-semibold md:text-base lg:text-lg">
        Total: <span className="font-normal">{totalPrice}</span>
      </li>
    </ul>
  )
}

export default OrderInformation
