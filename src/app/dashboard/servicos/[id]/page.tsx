'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Edit2Icon } from 'lucide-react'
import React, { useEffect } from 'react'
import { useService } from '@/hooks/useService'
import { formatePrice } from '@/utils/formatePrice'
import PageNavigation from '@/components/PageNavigation'

interface ParamProps {
  params: {
    id: string
  }
}

const ServiceById = ({ params }: ParamProps) => {
  const { getServiceById, service } = useService()

  useEffect(() => {
    getServiceById(params.id)
  }, [params.id])

  return (
    <div className="w-full max-w-[600px] flex flex-col mx-auto min-h-screen gap-10 pb-12">
      {service && (
        <>
          <PageNavigation
            title={service.name}
            backText="Serviços"
            backLink="/dashboard/servicos"
          />
          <div className="flex flex-col gap-4">
            <Image
              src={service.image}
              width={300}
              height={300}
              alt={service.name}
              className="mx-auto w-[250px] h-[250px] rounded-[50%] object-fill"
            />
            <ul className="flex flex-col items-center">
              <li className="font-ruluko font-bold text-2xl text-background-rose">
                {service.name}
              </li>
              <li className="font-ruluko text-lg">
                Preço: {formatePrice(service.price)}
              </li>
            </ul>
            <div className="flex flex-col">
              <h2 className="font-ruluko font-semibold text-lg">Descrição:</h2>
              <p className="font-ruluko">{service.description}</p>
            </div>
            <div className="mt-4">
              <Link
                href={`/dashboard/servicos/editar/${service.id}`}
                className="w-fit flex items-center justify-center gap-2 mx-auto py-2 px-4 font-crimson font-semibold uppercase text-lg text-center rounded-lg text-white transition-all duration-300 bg-background-rose hover:opacity-80"
              >
                Editar Serviço
                <Edit2Icon size={20} />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ServiceById
