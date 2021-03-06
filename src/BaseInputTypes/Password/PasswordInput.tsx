// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { ReactElement, FC, useState } from "react";
import stylesheet from "../stylesheet";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Spacer } from "../..";

export interface PasswordInputProps {
  name: string;
  placeholder?: string;
  backgroundColor?: string;
  textColor?: string;
  size?: number;
  style?: React.CSSProperties;
  color?: boolean;
  value: any;
  updateValue: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * This component will display an input for a password.
 * If the parameter 'color' is not given, there will be no indicator.
 * Otherwise, it will be green for true, and red for false.
 * @param name (string)
 * @param placeholder (string)
 * @param size (number, optional)
 * @param style (React.CSSProperties object, optional)
 * @param color (boolean, optional)
 * @param value (useState value)
 * @param updateValue (useState update function)
 * @constructor
 */
export const PasswordInput: FC<PasswordInputProps> = ({
  color,
  placeholder = color === undefined ? "password" : "repeat password",
  backgroundColor,
  textColor,
  size = 1,
  style = {},
  value,
  updateValue,
}): ReactElement => {
  let [visible, setVisibility] = useState<boolean>(false);

  const handleUpdate = (e: any) => {
    updateValue(e.target.value);
  };

  const updateVisibility = () => {
    setVisibility(!visible);
  };

  return (
    <div
      style={{ ...stylesheet.inputBox(size, backgroundColor), ...style }}
      data-testid="PasswordInput"
    >
      <style>{`
        .input {
          all: unset;
        }
      `}</style>
      <input
        type={visible ? "text" : "password"}
        style={{ width: "100%", ...stylesheet.text(textColor) }}
        onChange={handleUpdate}
        placeholder={placeholder}
        className="input"
        value={value}
        autoComplete="off"
      />
      <div style={stylesheet.inlineFlex}>
        {color === undefined ? null : (
          <div style={stylesheet.icon(size, color ? "limegreen" : "red")} />
        )}
        <Spacer size={size * 2} />
        <div
          onClick={updateVisibility}
          className="input"
          style={stylesheet.inlineFlex}
        >
          {visible ? (
            <VisibilityOff style={stylesheet.visibilityIcon(size, textColor)} />
          ) : (
            <Visibility style={stylesheet.visibilityIcon(size, textColor)} />
          )}
        </div>
      </div>
    </div>
  );
};
