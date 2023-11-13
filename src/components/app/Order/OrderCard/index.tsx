import React from 'react'
import OrderImage from '@/components/app/Order/OrderImage'
import OrderInformation from '@/components/app/Order/OrderInformation'
import OrderProductPrice from '@/components/app/Order/OrderProductPrice'
import OrderProductInformation from '@/components/app/Order/OrderProductInformation'

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

interface OrderCardProps {
  id: string
  createdAt: Date
  total: number
  orderProducts: OrderProductsProps[]
}

const OrderCard = ({ createdAt, total, orderProducts }: OrderCardProps) => {
  return (
    <li className="flex flex-col gap-4 pb-2 border border-background-rose/20 rounded-md">
      <OrderInformation
        createdAt={createdAt}
        length={orderProducts.length}
        total={total}
      />
      <ul className="flex flex-col gap-4">
        {orderProducts.map((product) => (
          <li
            key={product.id}
            className="flex items-start gap-2 not-last:border-b not-last:border-background-rose/20 not-last:pb-3"
          >
            <OrderImage
              image={product.product.image}
              name={product.product.name}
            />
            <div className="flex flex-col items-start gap-2 font-ruluko">
              <OrderProductInformation
                id={product.product.id}
                name={product.product.name}
                type={product.product.type}
              />
              <OrderProductPrice
                quantity={product.quantity}
                total={product.product.price}
              />
            </div>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default OrderCard
