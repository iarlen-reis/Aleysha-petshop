import CardHomeTextContainer from "@/components/app/Home/CardHome/CardHomeTextContainer";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('CardHomeTextContainer', () => {
  beforeEach(() => {
    render(
      <CardHomeTextContainer
        children={<div />}
      />
    )
  })

  it('should render CardHomeTextContainer', () => {
    expect(CardHomeTextContainer).toBeTruthy()
  })

  it ('should have a div with data-testid with value (card-home-text-container)', () => {
    const div = screen.getByTestId('card-home-text-container')

    expect(div).toBeInTheDocument()
  })
})