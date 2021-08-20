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
