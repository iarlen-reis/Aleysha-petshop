"use client";
import React from "react";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { api } from "@/services/api";
import { useQuery } from "react-query";
import { SearchIcon } from "lucide-react";
import { ScheduleProps } from "@/hooks/useSchedules";
import { formatePrice } from "@/utils/formatePrice";
import { convertStatus } from "@/utils/convertStatus";
import { convertGender } from "@/utils/convertGender";
import PageNavigation from "@/components/PageNavigation";
import { CancelScheduleButton } from "@/components/app/Services/CancelScheduleButton";
import { redirect } from "next/navigation";
import ScheduleDetailLoading from "./loading";
import clsx from "clsx";

interface Params {
  params: {
    id: string;
  };
}

const ScheduleDetailPage = ({ params }: Params) => {
  const { data: schedule } = useQuery(["schedule", params.id], async () => {
    const response = await api.get<ScheduleProps>(`/schedules/${params.id}`);

    return response.data;
  });

  if (!schedule) {
    return <ScheduleDetailLoading />
  }

  const formattedDate = dayjs(schedule?.availableDate.date).format(
    "DD/MM/YYYY"
  );

  return (
    <div className="flex flex-col min-h-screen max-w-[600px] mx-auto w-full gap-8 pb-12">
      <PageNavigation
        title={schedule.pet.name}
        backText="agendamentos"
        backLink="/agendamentos"
      />
      <div className="flex flex-col gap-5">
        <section className="flex flex-col gap-2 bg-background-input rounded-md">
          <ul className="flex flex-col items-center py-2 font-ruluko">
            <li className="text-lg">
              {formattedDate}, {schedule.timeSlot.timeSlot}
            </li>
            <li className="text-base">
              <span
                className={clsx(
                  '', {
                    "text-green-500": schedule.status === "completed",
                    "text-red-500": schedule.status === "canceled",
                  }
                )}
              >
                {convertStatus(schedule.status)}
              </span>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-ruluko font-medium uppercase">
            Informações do pet
          </h2>
          <div className="flex justify-between gap-2 pr-2 items-center bg-background-input rounded-md">
            <div className="flex items-center gap-2">
              <Image
                src={schedule.pet.image}
                alt={schedule.pet.name}
                width={100}
                height={100}
                className="w-[100px] h-[100px] object-cover rounded-lg bg-background-rose"
              />
              <ul className="flex flex-col items-start py-2 font-ruluko">
                <li className="text-2xl font-medium">{schedule.pet.name}</li>
                <li className="text-base text-background-rose">
                  {schedule.pet.race} | {convertGender(schedule.pet.gender)}
                </li>
                <li className="text-base text-background-rose">
                  {schedule.pet.age > 1
                    ? `${schedule.pet.age} anos`
                    : `${schedule.pet.age} meses `}
                </li>
              </ul>
            </div>
            <Link
              href={`/pets/${schedule.pet.id}`}
              className="w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-background-rose"
            >
              <SearchIcon size={25} strokeWidth={2} className="text-white" />
            </Link>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-ruluko font-medium uppercase">
            Informações do serviço
          </h2>
          <div className="flex gap-2 justify-between pr-2 items-center bg-background-input rounded-md">
            <div className="flex gap-2 items-center">
              <Image
                src={schedule.service.image}
                alt={schedule.service.name}
                width={100}
                height={100}
                className="w-[100px] h-[100px] object-cover rounded-lg bg-background-rose"
              />
              <ul className="flex flex-col items-start py-2 font-ruluko">
                <li className="text-2xl font-medium">
                  {schedule.service.name}
                </li>
                <li className="text-base text-background-rose">Saúde</li>
                <li className="text-base text-background-rose">
                  {formatePrice(schedule.service.price)}
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-2 ">
          <h2 className="text-xl font-ruluko font-medium uppercase">
            Observações
          </h2>
          <p className="text-base font-ruluko">{schedule.observations}</p>
          {schedule.status === "pending" && (
            <CancelScheduleButton idSchedule={schedule.id} />
          )}
        </section>
      </div>
    </div>
  );
};

export default ScheduleDetailPage;
