// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { render, screen } from "@testing-library/react";
import { ArrayInstance } from "./ArrayInstance";

const value: Array<any> = [
  1,
  "string",
  [{ boolean: true, array: [new Date("11-11-2000"), undefined] }],
];

test("renders ArrayInstance component", () => {
  const arrayInstance = render(<ArrayInstance value={value} />);
  expect(arrayInstance).toBeTruthy();
});

test("renders empty ArrayInstance component", () => {
  const arrayInstance = render(<ArrayInstance value={[]} />);
  expect(arrayInstance).toBeTruthy();
  expect(screen.getAllByTestId("ArrayDisplay")).toHaveLength(1);
});

test("The right amount of components are displayed", () => {
  render(<ArrayInstance value={value} />);
  expect(screen.getAllByTestId("ArrayDisplay")).toHaveLength(3);
  expect(screen.getAllByTestId("BooleanDisplay")).toHaveLength(1);
  expect(screen.getAllByTestId("DateDisplay")).toHaveLength(1);
  expect(screen.getAllByTestId("NumberDisplay")).toHaveLength(1);
  expect(screen.getAllByTestId("ObjectDisplay")).toHaveLength(1);
  expect(screen.getAllByTestId("StringDisplay")).toHaveLength(1);
  expect(screen.getAllByTestId("DelegateError")).toHaveLength(1);
});
