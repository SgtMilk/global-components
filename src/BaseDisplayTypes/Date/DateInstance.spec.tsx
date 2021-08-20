import React from "react";
import { render, screen } from "@testing-library/react";
import { DateInstance } from "./DateInstance";

test("renders DateInstance component", () => {
  const dateInstance = render(<DateInstance value={new Date("11-11-2000")} />);
  expect(dateInstance).toBeTruthy();
});

test("renders current date", () => {
  const dateInstance = render(<DateInstance value={new Date(Date.now())} />);
  expect(screen.getAllByTestId("DateDisplay")).toHaveLength(1);
  expect(dateInstance).toBeTruthy();
});

test("renders invalid date", () => {
  const dateInstance = render(<DateInstance value={new Date("11-11-1000")} />);
  expect(screen.getAllByTestId("DateDisplay")).toHaveLength(1);
  expect(dateInstance).toBeTruthy();
});
