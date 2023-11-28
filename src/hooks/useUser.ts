import { authOptions } from '@/utils/authOptions'
import { Session, getServerSession } from 'next-auth'

interface UseUserProps {
  session: Session | null
}

export const useUser = async (): Promise<UseUserProps> => {
  const session = (await getServerSession(authOptions)) || null

  return {
    session,
  }
}
