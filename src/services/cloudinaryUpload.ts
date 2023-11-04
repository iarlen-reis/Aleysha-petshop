import { v2 as cloudinary } from 'cloudinary'

export interface IUploadClaudinary {
  url: string
}

export const uploadImageToCloudinary = async (
  imageBase64: string,
  name: string,
  folder: string,
) => {
  try {
    const result = await cloudinary.uploader.upload(imageBase64, {
      public_id: name,
      folder,
    })

    return result.url
  } catch (error) {
    console.error('Erro ao enviar a imagem para o Cloudinary:', error)
    throw error
  }
}
