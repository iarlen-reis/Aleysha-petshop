import prisma from '@/utils/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const currentYear = new Date().getFullYear()

    const yearlyOrderProducts = await prisma.oderProduct.findMany({
      where: {
        createdAt: {
          gte: new Date(`${currentYear}-01-01T00:00:00.000Z`),
          lt: new Date(`${currentYear + 1}-01-01T00:00:00.000Z`),
        },
      },
      select: {
        productId: true,
        createdAt: true,
        quantity: true,
      },
    })

    const monthlyOrderProductsMap = new Map()
    const productDetailsMap = new Map()

    await Promise.all(
      yearlyOrderProducts.map(async (product) => {
        if (!productDetailsMap.has(product.productId)) {
          const details = await prisma.product.findUnique({
            where: {
              id: product.productId,
            },
            select: {
              name: true,
            },
          })
          productDetailsMap.set(
            product.productId,
            details?.name || 'Produto Desconhecido',
          )
        }
      }),
    )

    yearlyOrderProducts.forEach((product) => {
      const productId = product.productId
      const month = new Date(product.createdAt).getMonth() + 1
      const quantity = product.quantity

      if (!monthlyOrderProductsMap.has(productId)) {
        monthlyOrderProductsMap.set(
          productId,
          Array.from({ length: 12 }).fill(null),
        )
      }

      monthlyOrderProductsMap.get(productId)[month - 1] += quantity
    })

    const monthlyOrderProducts = Array.from(
      monthlyOrderProductsMap.entries(),
    ).map(([productId, quantities]) => ({
      productId,
      name: productDetailsMap.get(productId),
      data: quantities,
    }))

    return NextResponse.json(monthlyOrderProducts, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
