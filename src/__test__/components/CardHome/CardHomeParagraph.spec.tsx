import CardHomeParagraph from "@/components/app/Home/CardHome/CardHomeParagraph";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('CardHomeParagraph', () => {
  beforeEach(() => {
    render(
    <CardHomeParagraph 
      text="Onde amor e cuidado se encontram" 
      />
    )
  })

  it('should render CardHomeParagraph', () => {
    expect(CardHomeParagraph).toBeTruthy()
  })

  it('should have text "Onde amor e cuidado se encontram"', () => {
    const text = screen.getByText
    ("Onde amor e cuidado se encontram")
    
    expect(text).toBeTruthy()
  })
})