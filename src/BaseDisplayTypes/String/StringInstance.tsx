import React, { FC, ReactElement } from "react";
import { functionCSS } from "../stylesheet";

export interface StringInstanceProps {
  value: string;
  size?: number;
  style?: React.CSSProperties;
}

/**
 * This component will display a string
 *
 * @param value (string)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export const StringInstance: FC<StringInstanceProps> = ({
  value,
  size = 1,
  style = {},
}): ReactElement => {
  return <div style={{ ...functionCSS.text(size), ...style }}>{value}</div>;
};
