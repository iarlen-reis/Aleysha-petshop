import { act, createEvent, fireEvent, render, screen, waitFor } from "@testing-library/react";
import PetForm from "@/components/app/Pets/PetForm";
import { usePet } from "@/hooks/usePet";
import "@testing-library/jest-dom";

jest.mock("next-auth/react", () => ({
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

jest.mock('../../../hooks/usePet', () => ({
  usePet: jest.fn().mockReturnValue({
    createPet: jest.fn(),
    createPetLoading: false,
    ...jest.requireActual('../../../hooks/usePet').usePet
  })
}))

const usePetMock = usePet as jest.MockedFunction<typeof usePet>;

describe("PetForm", () => {
  beforeEach(() => {
    render(
      <PetForm />
    )
  })

  it('should render PetForm', () => {
    expect(PetForm).toBeTruthy()
  })

  it('should have a dropzone with role (presentation)', () => {
    const dropzone = screen.getByRole('presentation')

    expect(dropzone).toBeInTheDocument()
  })

  it('should have a text with value (Arraste e solte uma imagem ou clique para fazer o upload...) on dropzone', () => {
    const dropzone = screen.getByRole('presentation')

    expect(dropzone)
      .toHaveTextContent('Arraste e solte uma imagem ou clique para fazer o upload...')
  })

  it('should have a input with test-id (name) and have a label with value (Nome:)', () => {
    const input = screen.getByTestId('name')
    const label = screen.getByText('Nome:')

    expect(input).toBeInTheDocument()
    expect(label).toBeInTheDocument()
  })

  it('should have a input with test-id (age) and have a label with value (Idade:)', () => {
    const input = screen.getByTestId('age')
    const label = screen.getByText('Idade:')

    expect(input).toBeInTheDocument()
    expect(label).toBeInTheDocument()
  })

  it('should have a input with test-id (race) and have a label with value (Raça:)', () => {
    const input = screen.getByTestId('race')
    const label = screen.getByText('Raça:')

    expect(input).toBeInTheDocument()
    expect(label).toBeInTheDocument()
  })

  it('should have a input with test-id (gender) and have a label with value (Gênero:)', () => {
    const input = screen.getByTestId('gender')
    const label = screen.getByText('Gênero:')

    expect(input).toBeInTheDocument()
    expect(label).toBeInTheDocument()
  })

  it('should have a input with test-id (observations) and have a label with value (Observações:)', () => {
    const input = screen.getByTestId('observations')
    const label = screen.getByText('Observações:')

    expect(input).toBeInTheDocument()
    expect(label).toBeInTheDocument()
  })

  it('should have a button with test-id (create-pet-button) and text with value (Adicionar)', () => {
    const button = screen.getByTestId('create-pet-button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveValue('Adicionar')
  })
})

describe("should complete the form", () => {
  beforeEach(() => {
    render(
      <PetForm />
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should write (John Doe) on name field', () => {
    const nameField = screen.getByTestId('name')

    fireEvent.change(nameField, {
      target: {
        value: 'John Doe'
      }
    })

    expect(nameField).toHaveValue('John Doe')
  })

  it('should write (1) on age field', () => {
    const ageField = screen.getByTestId('age')

    fireEvent.change(ageField, {
      target: {
        value: '1'
      }
    })

    expect(ageField).toHaveValue(1)
  })

  it('should write (Vira-lata) on race field', () => {
    const raceField = screen.getByTestId('race')

    fireEvent.change(raceField, {
      target: {
        value: 'Vira-lata'
      }
    })

    expect(raceField).toHaveValue('Vira-lata')
  })

  it('should write (F) on gender field', () => {
    const genderField = screen.getByTestId('gender')

    fireEvent.change(genderField, {
      target: {
        value: 'F'
      }
    })

    expect(genderField).toHaveValue('F')
  })

  it('should write (Um cachorro muito bonito) on observations field', () => {
    const observationsField = screen.getByTestId('observations')

    fireEvent.change(observationsField, {
      target: {
        value: 'Um cachorro muito bonito'
      }
    })

    expect(observationsField).toHaveValue('Um cachorro muito bonito')
  })

  it('should write all fields and called createPet on submit', async () => {
    const dropzoneInput = screen.getByTestId('dropzone-input')
    const nameField = screen.getByTestId('name')
    const ageField = screen.getByTestId('age')
    const raceField = screen.getByTestId('race')
    const genderField = screen.getByTestId('gender')
    const observationsField = screen.getByTestId('observations')
    const button = screen.getByTestId('create-pet-button')

    fireEvent.change(nameField, { target: { value: 'John Doe' } })
    fireEvent.change(ageField, { target: { value: '1' } })
    fireEvent.change(raceField, { target: { value: 'Vira-lata' } })
    fireEvent.change(genderField, { target: { value: 'F' } })
    fireEvent.change(observationsField, { target: { value: 'Um cachorro muito bonito' } })

    const file = new File(['test'], 'chucknorris.png', { type: 'image/png' });

    Object.defineProperty(dropzoneInput, 'files', {
      value: [file],
    });

    fireEvent.drop(dropzoneInput);

    await act(async () => {
      fireEvent.click(button)
    })

    await act(async () => {
      fireEvent.click(button)
    })

    expect(usePetMock().createPet).toHaveBeenCalledTimes(1)

    expect(usePetMock().createPet).toHaveBeenCalledWith({
      userId: "1",
      name: 'John Doe',
      age: "1",
      race: 'Vira-lata',
      gender: 'F',
      observations: 'Um cachorro muito bonito',
      image: 'data:image/png;base64,dGVzdA=='
    })
  })
})