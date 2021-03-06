// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { useState } from "react";
import { DateInput } from "./DateInput";

export default {
  title: "Base Input Types/DateInput",
  component: DateInput,
};

export const Default = () => {
  const [value, updateValue] = useState(new Date(0));
  return (
    <DateInput
      name={"beep"}
      style={{ width: "40vw" }}
      size={1}
      value={value}
      updateValue={updateValue}
    />
  );
};
