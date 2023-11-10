import { prisma } from '@/utils/prisma'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const category = request.nextUrl.searchParams.get('category') || null
    const page = Number(request.nextUrl.searchParams.get('page')) || 1

    if (!category) {
      const totalProducts = await prisma.product.count()
      const maxPage = Math.ceil(totalProducts / 8)
      const existNextPage = page < maxPage
      const existPreviousPage = page > 1

      const products = await prisma.product.findMany({
        take: 8,
        skip: (page - 1) * 8,
      })

      return NextResponse.json({
        page,
        maxPage,
        existNextPage,
        existPreviousPage,
        products,
      })
    }

    const totalProducts = await prisma.product.count({
      where: {
        type: {
          contains: category,
          mode: 'insensitive',
        },
      },
    })

    const maxPage = Math.ceil(totalProducts / 8)
    const existNextPage = page < maxPage
    const existPreviousPage = page > 1

    const products = await prisma.product.findMany({
      take: 8,
      skip: (page - 1) * 8,
      where: {
        type: {
          contains: category,
          mode: 'insensitive',
        },
      },
    })

    return NextResponse.json({
      maxPage,
      existNextPage,
      existPreviousPage,
      page,
      products,
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: error,
      },
      {
        status: 500,
      },
    )
  }
}
