// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { StringInstance } from "./StringInstance";

export default {
  title: "Base Display Types/String Instance",
  component: StringInstance,
};

export const Default = () => {
  return <StringInstance style={{ width: "40vw" }} size={1} value={"String"} />;
};
