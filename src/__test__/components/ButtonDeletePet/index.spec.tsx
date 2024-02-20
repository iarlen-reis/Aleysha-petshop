import ButtonDeletePet from "@/components/app/Pets/ButtonDeletePet";
import { fireEvent, render, screen } from "@testing-library/react";
import { usePet } from "@/hooks/usePet";
import "@testing-library/jest-dom";

jest.mock('../../../hooks/usePet', () => ({
  usePet: jest.fn().mockReturnValue({
    deletePet: jest.fn()
  })
}))

const usePetMock = usePet as jest.MockedFunction<typeof usePet>;

usePetMock.mockReturnValue({
  deletePet: jest.fn(),
  ...jest.requireActual('../../../hooks/usePet').usePet
})

describe("ButtonDeletePet", () => {
  beforeEach(() => {
    render(
      <ButtonDeletePet
        id="1"
      />
    )
  })

  it('should render ButtonDeletePet', () => {
    expect(ButtonDeletePet).toBeTruthy()
  })

  it('should have a icon with class (lucide-trash2)', () => {
    const icon = screen.getByTestId('icon')

    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('lucide-trash2')
  })

  it('should called deletePet with id (1) on click button', () => {
    const button = screen.getByTestId('delete-pet-button')

    fireEvent.click(button)

    expect(usePetMock().deletePet).toHaveBeenCalledWith('1')
  })
})