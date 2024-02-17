import HeaderMenuMobile from '@/components/Header/HeaderMenuMobile'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

const handleMenuMobileMock = jest.fn();

describe('HeaderMenuMobile', () => {
  beforeEach(() => {
    render(
      <HeaderMenuMobile isOpen={false} handleMenuMobile={handleMenuMobileMock} />
    )
  })

  it('should render HeaderMenuMobile', () => {
    expect(HeaderMenuMobile).toBeTruthy()
  })

  it('should called handleMenuMobile on click button', () => {
    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(handleMenuMobileMock).toHaveBeenCalledTimes(1)
  })
})