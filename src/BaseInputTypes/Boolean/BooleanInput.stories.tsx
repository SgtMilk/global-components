// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { useState } from "react";
import { BooleanInput } from "./BooleanInput";

export default {
  title: "Base Input Types/BooleanInput",
  component: BooleanInput,
};

export const Default = () => {
  const [value, updateValue] = useState(false);
  return (
    <BooleanInput
      name={"beep"}
      style={{ width: "40vw" }}
      size={1}
      value={value}
      updateValue={updateValue}
    />
  );
};
