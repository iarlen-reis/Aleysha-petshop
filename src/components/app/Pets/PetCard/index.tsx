import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { EditIcon, SearchIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'

interface PetCardProps {
  id: string
  name: string
  age: number
  image: string
  gender: string
}

const PetCard = ({ id, name, age, gender, image }: PetCardProps) => {
  return (
    <Card className="max-w-[300px] w-full mx-auto">
    <CardContent className='w-full'>
      <Image src={image} alt={name} width={350} height={300} className='w-full h-[300px] object-cover' />
    </CardContent>
    <CardHeader>
      <CardTitle>{name}</CardTitle>
      <CardDescription>
        {age > 1 ? `${age} anos` : `${age} ano`} - {gender === 'M' ? 'macho' : 'femea'}
      </CardDescription>
    </CardHeader>
    <CardFooter className='flex justify-between'>
      <Button asChild>
        <Link 
        data-testid="edit-pet-link"
        href={`/pets/editar/${id}`}>
          <EditIcon size={25} strokeWidth={2} />
        </Link>
      </Button>
      <Button variant='destructive' asChild>
        <Link 
        data-testid="search-pet-link"
        href={`/pets/${id}`}>
          <SearchIcon size={25} strokeWidth={2} />
        </Link>
      </Button>
    </CardFooter>
  </Card>
  )
}

export default PetCard
