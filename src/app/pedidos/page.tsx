import React from 'react'
import Image from 'next/image'
import { headers } from 'next/headers'
import OrderCard from '@/components/app/Order/OrderCard'
import PageNavigation from '@/components/PageNavigation'
import NoOrderImage from '/public/images/order/no-order.png'

export const revalidate = 60

interface ProductProps {
  id: string
  name: string
  type: string
  price: number
  image: string
}

interface OrderProductsProps {
  id: string
  quantity: number
  productId: string
  product: ProductProps
}

interface OrderProps {
  id: string
  total: number
  createdAt: Date
  orderProducts: OrderProductsProps[]
}

const OrderPage = async () => {
  const response = await fetch(`http://localhost:3000/api/order`, {
    headers: new Headers(headers()),
    method: 'GET',
    cache: 'no-store',
  })

  const orders: OrderProps[] = await response.json()

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
