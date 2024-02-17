import HeaderNavigationLi from '@/components/Header/HeaderNavigationLi'
import HeaderNeedAuth from '@/components/Header/HeaderNeedAuth'
import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import '@testing-library/jest-dom'

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => ({
    data: {
      user: {
        id: '1',
        name: 'John Doe',
        email: 'jSb6C@example.com'
      }
    }
  }))
}))

jest.mock('next/navigation', () => ({
  useSelectedLayoutSegment: jest.fn()
}))

describe('HeaderNeedAuth', () => {
  beforeEach(() => {
    render(
      <HeaderNeedAuth>
        <HeaderNavigationLi name="Meus pets" link="/pets" />
      </HeaderNeedAuth>
    )
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should render HeaderNeedAuth', () => {
    expect(HeaderNeedAuth).toBeTruthy()
  })

  it('should render HeaderNavigationLi', () => {
    expect(HeaderNavigationLi).toBeTruthy()
  })

  it('should have text (Meus pets)', () => {
    const text = screen.getByText("Meus pets")

    expect(text).toBeInTheDocument()
  })

  it('should have a link with href to (/pets)', () => {
    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('href', '/pets')
  })

  it('should called useSession on render', () => {
    expect(useSession).toHaveBeenCalledTimes(1)
  })
})