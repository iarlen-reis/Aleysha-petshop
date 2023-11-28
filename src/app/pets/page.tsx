import React from 'react'
import { headers } from 'next/headers'
import MenuTools from '@/components/MenuTools'
import PetCard from '@/components/app/Pets/PetCard'
import { Pagination } from '@/components/Pagination'
import PageNavigation from '@/components/PageNavigation'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

interface Params {
  searchParams: {
    page: string
  }
}

interface PetProps {
  id: string
  name: string
  image: string
  age: number
  race: string
  gender: string
  observations: string
}

interface PetPageProps {
  pets: PetProps[]
  page: number
  maxPage: number
  existNextPage: boolean
  existPreviousPage: boolean
}

export const revalidate = 5

const PetsPage = async ({ searchParams }: Params) => {
  const response = await fetch(
    `http://localhost:3000/api/pets?page=${searchParams.page}`,
    {
      headers: headers(),
    },
  )

  const pets: PetPageProps = await response.json()
  return (
    <div className="min-h-screen flex flex-col gap-4 pb-12">
      <div className="mt-4">
        <PageNavigation
          title="Meus pets"
          backLink="/"
          backText="Página inicial"
        />
      </div>
      <MenuTools link="/pets/adicionar" text="Adicionar pet" />
      {pets.pets && pets.pets.map((pet) => <PetCard key={pet.id} {...pet} />)}
      <Pagination.Root>
        {pets && pets.existPreviousPage && (
          <Pagination.LinkContainer>
            <Pagination.Link url={`/pets?page=${pets.page - 1}`}>
              <Pagination.Icon icon={ChevronLeftIcon} />
            </Pagination.Link>
          </Pagination.LinkContainer>
        )}
        <Pagination.Indicator page={pets.page} />
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
