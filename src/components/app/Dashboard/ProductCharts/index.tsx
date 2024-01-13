'use client'
import React from 'react'
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import { useCharts } from '@/hooks/useCharts'

const ProductCharts = () => {
  const { productCharts } = useCharts()

  const options: ApexOptions = {
    chart: {
      id: 'basic-bar',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Aug',
        'Set',
        'Out',
        'Nov',
        'Dez',
      ],
    },
    markers: {
      size: 5,
      showNullDataPoints: false,
    },
    grid: {
      show: true,
      strokeDashArray: 2,
      borderColor: '#44444475',
    },
    tooltip: {
      enabled: true,
    },
    legend: {
      itemMargin: {
        horizontal: 15,
        vertical: 10,
      },
      position: 'bottom',
    },
    responsive: [],
  }

  return (
    <div className="w-full">
      {productCharts && (
        <>
          <h2 className="font-ruluko font-semibold text-xl sm:text-2xl">
            Vendas por mês
          </h2>
          <Chart
            type="area"
            height={500}
            options={options}
            series={productCharts}
          />
        </>
      )}
    </div>
  )
}

export default ProductCharts
