import React from 'react'
import PageNavigation from '@/components/PageNavigation'
import EditServiceForm from '@/components/app/Services/EditServiceForm'

interface ParamProps {
  params: {
    id: string
  }
}

const EditServicePage = ({ params }: ParamProps) => {
  return (
    <div className="min-h-screen w-full md:max-w-[600px] md:mx-auto flex flex-col pb-12 gap-10">
      <PageNavigation
        title="Editar Serviço"
        backText="Serviços"
        backLink="/dashboard/servicos"
      />
      <EditServiceForm serviceId={params.id} />
    </div>
  )
}

export default EditServicePage
