import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
test("renders Hello World as a text", () => {
  //Arrenge
  render(<Greeting />);

  //Act
  // ... nothing
  //Assert
  const helloWorldElement = screen.getByText("Hello world!");
  expect(helloWorldElement).toBeInTheDocument();
});
