import CardHomeTitle from '@/components/app/Home/CardHome/CardHomeTitle'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('CardHomeTitle', () => {
  beforeEach(() => {
    render(
      <CardHomeTitle
        text="Aleysha Petshop"
      />
    )
  })

  it('should have a h1 tag', () => {
    const h1 = screen.getByRole('heading')

    expect(h1).toBeInTheDocument()
  })

  it('should render a h1 with text (Aleysha Petshop)', () => {
    const text = screen.getByText('Aleysha Petshop')

    expect(text).toBeInTheDocument()
  })
})
