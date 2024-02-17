import HeaderNavigationLi from "@/components/Header/HeaderNavigationLi";
import { useSelectedLayoutSegment } from "next/navigation";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


jest.mock("next/navigation", () => ({
  useSelectedLayoutSegment: jest.fn(),
}));

describe("HeaderNavigationLi", () => {
  beforeEach(() => {
    render(<HeaderNavigationLi name="Meus pets" link="/pets" />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it("should render HeaderNavigationLi", () => {
    expect(HeaderNavigationLi).toBeTruthy();
  });

  it("should have text (Meus pets)", () => {
    const text = screen.getByText("Meus pets");

    expect(text).toBeInTheDocument();
  })

  it("should have a link with href to (/pets)", () => {
    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/pets");
  })

  it('should called useSelectedLayoutSegment 1 time', () => {
    expect(useSelectedLayoutSegment).toHaveBeenCalledTimes(1);
  })
});
