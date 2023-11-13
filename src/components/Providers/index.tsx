'use client'
import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { SessionProvider } from 'next-auth/react'
import { CartProvider } from '@/context/CartContext'
import { QueryClient, QueryClientProvider } from 'react-query'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  const queryClient = new QueryClient()
  return (
    <main className="p-2 container mx-auto mt-20">
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            {children}
            <ToastContainer />
          </CartProvider>
        </QueryClientProvider>
      </SessionProvider>
    </main>
  )
}

export default Providers
