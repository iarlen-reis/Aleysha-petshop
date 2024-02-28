import prisma from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const currentYear = new Date().getFullYear();
    const page = Number(request.nextUrl.searchParams.get("page")) || 1;
    
    
    const CHARTS_PER_PAGE = 5;
    const totalProducts = await prisma.product.count();

    const maxPage = Math.ceil(totalProducts / CHARTS_PER_PAGE);
    const existNextPage = page < maxPage;
    const existPreviousPage = page > 1;

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
      orderBy: {
        createdAt: "desc",
      },
      take: CHARTS_PER_PAGE,
      skip: (page - 1) * CHARTS_PER_PAGE,
    });

    const monthlyOrderProductsMap = new Map();
    const productDetailsMap = new Map();

    await Promise.all(
      yearlyOrderProducts.map(async (product) => {
        if (!productDetailsMap.has(product.productId)) {
          const details = await prisma.product.findUnique({
            where: {
              id: product.productId,
            },
            select: {
              name: true,
              type: true,
            },
          });
          productDetailsMap.set(
            product.productId,
            details?.name || "Produto Desconhecido"
          );
        }
      })
    );

    yearlyOrderProducts.forEach((product) => {
      const productId = product.productId;
      const month = new Date(product.createdAt).getMonth() + 1;
      const quantity = product.quantity;

      if (!monthlyOrderProductsMap.has(productId)) {
        monthlyOrderProductsMap.set(
          productId,
          Array.from({ length: 12 }).fill(0)
        );
      }

      monthlyOrderProductsMap.get(productId)[month - 1] += quantity;
    });

    const charts = Array.from(
      monthlyOrderProductsMap.entries()
    ).map(([productId, quantities]) => ({
      productId,
      data: quantities,
      name: productDetailsMap.get(productId),
      quantity: quantities.reduce((a: number, b: number) => a + b, 0),
    }));

    return NextResponse.json(
      { maxPage, existNextPage, existPreviousPage, charts },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
