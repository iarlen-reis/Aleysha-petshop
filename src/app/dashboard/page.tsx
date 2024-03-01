"use client";
import React from "react";
import Link from "next/link";
import { api } from "@/services/api";
import { useQuery } from "react-query";
import GraphicLine from "@/components/GraphicLine";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "@/components/ui/menubar";

import {
  EditIcon,
} from "lucide-react";

interface ProductChartProps {
  id: string;
  name: string;
  data: number[];
  quantity: number;
}

interface ProductChartPage {
  charts: ProductChartProps[];
}

const DashboardPage = () => {
  const { data: charts } = useQuery<ProductChartPage>(
    ["charts"],
    async () => {
      const response = await api("/charts");

      return response.data;
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutes
      keepPreviousData: true,
    }
  );

  return (
    <div className="min-h-screen flex flex-col gap-10 pb-12">
      <div className="flex flex-col">
        <h1 className="font-ruluko font-semibold text-3xl">Dashboard</h1>
        <p className="font-ruluko text-lg">
          Faça o gerenciamento de produtos e horários em um só lugar!
        </p>
      </div>

      <Menubar className="w-fit">
        <MenubarMenu>
          <MenubarTrigger>Produtos</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href="/dashboard/produtos">Todos produtos</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/dashboard/produtos/adicionar">Adicionar produtos</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Serviços</MenubarTrigger>
          <MenubarContent>
          <MenubarItem>
              <Link href="/dashboard/servicos">Todos Serviços</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/dashboard/servicos/adicionar">Adicionar Serviços</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger>Horários</MenubarTrigger>
        <MenubarContent>
            <MenubarItem>
              <Link href="/dashboard/horarios">Todos horários</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/dashboard/horarios/adicionar">Adicionar horários</Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="/dashboard/horarios/editar">Editar horários</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <Table className="w-full h-full overflow-hidden">
        <TableHeader>
          <TableRow className="text-base lg:text-xl font-ruluko font-semibold">
            <TableHead>Nome</TableHead>
            <TableHead>Total de pedidos</TableHead>
            <TableHead>Graficos</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {charts?.charts &&
            charts.charts.map((product) => (
              <TableRow className="text-lg font-ruluko" key={product.name}>
                <TableCell>
                  <Link href={`/dashboard/produtos/${product.id}`}>
                  {product.name}
                  </Link>
                </TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>
                  <GraphicLine data={product.data} name={product.name} />
                </TableCell>
                <TableCell className="flex items-center justify-start gap-8">
                  <Link href={`/dashboard/produtos/editar/${product.id}`}>
                  <EditIcon className="size-4 text-cyan-500" />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DashboardPage;
