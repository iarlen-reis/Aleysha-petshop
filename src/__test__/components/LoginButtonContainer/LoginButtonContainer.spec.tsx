import LoginButtonContainer from "@/components/app/Login/LoginButtonContainer";
import { render, screen, fireEvent } from "@testing-library/react";
import { signIn } from "next-auth/react";
import "@testing-library/jest-dom";

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

describe("LoginButtonContainer", () => {
  beforeEach(() => {
    render(<LoginButtonContainer />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render LoginButtonContainer", () => {
    expect(LoginButtonContainer).toBeTruthy();
  });

  it("should have a text with test-id (login-with-github)", () => {
    const button = screen.getByTestId("login-with-github");

    expect(button).toBeInTheDocument();
  });

  it("should have a text with test-id (login-with-google)", () => {
    const button = screen.getByTestId("login-with-google");

    expect(button).toBeInTheDocument();
  });

  it("should have a text that container the text (Faça login com o GitHub)", () => {
    const text = screen.getByText("Faça login com o GitHub");

    expect(text).toBeInTheDocument();
  });

  it("should have a text that container the text (Faça login com o Google)", () => {
    const text = screen.getByText("Faça login com o Google");

    expect(text).toBeInTheDocument();
  });

  it("should called signIn on click button (login-with-github)", () => {
    const button = screen.getByTestId("login-with-github");

    fireEvent.click(button);
    expect(signIn).toHaveBeenCalledTimes(1);
  });

  it("should called signIn on click button (login-with-google)", () => {
    const button = screen.getByTestId("login-with-google");

    fireEvent.click(button);
    expect(signIn).toHaveBeenCalledTimes(1);
  });
});
