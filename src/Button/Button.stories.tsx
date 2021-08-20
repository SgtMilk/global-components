import React from "react";
import { Button } from "./Button";

export default {
  title: "Others/Button",
  component: Button,
};

export const Default = () => {
  return (
    <Button size={1} onClick={() => {}}>
      Submit
    </Button>
  );
};
