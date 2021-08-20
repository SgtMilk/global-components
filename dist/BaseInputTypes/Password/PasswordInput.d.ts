import { FC } from "react";
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
export declare const PasswordInput: FC<PasswordInputProps>;
