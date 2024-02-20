'use client'
import Image from 'next/image'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

interface DropzoneProps {
  setFile: React.Dispatch<React.SetStateAction<string>>
  file: string | null
  loading?: boolean
}
const Dropzone = ({ setFile, file, loading }: DropzoneProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]
      const reader = new FileReader()

      reader.readAsDataURL(file)

      reader.onload = () => {
        setFile(reader.result as unknown as string)
      }
    },
    [setFile],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleRemoveImage = () => {
    setFile('')
  }

  return (
    <div>
      {file && (
        <div className="relative">
          <Image
            src={file}
            alt="Imagem do produto"
            width={300}
            height={300}
            className="w-[200px] h-[200px] mx-auto rounded-[50%] object-fill"
          />
          {!loading && (
            <button
              className="absolute top-0 right-0 z-10 text-xl transition-all duration-200 hover:text-red-500"
              onClick={handleRemoveImage}
            >
              X
            </button>
          )}
        </div>
      )}
      {!file && (
        <div
          {...getRootProps()}
          className="w-full text-center bg-background-input rounded-md border border-black/20 p-3"
        >
          <input {...getInputProps()} accept="image/*" data-testid="dropzone-input" />
          {isDragActive ? (
            <p>a</p>
          ) : (
            <p className="text-lg font-ruluko text-center">
              Arraste e solte uma imagem ou <br /> clique para fazer o upload...
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default Dropzone
