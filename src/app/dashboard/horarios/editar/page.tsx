import React from 'react'
import PageNavigation from '@/components/PageNavigation'
import CalendaryEdit from '@/components/app/Dashboard/CalendaryEdit'

const HoraryEditPage = async () => {
  return (
    <div className="min-h-screen max-w-[500px] w-full mx-auto flex flex-col gap-10">
      <PageNavigation
        title="Editar horários"
        backText="Dashboard"
        backLink="/dashboard"
      />
      <div>
        <CalendaryEdit />
      </div>
    </div>
  )
}

export default HoraryEditPage
