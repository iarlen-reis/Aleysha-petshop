"use client";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { ApexOptions } from "apexcharts";

interface GraphicLineProps {
  name: string
  data: number[] | null[]
}

const GraphicLine = ({data, name}: GraphicLineProps) => {
  const options: ApexOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: name,
        data: data,
        color: "#E11D48",
      },
    ],
    xaxis: {
      categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Aug", "Set", "Out", "Nov", "Dez"],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      curve: "smooth",
    },
    tooltip: {
      shared: true,
      hideEmptySeries: true,
    }
  };


  return (
    <div className="h-[70px] w-[150px] lg:w-[300px]">
        <Chart
        options={options}
        series={options.series}
        type="line"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default GraphicLine;
