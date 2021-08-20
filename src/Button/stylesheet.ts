import React from "react";
import { colors, fonts, flex } from "style";

export const button = (
  size: number,
  backgroundColor: string | undefined,
  textColor: string | undefined
): React.CSSProperties => ({
  // font stuff
  fontSize: `${size}rem`,
  color: textColor ? textColor : colors.white,
  fontFamily: fonts.main,
  fontWeight: 650,
  userSelect: "none",
  // box stuff
  ...flex.centerInlineFlex,
  width: "auto",
  height: "auto",
  paddingTop: `${size * 0.75}rem`,
  paddingBottom: `${size * 0.75}rem`,
  borderRadius: `${size * 0.5}rem`,
  paddingRight: `${size * 1.5}rem`,
  paddingLeft: `${size * 1.5}rem`,
  backgroundColor: backgroundColor ? backgroundColor : colors.accentBlue,
  transition: "0.3s",
});

export const hoverAnimation = (hoverDarken: boolean) => `
.button:hover{
  filter: brightness(${hoverDarken ? 0.75 : 1.5});
}
`;
