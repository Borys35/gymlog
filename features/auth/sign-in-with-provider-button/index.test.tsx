import { render, screen } from "@testing-library/react";
import SignInWithProviderButton from ".";

describe("sign-in-with-provider-button tests", () => {
  let button: HTMLElement;

  beforeEach(() => {
    render(<SignInWithProviderButton name="Google" provider="google" />);
    button = screen.getByRole("button");
  });

  it("should render", () => {
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("primary");
  });
});
