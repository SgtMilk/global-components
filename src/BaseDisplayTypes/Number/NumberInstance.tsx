// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { FC, ReactElement } from "react";
import { functionCSS } from "../stylesheet";

export interface NumberInstanceProps {
  value: number;
  size?: number;
  style?: React.CSSProperties;
}

/**
 * This component will display a number
 * @param value (number)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export const NumberInstance: FC<NumberInstanceProps> = ({
  value,
  size = 1,
  style = {},
}): ReactElement => {
  return (
    <div
      style={{ ...functionCSS.text(size), ...style }}
      data-testid="NumberDisplay"
    >
      {value}
    </div>
  );
};
