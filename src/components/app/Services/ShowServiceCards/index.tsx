'use client'
import React from 'react'
import ServiceCard from '../ServiceCard'
import { useService } from '@/hooks/useService'

const ShowServiceCards = () => {
  const { services } = useService()
  return (
    <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:justify-between">
      {services &&
        services.map((service) => (
          <ServiceCard key={service.name} {...service} />
        ))}
    </div>
  )
}

export default ShowServiceCards
