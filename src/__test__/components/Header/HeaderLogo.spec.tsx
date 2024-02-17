import HeaderLogo from '@/components/Header/HeaderLogo'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import LogoImage from '/public/images/logo.png'

describe('HeaderLogo', () => {
  beforeEach(() => {
    render(
      <HeaderLogo logoImage={LogoImage} alt="Logo" />
    )
  })

  it('should render HeaderLogo', () => {
    expect(HeaderLogo).toBeTruthy()
  })

  it('should render a img tag', () => {
    const img = screen.getByRole('img')

    expect(img).toBeInTheDocument()
  })

  it('should have a href to (/) on the logo', () => {
    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('href', '/')
  })

  it('should have a alt with value (Logo)', () => {
    const img = screen.getByRole('img')

    expect(img).toHaveAttribute('alt', 'Logo')
  })
})