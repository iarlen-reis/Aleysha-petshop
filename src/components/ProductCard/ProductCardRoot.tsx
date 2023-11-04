import React, { ReactNode } from 'react'

interface ProductCardRootProps {
  children: ReactNode
}

const ProductCardRoot = ({ children }: ProductCardRootProps) => {
  return (
    <article className="flex flex-col gap-4 w-[260px] h-[440px] p-4 mx-auto rounded-lg shadow-xl lg:mx-0">
      {children}
    </article>
  )
}

export default ProductCardRoot
