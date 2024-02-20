import PageNavigation from "@/components/PageNavigation";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("PageNavigation", () => {
  beforeEach(() => {
    render(
      <PageNavigation
        backLink="/"
        backText="Voltar"
        title="Pets"
      />
    )
  })

  it('should render PageNavigation', () => {
    expect(PageNavigation).toBeTruthy()
  })

  it('should have a link with href to (/) and a text (Voltar)', () => {
    const link = screen.getByTestId('back-link')

    expect(link).toHaveAttribute('href', '/')
    expect(link).toHaveTextContent('Voltar')
  })

  it('should have a text with value (Pets)', () => {
    const text = screen.getByText('Pets')

    expect(text).toBeInTheDocument()
  })
})