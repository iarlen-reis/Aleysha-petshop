import React from 'react'

interface BuyerProps {
  name: string
  email: string
}

export const Buyer = ({ name, email }: BuyerProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-ruluko font-semibold uppercase text-base sm:text-lg">
        - Informação do comprador
      </h2>
      <div className="flex flex-col gap-1 font-ruluko text-base sm:text-lg">
        <span>
          <span className="font-semibold">Nome:</span> {name}
        </span>
        <span>
          <span className="font-semibold">E-mail:</span> {email}
        </span>
      </div>
    </div>
  )
}
