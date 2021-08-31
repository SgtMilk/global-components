// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import React from "react";
import { colors, fonts, flex } from "../style";

const text = (textColor: string | undefined): React.CSSProperties => ({
  color: textColor ? textColor : colors.white,
  fontFamily: fonts.main,
  fontWeight: 600,
});

const formContainer: React.CSSProperties = {
  width: "20rem",
  ...flex.centerFlex,
};

const option = (backgroundColor: string | undefined): React.CSSProperties => ({
  backgroundColor: backgroundColor ? backgroundColor : colors.lightGrey,
  ...text,
});

const inputContainer = (size: number): React.CSSProperties => {
  return {
    marginTop: `${size}rem`,
    marginBottom: `${size}rem`,
    ...flex.centerFlex,
  };
};

const inputBox = (
  size: number,
  backgroundColor: string | undefined
): React.CSSProperties => {
  return {
    backgroundColor: backgroundColor ? backgroundColor : colors.lightGrey,
    paddingTop: `${size * 0.75}rem`,
    paddingBottom: `${size * 0.75}rem`,
    borderRadius: `${size * 0.5}rem`,
    fontSize: `${size}rem`,
    paddingRight: `${size * 1.5}rem`,
    paddingLeft: `${size * 1.5}rem`,
    ...text,
    ...flex.centerInlineFlex,
    justifyContent: "flex-start",
  };
};

const icon = (size: number, color: string): React.CSSProperties => {
  return {
    height: `${size / 2}rem`,
    width: `${size / 2}rem`,
    borderRadius: `${size / 4}rem`,
    border: `${size / 4}rem solid ${color}`,
  };
};

const visibilityIcon = (
  size: number,
  color: string | undefined
): React.CSSProperties => {
  return {
    width: `${size}rem`,
    height: "auto",
    color: color ? color : colors.white,
  };
};

const checkbox = (size: number): React.CSSProperties => {
  return {
    height: `${size}rem`,
    width: `${size}rem`,
    marginRight: `${size}rem`,
  };
};

export default {
  flex: flex.flex,
  inlineFlex: flex.centerInlineFlex,
  text,
  formContainer,
  option,
  inputBox,
  icon,
  inputContainer,
  checkbox,
  visibilityIcon,
};
