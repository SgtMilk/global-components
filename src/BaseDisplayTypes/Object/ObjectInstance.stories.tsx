// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { ObjectInstance } from "./ObjectInstance";

export default {
  title: "Base Display Types/Object Instance",
  component: ObjectInstance,
};

export const Default = () => {
  return (
    <ObjectInstance
      style={{ width: "40vw" }}
      size={1}
      value={{
        value1: "value1",
        value2: { value1: "value1", value2: [1, "value1"] },
      }}
    />
  );
};
