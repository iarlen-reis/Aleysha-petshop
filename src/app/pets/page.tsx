'use client'
import React from 'react'
import { usePet } from '@/hooks/usePet'
import PetsPageLoading from './loading'
import {MenuTools} from '@/components/MenuTools'
import PetCard from '@/components/app/Pets/PetCard'
import { Pagination } from '@/components/Pagination'
import PageNavigation from '@/components/PageNavigation'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

const PetsPage = () => {
  const {pets, petsLoading} = usePet()

  if(petsLoading) {
    return <PetsPageLoading />
  }

  return (
    <div className="min-h-screen flex flex-col gap-6 pb-12">
      <div className="mt-4">
        <PageNavigation
          title="Meus pets"
          backLink="/"
          backText="Página inicial"
        />
      </div>
      <MenuTools.Root>
        <MenuTools.Button href="/pets/adicionar" text='Adicionar pet' />
      </MenuTools.Root>
      
      <div className='grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:justify-between'>
      {pets?.pets.map((pet) => (
        <PetCard key={pet.id} {...pet} />
      ))}
      </div>

      <Pagination.Root>
        {pets && pets.existPreviousPage && (
          <Pagination.LinkContainer>
            <Pagination.Link url={`/pets?page=${pets.page - 1}`}>
              <Pagination.Icon icon={ChevronLeftIcon} />
            </Pagination.Link>
          </Pagination.LinkContainer>
        )}
        {pets && pets.maxPage > 1 && (
          <Pagination.Indicator page={pets.page} />
        )}
        {pets && pets.existNextPage && (
          <Pagination.LinkContainer>
            <Pagination.Link url={`/pets?page=${pets.page + 1}`}>
              <Pagination.Icon icon={ChevronRightIcon} />
            </Pagination.Link>
          </Pagination.LinkContainer>
        )}
      </Pagination.Root>
    </div>
  )
}

export default PetsPage
