// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { useState } from "react";
import { NumberInput } from "./NumberInput";

export default {
  title: "Base Input Types/NumberInput",
  component: NumberInput,
};

export const Default = () => {
  const [value, updateValue] = useState(0);
  return (
    <NumberInput
      name={"beep"}
      style={{ width: "40vw" }}
      size={1}
      value={value}
      updateValue={updateValue}
    />
  );
};
