import React from "react";
import Image from "next/image";
import prisma from "@/utils/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { MenuTools } from "@/components/MenuTools";
import { Pagination } from "@/components/Pagination";
import { convertStatus } from "@/utils/convertStatus";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import ScheduleCard from "@/components/app/Schedules/ScheduleCard";
import NoScheduleImage from "/public/images/schedules/no-schedules.png";
import FilterSchedules from "@/components/app/Schedules/FilterSchedules";

interface Params {
  searchParams: {
    page: string;
    status: string;
  };
}

const SchedulePege = async ({ searchParams }: Params) => {
  const page = Number(searchParams.page) || 1;
  const status = searchParams.status ?? "";

  const session = await getServerSession(authOptions);

  const allSchedules = await prisma.schedule.count({
    where: {
      userId: session?.user.id,
      status: {
        contains: status,
      },
    },
  });

  const maxPage = Math.ceil(allSchedules / 9);
  const existNextPage = page < maxPage;
  const existPreviousPage = page > 1;

  const schedules = await prisma.schedule.findMany({
    where: {
      userId: session?.user.id,
      status: {
        contains: status,
      },
    },
    include: {
      pet: true,
      service: true,
      availableDate: true,
      timeSlot: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 9,
    skip: (page - 1) * 9,
  });

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
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:justify-between">
        {schedules &&
          schedules.map((schedule) => (
            <ScheduleCard key={schedule.id} {...schedule} />
          ))}
      </div>
      {!schedules.length && (
        <div className="flex flex-col items-center gap-2">
          <Image
            src={NoScheduleImage}
            alt="No schedules"
            width={300}
            height={300}
          />
          <div className="flex flex-col gap-1 items-center text-2xl font-ruluko tracking-wider">
            <p>Nenhum agendamento</p>
            {status && <p className="font-semibold">{convertStatus(status)}</p>}
            <p>encontrado.</p>
          </div>
        </div>
      )}
      <Pagination.Root>
        {existPreviousPage && (
          <Pagination.LinkContainer>
            <Pagination.Link
              url={`/agendamentos?page=${Number(page) - 1}
            ${status ? `&status=${status}` : ""}
            `}
            >
              <Pagination.Icon icon={ChevronLeftIcon} />
            </Pagination.Link>
          </Pagination.LinkContainer>
        )}
        {schedules && maxPage > 1 && (
          <Pagination.Indicator page={Number(page)} />
        )}
        {schedules && existNextPage && (
          <Pagination.LinkContainer>
            <Pagination.Link
              url={`/agendamentos?page=${Number(page) + 1}
            ${status ? `&status=${status}` : ""}
            `}
            >
              <Pagination.Icon icon={ChevronRightIcon} />
            </Pagination.Link>
          </Pagination.LinkContainer>
        )}
      </Pagination.Root>
    </div>
  );
};

export default SchedulePege;
