// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { useState } from "react";
import { FormInstance, TYPE } from "../FormInstance";

export const TestComponent = () => {
  let [value, updateValue] = useState(undefined);
  return (
    <FormInstance
      values={[
        { name: "beep", type: TYPE.boolean, value, updateValue },
        { name: "beep", type: TYPE.date, value, updateValue },
        { name: "beep", type: TYPE.email, value, updateValue },
        { name: "beep", type: TYPE.number, value, updateValue },
        { name: "beep", type: TYPE.repeatedPassword, value, updateValue },
        { name: "beep", type: TYPE.password, value, updateValue },
        { name: "beep", type: TYPE.repeatedPassword, value, updateValue },
        { name: "beep", type: TYPE.string, value, updateValue },
      ]}
    />
  );
};
