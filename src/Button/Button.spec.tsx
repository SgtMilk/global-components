import { render } from "@testing-library/react";
import { Button } from "./Button";

test("renders Button component", () => {
  const button = render(<Button onClick={() => {}} />);
  expect(button).toBeTruthy();
});
