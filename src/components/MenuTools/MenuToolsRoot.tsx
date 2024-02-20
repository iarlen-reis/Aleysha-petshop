import React from 'react'

interface MenuToolsRootProps {
  children: React.ReactNode
}

const MenuToolsRoot = ({ children }: MenuToolsRootProps) => {
  return (
    <div
      data-testid="menu-tools-root"
      className="flex items-center justify-end">
      {children}
    </div>
  )
}

export default MenuToolsRoot