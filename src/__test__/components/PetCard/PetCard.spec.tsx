import PetCard from "@/components/app/Pets/PetCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("PetCard", () => {
  beforeEach(() => {
    render(
      <PetCard
        id="1"
        name="Aleysha"
        age={1}
        gender="F"
        image="https://github.com/iarlen-reis.png"
      />
    )
  })

  it('should render PetCard', () => {
    expect(PetCard).toBeTruthy()
  })

  it('should have a image with alt (Aleysha)', () => {
    const image = screen.getByRole('img')

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute(
      'alt',
      'Aleysha'
    )
  })

  it('should have a text with value (Aleysha)', () => {
    const text = screen.getByText('Aleysha')

    expect(text).toBeInTheDocument()
  })

  it('should have a text with value (1 ano - femea)', () => {
    const text = screen.getByText('1 ano - femea')

    expect(text).toBeInTheDocument()
  })

  it('should have a link with href to (/pets/1)', () => {
    const link = screen.getByTestId('search-pet-link')

    expect(link).toHaveAttribute(
      'href',
      '/pets/1'
    )
  })

  it ('should have a link with href to (/pets/editar/1)', () => {
    const link = screen.getByTestId('edit-pet-link')

    expect(link).toHaveAttribute(
      'href',
      '/pets/editar/1'
    )
  })
})

