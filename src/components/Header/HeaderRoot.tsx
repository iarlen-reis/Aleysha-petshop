import React from 'react'

interface HeaderRootProps {
  children: React.ReactNode
}

const HeaderRoot = ({children}: HeaderRootProps) => {
  return (
    <header className="w-full py-3 fixed top-0 left-0 bg-background z-10">
      <div className="container px-2 w-full flex flex-col md:flex-row md:items-center justify-between mx-auto">
        {children}
      </div>
    </header>
  )
}

export default HeaderRoot