import React from 'react'
import Image from 'next/image'
import prisma from '@/utils/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/utils/authOptions'
import OrderCard from '@/components/app/Order/OrderCard'
import PageNavigation from '@/components/PageNavigation'
import NoOrderImage from '/public/images/order/no-order.png'


const OrderPage = async () => {
  const session = await getServerSession(authOptions)

  const orders = await prisma.order.findMany({
    where: {
      userId: session?.user.id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <div className="min-h-screen flex flex-col gap-6 pb-12">
      <div>
        <PageNavigation
          title="Pedidos"
          backLink="/produtos?page=1"
          backText="Produtos"
        />
      </div>
      {orders ? (
        <ul className="flex flex-col gap-4 mt-6">
          {orders.map((order) => (
            <OrderCard key={order.id} {...order} />
          ))}
        </ul>
      ) : (
        <div className="max-w-[300px] w-full mx-auto flex flex-col items-center gap-4 sm:max-w-[400px]">
          <Image src={NoOrderImage} alt="Imagem de uma mulher no celular" />
          <p className="font-ruluko text-center text-2xl md:text-3xl">
            Nenhum pedido encontrado.
          </p>
        </div>
      )}
    </div>
  )
}

export default OrderPage
