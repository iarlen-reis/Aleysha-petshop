import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { headers } from 'next/headers'
import { EditIcon } from 'lucide-react'
import { useUser } from '@/hooks/useUser'
import PageNavigation from '@/components/PageNavigation'
import ButtonDeletePet from '@/components/app/Pets/ButtonDeletePet'

export const dynamic = 'force-dynamic'

interface ParamProps {
  params: {
    id: string
  }
}

interface PetDetailProps {
  id: string
  name: string
  image: string
  race: string
  gender: string
  age: number
  observations: string
}

const PetDetailPage = async ({ params }: ParamProps) => {
  const { session } = await useUser()

  if (!session) {
    return null
  }

  const response = await fetch(`http://localhost:3000/api/pets/${params.id}`, {
    headers: headers(),
  })

  const pet: PetDetailProps = await response.json()

  return (
    <div className="min-h-screen flex flex-col gap-6">
      <div className="relative flex flex-col gap-4 max-w-[500px] w-full mx-auto">
        <div>
          <PageNavigation
            title={pet.name}
            backText="Meus pets"
            backLink="/pets"
          />
        </div>
        <Image
          src={pet.image}
          alt={pet.name}
          width={500}
          height={500}
          className="w-[200px] h-[200px] mx-auto rounded-[50%] object-cover mt-4"
        />
        <h1 className="text-center font-ruluko font-semibold text-3xl">
          {pet.name}
        </h1>
        <div className="flex flex-col gap-4">
          <ul className="grid grid-cols-2 gap-2 text-center font-ruluko text-lg">
            <li>
              <span className="font-semibold">Raça:</span> {pet.race}
            </li>
            <li>
              <span className="font-semibold">Genero:</span>{' '}
              {pet.gender === 'M' ? 'Macho' : 'Fêmea'}
            </li>
            <li>
              <span className="font-semibold">Idade:</span>{' '}
              {pet.age > 1 ? `${pet.age} anos` : `${pet.age} ano`}
            </li>
          </ul>
          <div className="text-center flex flex-col gap-1 font-ruluko">
            <span className="font-semibold">Observações:</span>
            <p>{pet.observations}</p>
          </div>
        </div>
        <div className="absolute top-2 right-2 flex items-center gap-4">
          <Link href={`/pets/editar/${pet.id}`}>
            <EditIcon className="cursor-pointer" />
          </Link>
          <ButtonDeletePet id={pet.id} />
        </div>
      </div>
    </div>
  )
}

export default PetDetailPage
