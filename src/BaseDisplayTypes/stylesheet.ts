// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { CSSProperties } from "react";
import { fonts } from "../style";

export const objectCSS: { [key: string]: CSSProperties } = {
  padding: {
    width: "0.5rem",
  },
};

export const functionCSS: { [key: string]: (...args: any) => CSSProperties } = {
  text: (size: number) => ({
    fontFamily: fonts.main,
    fontSize: `${size}rem`,
  }),
};
