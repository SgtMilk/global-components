// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { Button } from "./Button";

export default {
  title: "Others/Button",
  component: Button,
};

export const Default = () => {
  return <Button onClick={() => {}}>Submit</Button>;
};

export const Green = () => {
  return (
    <Button
      size={1}
      onClick={() => {}}
      backgroundColor="green"
      textColor="black"
      hoverDarken={true}
    >
      Submit
    </Button>
  );
};
