import MenuToolsRoot from "@/components/MenuTools/MenuToolsRoot";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("MenuToolsRoot", () => {
  beforeEach(() => {
    render(
      <MenuToolsRoot
        children={<div />}
      />
    )
  })

  it("should render MenuToolsRoot", () => {
    expect(MenuToolsRoot).toBeTruthy()
  })

  it('should render a div with data-testid with value (menu-tools-root)', () => {
    const div = screen.getByTestId('menu-tools-root')

    expect(div).toBeInTheDocument()
  })
})