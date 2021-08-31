// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { useState } from "react";
import { StringInput } from "./StringInput";

export default {
  title: "Base Input Types/StringInput",
  component: StringInput,
};

export const Default = () => {
  const [value, updateValue] = useState("");
  return (
    <StringInput
      style={{ width: "40vw" }}
      size={1}
      value={value}
      updateValue={updateValue}
    />
  );
};
