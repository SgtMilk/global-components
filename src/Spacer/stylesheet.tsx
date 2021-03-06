// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { CSSProperties } from "react";

export const functionCSS: {
  [key: string]: (...args: any) => CSSProperties;
} = {
  box: (size: number) => ({
    width: `${size * 0.5}rem`,
  }),
};
