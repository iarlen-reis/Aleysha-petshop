'use client'
import React from 'react'
import Link from 'next/link'
import { useOrder } from '@/hooks/useOrder'
import { useSession } from 'next-auth/react'
import { Buyer } from '@/components/app/Cart/Buyer'
import { useCart } from '@/context/CartContext'
import { formatePrice } from '@/utils/formatePrice'
import { OrderDetails } from '@/components/app/Cart/OrderDetails'

const Checkout = () => {
  const { data: session } = useSession()
  const { createOrder, createOrderLoading } = useOrder()
  const { cartTotal, cartLength, cartItems } = useCart()

  const totalPrice = formatePrice(cartTotal)

  if (!session) {
    return
  }

  const handleCreateOrder = async () => {
    const products = cartItems.map((item) => {
      return {
        id: item.id,
        quantity: item.quantity,
      }
    })

    createOrder({
      products,
      total: cartTotal,
    })
  }

  return (
    <>
      {cartLength > 0 && (
        <div className="w-full h-fit flex flex-col gap-3 bg-background-input p-4 shadow-sm">
          <h1 className="text-center font-ruluko text-xl uppercase font-semibold md:text-2xl">
            Detalhes de pedido
          </h1>
          {session?.user && (
            <Buyer name={session?.user.name} email={session?.user.email} />
          )}
          <OrderDetails totalPrice={totalPrice} cartLength={cartLength} />
          <div className="flex items-center justify-end mt-2">
            {session?.user ? (
              <button
                onClick={handleCreateOrder}
                disabled={createOrderLoading}
                className="px-4 py-2 font-ruluko uppercase text-base rounded-md bg-background-rose text-white disabled:bg-zinc-400 disabled:animate-pulse"
              >
                {createOrderLoading ? 'Finalizando...' : 'Finalizar pedido'}
              </button>
            ) : (
              <Link
                href="/login"
                className="px-4 mx-auto py-2 font-ruluko uppercase text-base rounded-md bg-background-rose text-white disabled:bg-zinc-400 disabled:animate-pulse"
              >
                Faça login para finalizar o pedido
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Checkout
