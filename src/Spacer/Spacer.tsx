import React, { FC, ReactElement } from "react";
import { functionCSS } from "./stylesheet";

interface SpacerProps {
  size?: number;
}

/**
 * This component is a horizontal spacer (for buttons, for example, to not use margins).
 * Note for storybook: You obviously cannot see the spacer, but it is included here for documentation.
 * @param size (number, the width of the spacer, defaults to 1)
 * @constructor
 */
export const Spacer: FC<SpacerProps> = ({ size = 1 }): ReactElement => {
  return <div style={functionCSS.box(size)} />;
};
