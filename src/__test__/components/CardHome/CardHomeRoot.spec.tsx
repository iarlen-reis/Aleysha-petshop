import CardHomeRoot from '@/components/app/Home/CardHome/CardHomeRoot'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('CardHomeRoot', () => {
  beforeEach(() => {
    render(
      <CardHomeRoot children={<div />} />
    )
  })

  it('should render CardHomeRoot', () => {
    expect(CardHomeRoot).toBeTruthy()
  })

  it('should have a section tag', () => {
    const section = screen.getByTestId('card-home-root')

    expect(section).toBeInTheDocument()
  })
})