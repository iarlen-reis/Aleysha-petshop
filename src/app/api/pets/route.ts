import { z } from 'zod'
import prisma from '@/utils/prisma'
import { v4 as uuidv4 } from 'uuid'
import { useUser } from '@/hooks/useUser'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { uploadImageToCloudinary } from '@/services/cloudinaryUpload'

export async function GET(request: NextRequest) {
  try {
    const { session } = await useUser()

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const path = request.nextUrl.searchParams.get('path') || '/'

    const page = Number(request.nextUrl.searchParams.get('page')) || 1

    const totalPets = await prisma.pet.count({
      where: {
        userId: session.user.id,
      },
    })

    const maxPage = Math.ceil(totalPets / 6)
    const existNextPage = page < maxPage
    const existPreviousPage = page > 1

    const pets = await prisma.pet.findMany({
      where: {
        userId: session?.user.id,
      },
      take: 6,
      skip: (page - 1) * 6,
    })

    revalidatePath(path)

    return NextResponse.json(
      { pets, page, maxPage, existNextPage, existPreviousPage },
      { status: 200 },
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: error }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { session } = await useUser()

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.formData()

    const petSchema = z.object({
      image: z.any(),
      name: z.string(),
      age: z.number(),
      race: z.string(),
      gender: z.string(),
      observations: z.string(),
    })

    const { image, name, age, race, gender, observations } = petSchema.parse({
      image: data.get('image') as unknown as Blob,
      name: data.get('name') as string,
      age: Number(data.get('age')),
      race: data.get('race') as string,
      gender: data.get('gender') as string,
      observations: data.get('observations') as string,
    })

    const petImageUrl = await uploadImageToCloudinary(
      image,
      uuidv4(),
      'petshop/pets',
    )

    const petCreated = await prisma.pet.create({
      data: {
        userId: session.user.id,
        image: petImageUrl,
        name,
        age,
        race,
        gender,
        observations,
      },
    })

    return NextResponse.json(petCreated, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ status: 500 })
  }
}
