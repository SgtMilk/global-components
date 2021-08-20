import React from "react";
import { render, screen } from "@testing-library/react";
import { Delegate } from "./Delegate";

test("Array delegate", () => {
  const delegate = render(<Delegate value={[]} />);
  expect(delegate).toBeTruthy();
  expect(screen.getAllByTestId("ArrayDisplay")).toHaveLength(1);
});

test("Boolean delegate", () => {
  const delegate = render(<Delegate value={true} />);
  expect(delegate).toBeTruthy();
  expect(screen.getAllByTestId("BooleanDisplay")).toHaveLength(1);
});

test("weird Boolean delegate", () => {
  const delegate = render(<Delegate value={!!""} />);
  expect(delegate).toBeTruthy();
  expect(screen.getAllByTestId("BooleanDisplay")).toHaveLength(1);
});

test("Date delegate", () => {
  const delegate = render(<Delegate value={new Date("11-11-2000")} />);
  expect(delegate).toBeTruthy();
  expect(screen.getAllByTestId("DateDisplay")).toHaveLength(1);
});

test("Number delegate", () => {
  const delegate = render(<Delegate value={5} />);
  expect(delegate).toBeTruthy();
  expect(screen.getAllByTestId("NumberDisplay")).toHaveLength(1);
});

test("max + 1 Number delegate", () => {
  const delegate = render(<Delegate value={Number.MAX_VALUE + 1} />);
  expect(delegate).toBeTruthy();
  expect(screen.getAllByTestId("NumberDisplay")).toHaveLength(1);
});

test("Object delegate", () => {
  const delegate = render(<Delegate value={{}} />);
  expect(delegate).toBeTruthy();
  expect(screen.getAllByTestId("ObjectDisplay")).toHaveLength(1);
});

test("String delegate", () => {
  const delegate = render(<Delegate value={""} />);
  expect(delegate).toBeTruthy();
  expect(screen.getAllByTestId("StringDisplay")).toHaveLength(1);
});
