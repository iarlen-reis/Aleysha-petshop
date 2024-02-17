import { useSession } from 'next-auth/react'
import React from 'react'

interface HeaderNeedAuthProps {
  children: React.ReactNode
}
const HeaderNeedAuth = ({children}: HeaderNeedAuthProps) => {
  const {data: session} = useSession()

  return (
    <>
    {session?.user && <>{children}</>}
    </>
  )
}

export default HeaderNeedAuth