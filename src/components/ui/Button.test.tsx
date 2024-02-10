import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "@/components/ui/Button";

describe("Button Props", () => {
  it("renders button labels", () => {
    render(<Button data-testid="message-container">Primary</Button>);
    expect(screen.getByTestId("message-container").textContent).toBe("Primary");
    screen.debug();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(
      <Button data-testid="message-container" onClick={handleClick}>
        Primary
      </Button>
    );
    const buttonElement = screen.getByTestId("message-container");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
    screen.debug();
  });
});
