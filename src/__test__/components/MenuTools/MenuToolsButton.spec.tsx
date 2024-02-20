import MenuToolsButton from "@/components/MenuTools/MenuToolsButton";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


describe("MenuToolsButton", () => {
  beforeEach(() => {
    render(
      <MenuToolsButton
        text="Adicionar pet"
        href="/add-pet"
      />
    )
  })

  it("should render MenuToolsButton", () => {
    expect(MenuToolsButton).toBeTruthy()
  })

  it('should render a text with value (Adicionar pet)', () => {
    const text = screen.getByText('Adicionar pet')

    expect(text).toBeInTheDocument()
  })

  it('should render a link with href to "/add-pet"', () => {
    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('href', '/add-pet')
  })
})
