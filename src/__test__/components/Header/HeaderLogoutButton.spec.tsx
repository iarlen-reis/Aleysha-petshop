import HeaderLogoutButton from '@/components/Header/HeaderLogoutButton'
import { fireEvent, render, screen } from '@testing-library/react'
import { signOut } from 'next-auth/react'
import '@testing-library/jest-dom'

jest.mock('next-auth/react', () => ({
  signOut: jest.fn()
}))

describe('HeaderLogoutButton', () => {
  beforeEach(() => {
    render(<HeaderLogoutButton />)
  })

  it('should render HeaderLogoutButton', () => {
    expect(HeaderLogoutButton).toBeTruthy()
  })

  it('should called signOut on click button', () => {
    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(signOut).toHaveBeenCalledTimes(1)
  })
})