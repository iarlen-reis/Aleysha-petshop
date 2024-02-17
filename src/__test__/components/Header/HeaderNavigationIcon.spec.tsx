import HeaderNavigationIcon from '@/components/Header/HeaderNavigationIcon'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ClipboardListIcon, ShoppingCartIcon } from 'lucide-react'

describe('HeaderNavigationIcon with marker', () => {
  beforeEach(() => {
    render(
      <HeaderNavigationIcon Icon={ShoppingCartIcon} link="/carrinho" marker={2} />
    )
  })

  it('should render HeaderNavigationIcon', () => {
    expect(HeaderNavigationIcon).toBeTruthy()
  })

  it('should render a icon', () => {
    const icon = screen.getByTestId('icon')

    expect(icon).toBeInTheDocument()
  })

  it('should have a href to (/carrinho)', () => {
    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('href', '/carrinho')
  })

  it('should have a marker', () => {
    const marker = screen.getByTestId('marker')

    expect(marker).toBeInTheDocument()
  })
})

describe('HeaderNavigationIcon without marker', () => {
  beforeEach(() => {
    render(
      <HeaderNavigationIcon Icon={ClipboardListIcon} link="/pedidos" />
    )
  })

  it('should render HeaderNavigationIcon', () => {
    expect(HeaderNavigationIcon).toBeTruthy()
  })

  it('should render a icon', () => {
    const icon = screen.getByTestId('icon')
  })

  it('should have a href to (/pedidos)', () => {
    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('href', '/pedidos')
  })

  it('should not have a marker', () => {
    const marker = screen.queryByTestId('marker')

    expect(marker).not.toBeInTheDocument()
  })
})