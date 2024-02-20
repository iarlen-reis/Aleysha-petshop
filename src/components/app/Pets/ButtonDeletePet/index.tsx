'use client'
import React from 'react'
import { Trash2Icon } from 'lucide-react'
import { usePet } from '@/hooks/usePet'

interface ButtonDeletePetProps {
  id: string
}

const ButtonDeletePet = ({ id }: ButtonDeletePetProps) => {
  const { deletePet } = usePet()

  const handleDeletePet = () => {
    deletePet(id)
  }

  return (
    <button onClick={handleDeletePet} type="button" data-testid="delete-pet-button">
      <Trash2Icon className="cursor-pointer text-red-500" data-testid="icon" />
    </button>
  )
}

export default ButtonDeletePet
