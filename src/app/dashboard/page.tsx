import React from 'react'
import ProductCharts from '@/components/app/Dashboard/ProductCharts'
import { DashboardNavigation } from '@/components/app/Dashboard/DashboardNavigation'

const DashboardPage = () => {
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
      <div>
        <ProductCharts />
      </div>
    </div>
  )
}

export default DashboardPage
