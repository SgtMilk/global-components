// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { DateInstance } from "./DateInstance";

export default {
  title: "Base Display Types/Date Instance",
  component: DateInstance,
};

export const Default = () => {
  return (
    <DateInstance
      style={{ width: "40vw" }}
      size={1}
      value={new Date("11-11-2000")}
    />
  );
};
