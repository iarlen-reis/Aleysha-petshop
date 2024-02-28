import React from "react";
import Image from "next/image";
import prisma from "@/utils/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import OrderCard from "@/components/app/Order/OrderCard";
import PageNavigation from "@/components/PageNavigation";
import NoOrderImage from "/public/images/order/no-order.png";
import { Pagination } from "@/components/Pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface ParamProps {
  searchParams: {
    page: string;
  };
}

const OrderPage = async ({ searchParams }: ParamProps) => {
  const page = Number(searchParams.page) || 1;

  const session = await getServerSession(authOptions);
  const ORDERS_PER_PAGE = 5;

  const totalOrders = await prisma.order.count({
    where: {
      userId: session?.user.id,
    },
  });

  const maxPage = Math.ceil(totalOrders / ORDERS_PER_PAGE);
  const existNextPage = page < maxPage;
  const existPreviousPage = page > 1;

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
      createdAt: "desc",
    },
    take: ORDERS_PER_PAGE,
    skip: (page - 1) * ORDERS_PER_PAGE,
  });

  return (
    <div className="min-h-screen flex flex-col gap-6 pb-12">
      <div>
        <PageNavigation
          title="Pedidos"
          backLink="/produtos?page=1"
          backText="Produtos"
        />
      </div>
      {orders && (
        <ul className="flex flex-col gap-4 mt-6">
          {orders.map((order) => (
            <OrderCard key={order.id} {...order} />
          ))}
        </ul>
      )}
      <Pagination.Root>
        {existPreviousPage && (
          <Pagination.LinkContainer>
            <Pagination.Link url={`/pedidos?page=${page - 1}`}>
              <Pagination.Icon icon={ChevronLeftIcon} />
            </Pagination.Link>
          </Pagination.LinkContainer>
        )}
        {maxPage > 1 && <Pagination.Indicator page={page} />}
        {existNextPage && (
          <Pagination.LinkContainer>
            <Pagination.Link url={`/pedidos?page=${page + 1}`}>
              <Pagination.Icon icon={ChevronRightIcon} />
            </Pagination.Link>
          </Pagination.LinkContainer>
        )}
      </Pagination.Root>
      {!orders && (
        <div className="max-w-[300px] w-full mx-auto flex flex-col items-center gap-4 sm:max-w-[400px]">
          <Image src={NoOrderImage} alt="Imagem de uma mulher no celular" />
          <p className="font-ruluko text-center text-2xl md:text-3xl">
            Nenhum pedido encontrado.
          </p>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
