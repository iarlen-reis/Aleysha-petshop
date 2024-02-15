'use client'
import Calendary from '../Calendary'
import React, { useState } from 'react'
import { usePet } from '@/hooks/usePet'
import { useHorary } from '@/hooks/useHorary'
import { useService } from '@/hooks/useService'
import SelectField from '@/components/SelectField'
import { useSchedules } from '@/hooks/useSchedules'
import TextAreaInput from '@/components/TextAreaField'
import { FormProvider, useForm } from 'react-hook-form'

interface FormProps {
  petId: string
  serviceId: string
  observations: string
}

interface ScheduleProps {
  dateId: string
  timeId: string
}

const PetScheduleForm = () => {
  const { pets } = usePet()
  const { services } = useService()
  const methods = useForm<FormProps>()
  const { availableDates } = useHorary()
  const { addShedule, addSheduleLoading } = useSchedules()
  const [schedule, setSchedule] = useState<ScheduleProps | null>(null)

  const handleAddSchedule = (data: FormProps) => {
    if (!schedule?.dateId || !schedule?.timeId) return

    const scheduleDate = {
      petId: data.petId,
      serviceId: data.serviceId,
      observations: data.observations,
      timeSlotId: schedule.timeId,
      availableDateId: schedule.dateId,
    }

    addShedule(scheduleDate)
    methods.reset()
    setSchedule(null)
  }

  return (
    <div>
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-4"
          onSubmit={methods.handleSubmit(handleAddSchedule)}
        >
          <div className="flex flex-col gap-3 md:flex-row md:gap-4">
            <SelectField
              name="petId"
              label="Selecione o pet"
              options={
                pets?.pets.map((pet) => ({
                  label: pet.name,
                  value: pet.id,
                })) ?? []
              }
              rules={{ required: 'O campo é obrigatório.' }}
              disabled={addSheduleLoading}
            />
            <SelectField
              name="serviceId"
              label="Selecione o serviço"
              options={
                services?.map((service) => ({
                  label: `${service.name} - R$${Number(service.price).toFixed(
                    2,
                  )}`,
                  value: service.id,
                })) ?? []
              }
              rules={{ required: 'O campo é obrigatório.' }}
              disabled={addSheduleLoading}
            />
          </div>

          <Calendary
            setSchedule={setSchedule}
            availableDates={availableDates ?? []}
            disabled={addSheduleLoading}
          />
          <TextAreaInput
            name="observations"
            label="Observações"
            disabled={addSheduleLoading}
          />
          <div className="w-full flex items-end justify-end">
            <input
              type="submit"
              value="Agendar"
              disabled={!schedule || addSheduleLoading}
              className="max-w-[220px] w-full py-2 px-4 font-crimson font-semibold uppercase md:px-6 md:text-lg text-white bg-background-rose rounded-md cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed hover:opacity-80 transition-all duration-200"
            />
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default PetScheduleForm
