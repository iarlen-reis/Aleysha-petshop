import CardHomeButton from "@/components/app/Home/CardHome/CardHomeButton";
import { render, screen } from '@testing-library/react'
import { PawPrintIcon } from "lucide-react";
import '@testing-library/jest-dom'


describe('CardHomeButton', () => {
  beforeEach(() => {
    render(
    <CardHomeButton 
      text="criar uma conta" 
      link="/register" 
      icon={PawPrintIcon}
      />
    )
  })

  it('should render CardHomeButton', () => {
    expect(CardHomeButton).toBeTruthy()
  })

  it('should have a link with href to "/register"', () => {
    const link = screen.getByRole('link')
    
    expect(link).toHaveAttribute('href', '/register')
  })

  it('should have text "criar uma conta"', () => {
    const text = screen.getByText('criar uma conta')
    
    expect(text).toBeInTheDocument()
  })

  it('should have icon "PawPrintIcon"', () => {
    const icon = screen.getByTestId('icon')
    
    expect(icon).toBeInTheDocument()
    expect(icon.tagName).toBe('svg')
    expect(icon.classList.contains('lucide-paw-print')).toBeTruthy(); 
  })
})