import React from "react";
import { MenuTools } from "@/components/MenuTools";
import PageNavigation from "@/components/PageNavigation";
import ShowServiceCards from "@/components/app/Services/ShowServiceCards";

const DashboardServices = async () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-10 pb-12">
      <PageNavigation
        title="Serviços"
        backText="Dashboard"
        backLink="/dashboard"
      />
      <MenuTools.Root>
        <MenuTools.Button
          text="Novo Serviços"
          href="/dashboard/servicos/adicionar"
        />
      </MenuTools.Root>
      <ShowServiceCards />
    </div>
  );
};

export default DashboardServices;
