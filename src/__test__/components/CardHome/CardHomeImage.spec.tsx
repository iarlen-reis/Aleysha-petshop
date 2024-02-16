import CardHomeImage from '@/components/app/Home/CardHome/CardHomeImage'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import HomeImage from '/public/images/home/man-dog.png'
import CardHomeImageBackground from '@/components/app/Home/CardHome/CardHomeImageBackground'

describe('CardHomeImage', () => {
  beforeEach(() => {
    render(
      <CardHomeImage
        src={HomeImage}
        alt="Um homem segurando um cachorro"
      >
        <CardHomeImageBackground
          adicionalStyles="right-0 w-[100%] rounded-r-3xl bg-gradient-to-l from-rose-700 via-rose-400 to-background"
        />
      </CardHomeImage>
    )
  })

  it('should render CardHomeImage', () => {
    expect(CardHomeImage).toBeTruthy()
  })

  it('should have a tag img with atribute alt with value (Um homem segurando um cachorro)', () => {
    const img = screen.getByRole('img')

    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('alt', 'Um homem segurando um cachorro')
  })
})