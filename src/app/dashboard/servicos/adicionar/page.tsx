import React from 'react'
import PageNavigation from '@/components/PageNavigation'
import NewServiceForm from '@/components/app/Services/NewServiceForm'

const DashboardNewService = () => {
  return (
    <div className="min-h-screen w-full md:max-w-[600px] md:mx-auto flex flex-col pb-12 gap-10">
      <PageNavigation
        title="Novo Serviços"
        backText="Serviços"
        backLink="/dashboard/servicos"
      />
      <NewServiceForm />
    </div>
  )
}

export default DashboardNewService
