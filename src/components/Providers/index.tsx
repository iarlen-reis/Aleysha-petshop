import React from 'react'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <main className="p-2 container mx-auto mt-20">
      <Theme>{children}</Theme>
    </main>
  )
}

export default Providers
