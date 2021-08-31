// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { NumberInstance } from "./NumberInstance";

export default {
  title: "Base Display Types/Number Instance",
  component: NumberInstance,
};

export const Default = () => {
  return <NumberInstance style={{ width: "40vw" }} size={1} value={5} />;
};
