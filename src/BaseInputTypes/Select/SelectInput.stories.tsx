// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { useState } from "react";
import { SelectInput } from "./SelectInput";

export default {
  title: "Base Input Types/SelectInput",
  component: SelectInput,
};

export const Default = () => {
  const [value, updateValue] = useState<string>("");
  return (
    <SelectInput
      name={"beep"}
      choices={["a", "b", "c"]}
      placeholder={" Choose: "}
      style={{ width: "auto" }}
      size={1}
      value={value}
      updateValue={updateValue}
    />
  );
};
