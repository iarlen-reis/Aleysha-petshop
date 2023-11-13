import React from 'react'
import Link from 'next/link'

interface OrderProductInformationProps {
  id: string
  name: string
  type: string
}
const OrderProductInformation = ({
  id,
  name,
  type,
}: OrderProductInformationProps) => {
  return (
    <div className="flex flex-col items-start uppercase">
      <Link
        href={`/produto/${id}`}
        className="text-lg md:text-xl xl:text-2xl hover:opacity-80 transition-all duration-200"
      >
        {name}
      </Link>
      <span className="text-sm md:text-base xl:text-lg text-background-rose ">
        {type}
      </span>
    </div>
  )
}

export default OrderProductInformation
