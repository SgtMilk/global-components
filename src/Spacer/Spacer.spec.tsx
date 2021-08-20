import React from "react";
import { render } from "@testing-library/react";
import { Spacer } from "./Spacer";

test("renders Spacer component", () => {
  const spacer = render(<Spacer />);
  expect(spacer).toBeTruthy();
});
