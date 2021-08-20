import { render, screen } from "@testing-library/react";
import { BooleanInstance } from "./BooleanInstance";

test("renders BooleanInstance component", () => {
  const booleanInstance = render(<BooleanInstance value={true} />);
  expect(booleanInstance).toBeTruthy();
});

test("renders BooleanInstance with weird value", () => {
  const booleanInstance = render(<BooleanInstance value={!!""} />);
  expect(booleanInstance).toBeTruthy();
  expect(screen.getAllByTestId("BooleanDisplay")).toHaveLength(1);
});
