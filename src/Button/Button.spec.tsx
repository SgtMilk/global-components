// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { render } from "@testing-library/react";
import { Button } from "./Button";

test("renders Button component", () => {
  const button = render(<Button onClick={() => {}} />);
  expect(button).toBeTruthy();
});
