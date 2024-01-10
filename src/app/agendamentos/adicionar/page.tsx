import React from 'react'
import PageNavigation from '@/components/PageNavigation'
import PetScheduleForm from '@/components/app/Schedules/PetSheduleForm'

const CreateSchedulePage = async () => {
  return (
    <div className="min-h-screen w-full md:max-w-[800px] md:mx-auto pb-10 flex flex-col gap-12">
      <PageNavigation
        title="Novo Agendamento"
        backText="Agendamentos"
        backLink="/agendamentos"
      />
      <PetScheduleForm />
    </div>
  )
}

export default CreateSchedulePage
