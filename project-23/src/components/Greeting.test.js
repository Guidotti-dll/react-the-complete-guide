import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    //Arrenge
    render(<Greeting />);

    //Act
    // ... nothing
    //Assert
    const helloWorldElement = screen.getByText("Hello world!");
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("renders 'good see you' if th button was NOT clicked", () => {
    render(<Greeting />);
    const paragraphElement = screen.getByText("It's good see you!", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });
  test("renders 'changed!' if th button was clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const paragraphElement = screen.getByText("changed!");
    expect(paragraphElement).toBeInTheDocument();
  });
  test("does not renders 'good see you' if th button was clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const paragraphElement = screen.queryByText("It's good see you!", {
      exact: false,
    });
    expect(paragraphElement).toBeNull();
  });
});
