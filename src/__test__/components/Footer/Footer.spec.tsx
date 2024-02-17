import Footer from '@/components/Footer'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('should render Footer', () => {
    expect(Footer).toBeTruthy()
  })

  it('should have a text with value (Github)', () => {
    const text = screen.getByText('Github')

    expect(text).toBeInTheDocument()
  })

  it('should a link to (https://github.com/iarlen-reis/Aleysha-petshop)', () => {
    const link = screen.getByRole('link', {
      name: 'Github'
    })

    expect(link).toHaveAttribute(
      'href', 
      'https://github.com/iarlen-reis/Aleysha-petshop'
    )
  })

  it('should have a text with value (Figma)', () => {
    const text = screen.getByText('Figma')

    expect(text).toBeInTheDocument()
  })

  it('should a link to (https://www.figma.com/file/UTOl8oetak4Z1FdCEqC7ji/aleysha---PetShop?type=design&node-id=0%3A1&mode=design&t=G5daU6W3gzDyqqYu-1)', () => {
    const link = screen.getByRole('link', {
      name: 'Figma'
    })

    expect(link).toHaveAttribute(
      'href', 
      'https://www.figma.com/file/UTOl8oetak4Z1FdCEqC7ji/aleysha---PetShop?type=design&node-id=0%3A1&mode=design&t=G5daU6W3gzDyqqYu-1'
    )
  })

  it('should have a text with value (2023 Aleysha Petshop)', () => {
    const text = screen.getByText('2023 Aleysha Petshop')

    expect(text).toBeInTheDocument()
  })

  it('should have a copyright icon', () => {
    const icon = screen.getByTestId('icon')

    expect(icon).toBeInTheDocument()
  })
})