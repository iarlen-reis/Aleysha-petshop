import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatePrice } from '@/utils/formatePrice'

interface ServiceCardProps {
  id: string
  name: string
  price: number
  image: string
}

const ServiceCard = (service: ServiceCardProps) => {
  return (
    <div className="w-[260px] flex flex-col gap-2 mx-auto lg:mx-0 shadow shadow-background-rose/20 rounded-md overflow-hidden bg-background-input">
      <Image
        src={service.image}
        alt={`Imagem do servico ${service.name}`}
        width={300}
        height={200}
        className="w-full h-[150px] object-cover lg:hover:scale-105 transition-all duration-300"
      />
      <div className="flex flex-col gap-2 p-3">
        <div className="flex flex-col gap-1 items-center text-center">
          <span className="font-ruluko text-xl font-bold text-background-rose">
            {service.name}
          </span>
          <span className="font-ruluko text-lg">
            {formatePrice(service.price)}
          </span>
        </div>

        <Link
          href={`/dashboard/servicos/${service.id}`}
          className="w-full p-2 font-crimson font-semibold uppercase text-lg text-center rounded-lg text-white transition-all duration-300 bg-background-rose hover:opacity-80"
        >
          Detalhes
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard
