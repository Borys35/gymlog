import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("button tests", () => {
  let textContent = "Text Content";

  it("should render primary button", () => {
    render(<Button>{textContent}</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(textContent);
    expect(button).toHaveClass("primary");
    expect(button).toBeEnabled();
  });

  it("should render secondary button", () => {
    render(<Button variant="secondary">{textContent}</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(textContent);
    expect(button).toHaveClass("secondary");
    expect(button).toBeEnabled();
  });

  it("should render outline button", () => {
    render(<Button variant="outline">{textContent}</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(textContent);
    expect(button).toHaveClass("outline");
    expect(button).toBeEnabled();
  });

  it("should be disabled", () => {
    render(<Button disabled>{textContent}</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(textContent);
    expect(button).toBeDisabled();
  });

  it("should render button as a Link", () => {
    render(<Button to="/">{textContent}</Button>);

    const button = screen.getByRole("link");
    expect(button).toHaveTextContent(textContent);
    expect(button).toBeEnabled();
    expect(button).toHaveClass("primary");
  });

  it("should render button as a anchor", () => {
    render(
      <Button href="/" toNewTab>
        {textContent}
      </Button>
    );

    const button = screen.getByRole("link");
    expect(button).toHaveTextContent(textContent);
    expect(button).toHaveAttribute("href", "/");
    expect(button).toHaveAttribute("target", "_blank");
    expect(button).toHaveClass("primary");
    expect(button).toBeEnabled();
  });
});
