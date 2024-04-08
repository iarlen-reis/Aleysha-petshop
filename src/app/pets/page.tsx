'use client'
import React from 'react'
import { usePet } from '@/hooks/usePet'
import PetsPageLoading from './loading'
import {MenuTools} from '@/components/MenuTools'
import PetCard from '@/components/app/Pets/PetCard'
import { Pagination } from '@/components/Pagination'
import PageNavigation from '@/components/PageNavigation'
import NoPetsImage from "/public/images/pets/no-pets.png";
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'


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
        <MenuTools.Button href="/pets/adicionar" text='Cadastrar pet' />
      </MenuTools.Root>
      
      <div className='grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:justify-between'>
      {pets?.pets.map((pet) => (
        <PetCard key={pet.id} {...pet} />
      ))}
      </div>

      {!pets?.pets.length && (
        <div className="flex flex-col items-center gap-2">
          <Image
            width={300}
            height={300}
            alt="No pets"
            src={NoPetsImage}
          />
            <p className="text-2xl font-ruluko tracking-wider">Nenhum pet foi encontrado.</p>
        </div>
      )}

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
