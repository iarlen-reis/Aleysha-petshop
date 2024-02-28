"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { api } from "@/services/api";
import { useQuery } from "react-query";
import GraphicLine from "@/components/GraphicLine";
import { Pagination } from "@/components/Pagination";
import { ChevronLeftIcon, ChevronRightIcon, EditIcon, Trash2 } from "lucide-react";
import { DashboardNavigation } from "@/components/app/Dashboard/DashboardNavigation";

interface ProductChartProps {
  id: string
  name: string
  data: number[]
  quantity: number
}

interface ProductChartPage {
  maxPage: number
  existNextPage: boolean
  existPreviousPage: boolean
  charts: ProductChartProps[]
}

interface ParamProps {
  searchParams: {
    page: string
  }
}

const DashboardPage = ({searchParams}: ParamProps) => {
  const page = Number(searchParams.page) || 1

  const {data: charts } = useQuery<ProductChartPage>(['charts', page], async () => {
    const response = await api('/charts/?page=' + page)

    return response.data
  }, {
    staleTime: 1000 * 60 * 10, // 10 minutes
    keepPreviousData: true
  })

  return (
    <div className="min-h-screen flex flex-col gap-10 pb-12">
      <div className="flex flex-col">
        <h1 className="font-ruluko font-semibold text-3xl">Dashboard</h1>
        <p className="font-ruluko text-lg">
          Faça o gerenciamento de produtos e horários em um só lugar!
        </p>
      </div>
      <DashboardNavigation.Root>
        <DashboardNavigation.Link text="Gerenciar produtos" link="produtos" />
        <DashboardNavigation.Link text="Gerenciar Serviços" link="servicos" />
        <DashboardNavigation.Link text="Gerenciar Horários" link="horarios" />
      </DashboardNavigation.Root>
      <Table className="w-full h-full overflow-hidden">
        <TableHeader>
          <TableRow className="text-xl font-ruluko font-semibold">
            <TableHead>Nome</TableHead>
            <TableHead>Total de pedidos</TableHead>
            <TableHead>Graficos</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {charts?.charts && charts.charts.map((product) => (
            <TableRow className="text-lg font-ruluko" key={product.name}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.quantity}</TableCell>
            <TableCell>
              <GraphicLine data={product.data} name={product.name} />
            </TableCell>
            <TableCell className="flex items-center justify-start gap-6">
              <EditIcon />
              <Trash2 />
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination.Root>
        {charts?.existPreviousPage && (
          <Pagination.LinkContainer>
            <Pagination.Link
              url={`/dashboard/?page=${page - 1}`}
            >
              <Pagination.Icon icon={ChevronLeftIcon} />
            </Pagination.Link>
          </Pagination.LinkContainer>
        )}
        {charts?.maxPage && charts.maxPage > 1 && (
          <Pagination.Indicator page={page} />
        )}
        {charts?.existNextPage && (
          <Pagination.LinkContainer>
            <Pagination.Link
              url={`/dashboard/?page=${page + 1}`}
            >
              <Pagination.Icon icon={ChevronRightIcon} />
            </Pagination.Link>
          </Pagination.LinkContainer>
        )}
      </Pagination.Root>
    </div>
  );
};

export default DashboardPage;
