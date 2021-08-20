import { render, screen } from "@testing-library/react";
import { NumberInstance } from "./NumberInstance";

test("renders NumberInstance component", () => {
  const numberInstance = render(<NumberInstance value={5} />);
  expect(numberInstance).toBeTruthy();
});

test("renders max number + 1", () => {
  const numberInstance = render(
    <NumberInstance value={Number.MAX_VALUE + 1} />
  );
  expect(numberInstance).toBeTruthy();
  expect(screen.getAllByTestId("NumberDisplay")).toHaveLength(1);
});
