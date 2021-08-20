import { render, screen } from "@testing-library/react";
import { ObjectInstance } from "./ObjectInstance";

const value: { [key: string]: any } = {
  array: [],
  boolean: true,
  date: new Date("11-11-2000"),
  number: 3,
  nestedObject: { boolean: true },
  string: "string",
  error: undefined,
};

test("renders ObjectInstance component", () => {
  const objectInstance = render(<ObjectInstance value={value} />);
  expect(objectInstance).toBeTruthy();
});

test("renders empty ObjectInstance component", () => {
  const objectInstance = render(<ObjectInstance value={{}} />);
  expect(objectInstance).toBeTruthy();
  expect(screen.getAllByTestId("ObjectDisplay")).toHaveLength(1);
});

test("The right amount of components are displayed", () => {
  render(<ObjectInstance value={value} />);
  expect(screen.getAllByTestId("ArrayDisplay")).toHaveLength(1);
  expect(screen.getAllByTestId("BooleanDisplay")).toHaveLength(2);
  expect(screen.getAllByTestId("DateDisplay")).toHaveLength(1);
  expect(screen.getAllByTestId("NumberDisplay")).toHaveLength(1);
  expect(screen.getAllByTestId("ObjectDisplay")).toHaveLength(2);
  expect(screen.getAllByTestId("StringDisplay")).toHaveLength(1);
  expect(screen.getAllByTestId("DelegateError")).toHaveLength(1);
});
