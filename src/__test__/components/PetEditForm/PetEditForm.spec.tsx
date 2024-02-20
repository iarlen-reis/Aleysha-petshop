import { act, fireEvent, render, screen } from "@testing-library/react";
import PetEditForm from "@/components/app/Pets/PetEditForm";
import { usePet } from "@/hooks/usePet"; 
import "@testing-library/jest-dom";

interface MockUsePetProps {
  updatePet: jest.Mock;
  deletePet: jest.Mock;
}

jest.mock("../../../hooks/usePet", () => ({
  usePet: jest.fn(() => ({
    updatePet: jest.fn(),
    deletePet: jest.fn(),
  }))
}));

const mockUsePet: MockUsePetProps = {
  updatePet: jest.fn(),
  deletePet: jest.fn(),
};

(usePet as jest.Mock).mockReturnValue(mockUsePet);
    
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => ({
    data: {
      user: {
        id: '1',
        name: 'John Doe',
        email: 'jSb6C@example.com'
      }
    }
  }))
}))

describe("PetEditForm", () => {
  beforeEach(() => {
    render(
      <PetEditForm
        id="1"
        age={1}
        gender="F"
        name="Marley"
        race="Vira-lata"
        image="https://github.com/iarlen-reis.png"
        observations="Um cachorro muito bonito"
      />
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render PetEditForm', () => {
    expect(PetEditForm).toBeTruthy()
  })

  it('should have a img tag with alt value (Imagem do pet Marley)', () => {
    const img = screen.getByRole('img')

    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('alt', 'Imagem do pet Marley')
  })

  it('should have a input tag for name pet with value (Marley)', () => {
    const input = screen.getByTestId('pet-name')

    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('Marley')
  })

  it('should have a input tag for age pet with value (1)', () => {
    const input = screen.getByTestId('pet-age')

    expect(input).toBeInTheDocument()
    expect(input).toHaveValue(1)
  })

  it('should have a input tag for race pet with value (Vira-lata)', () => {
    const input = screen.getByTestId('pet-race')

    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('Vira-lata')
  })

  it('should have a input tag for gender pet with value (F)', () => {
    const input = screen.getByTestId('pet-gender')

    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('F')
  })

  it('should have a textarea tag for observations pet with value (Um cachorro muito bonito)', () => {
    const textarea = screen.getByTestId('pet-observations')

    expect(textarea).toBeInTheDocument()
    expect(textarea).toHaveValue('Um cachorro muito bonito')
  })

  it('should have a button to delete pet', () => {
    const button = screen.getByTestId('delete-pet-button')

    expect(button).toBeInTheDocument()
  })

  it('should on click delete pet call deletePet with id (1)', () => {
    const button = screen.getByTestId('delete-pet-button')

    fireEvent.click(button)

    expect(mockUsePet.deletePet).toHaveBeenCalledWith("1")
  })

  it('should called updatePet on submit', async () => {
    const form = screen.getByTestId('edit-pet-form')

    await act(async () => {
      fireEvent.submit(form);
    })

    expect(mockUsePet.updatePet).toHaveBeenCalledTimes(1)
  })

  it('should called updatePet with correct values on submit', async () => {
    const form = screen.getByTestId('edit-pet-form')

    await act(async () => {
      fireEvent.submit(form);
    })

    expect(mockUsePet.updatePet).toHaveBeenCalledWith({
      age: 1,
      gender: 'F',
      id: '1',
      image: 'https://github.com/iarlen-reis.png',
      name: 'Marley',
      observations: 'Um cachorro muito bonito',
      race: 'Vira-lata',
    })
  })
})