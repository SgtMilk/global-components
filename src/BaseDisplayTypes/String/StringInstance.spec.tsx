import React from "react";
import { render, screen } from "@testing-library/react";
import { StringInstance } from "./StringInstance";

test("renders StringInstance component", () => {
  const stringInstance = render(<StringInstance value={"string"} />);
  expect(stringInstance).toBeTruthy();
});

test("test empty string", () => {
  const stringInstance = render(<StringInstance value={""} />);
  expect(stringInstance).toBeTruthy();
  expect(screen.getAllByTestId("StringDisplay")).toHaveLength(1);
});

test("test weird string", () => {
  const stringInstance = render(<StringInstance value={"\u00E9"} />);
  expect(stringInstance).toBeTruthy();
  expect(screen.getAllByTestId("StringDisplay")).toHaveLength(1);
});
