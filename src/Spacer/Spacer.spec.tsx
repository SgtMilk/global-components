// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { render } from "@testing-library/react";
import { Spacer } from "./Spacer";

test("renders Spacer component", () => {
  const spacer = render(<Spacer />);
  expect(spacer).toBeTruthy();
});
