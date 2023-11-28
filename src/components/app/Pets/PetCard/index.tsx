import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { EditIcon, SearchIcon } from 'lucide-react'

interface PetCardProps {
  id: string
  name: string
  age: number
  image: string
  gender: string
}

const PetCard = ({ id, name, age, gender, image }: PetCardProps) => {
  return (
    <li className="w-full flex items-center justify-between gap-3 p-2 rounded-lg bg-background-input">
      <div className="flex items-center gap-3">
        <Image
          src={image}
          alt={`Imagem do pet ${name}`}
          width={250}
          height={250}
          className="h-16 w-16 rounded-[50%] object-cover"
        />
        <div className="flex flex-col items-start">
          <span className="font-ruluko font-semibold text-xl capitalize">
            {name}
          </span>
          <div className="flex items-center gap-2 font-ruluko font-semibold capitalize">
            <span>{age > 1 ? `${age} anos` : `${age} ano`} -</span>
            <span>{gender === 'M' ? 'macho' : 'fêmea'}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href={`/pets/editar/${id}`}
          className="hover:opacity-80 transition-all duration-200"
        >
          <EditIcon size={25} strokeWidth={2} />
        </Link>
        <Link
          href={`/pets/${id}`}
          className="hover:opacity-80 transition-all duration-200"
        >
          <SearchIcon size={25} strokeWidth={2} />
        </Link>
      </div>
    </li>
  )
}

export default PetCard
