// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { FC, ReactElement } from "react";
import { functionCSS } from "../stylesheet";

export interface BooleanInstanceProps {
  value: boolean;
  size?: number;
  style?: React.CSSProperties;
}

/**
 * This component will display a boolean
 * @param value (boolean)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export const BooleanInstance: FC<BooleanInstanceProps> = ({
  value,
  size = 1,
  style = {},
}): ReactElement => {
  return (
    <div
      style={{ ...functionCSS.text(size), ...style }}
      data-testid="BooleanDisplay"
    >{`${value}`}</div>
  );
};
