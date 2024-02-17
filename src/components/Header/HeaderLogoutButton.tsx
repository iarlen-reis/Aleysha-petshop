'use client'
import { LogOutIcon } from 'lucide-react'
import { signOut } from 'next-auth/react'
import React from 'react'

const HeaderLogoutButton = () => {
  const handleLogout = () => {
    signOut()
  }
  return (
    <button
      onClick={handleLogout}
      className="bg-transparent border-none cursor-pointer ml-4"
    >
      <LogOutIcon
        size={25}
        strokeWidth={2}
        className="hover:text-background-rose hover:opacity-80 transition-all duration-200"
      />
    </button>
  )
}

export default HeaderLogoutButton