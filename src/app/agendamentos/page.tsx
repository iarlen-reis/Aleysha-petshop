import React from "react";
import { MenuTools } from "@/components/MenuTools";
import FilterSchedules from "@/components/app/Schedules/FilterSchedules";
import ShowScheduleCards from "@/components/app/Schedules/ShowScheduleCards";

interface Params {
  searchParams: {
    page: string;
    status: string;
  };
}

const SchedulePege = async ({ searchParams }: Params) => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-8 pb-12">
      <div className="flex flex-col font-ruluko ">
        <h1 className="font-semibold text-2xl">Agendamentos</h1>
        <p className="text-lg">Aqui estão todos seus angendamentos.</p>
      </div>
      <FilterSchedules pathname="agendamentos" />
      <MenuTools.Root>
        <MenuTools.Button
          text="Novo agendamento"
          href="/agendamentos/adicionar"
        />
      </MenuTools.Root>
      <ShowScheduleCards
        status={searchParams.status}
        page={searchParams.page}
      />
    </div>
  );
};

export default SchedulePege;
