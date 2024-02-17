import React from 'react'

interface HeaderNavigationIconContainerProps {
  children : React.ReactNode
}

const HeaderNavigationIconContainer = ({children}: HeaderNavigationIconContainerProps) => {
  return (
    <div className="w-fit flex items-center gap-4 mx-auto">
      {children}
    </div>
  )
}

export default HeaderNavigationIconContainer