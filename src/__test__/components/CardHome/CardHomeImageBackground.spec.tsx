import CardHomeImageBackground from "@/components/app/Home/CardHome/CardHomeImageBackground";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('CardHomeImageBackground', () => {
  beforeEach(() => {
    render(
      <CardHomeImageBackground
        adicionalStyles="right-0 w-[100%] rounded-r-3xl bg-gradient-to-l from-rose-700 via-rose-400 to-background"
      />
    )
  })

  it('should render CardHomeImageBackground', () => {
    expect(CardHomeImageBackground).toBeTruthy()
  })
})