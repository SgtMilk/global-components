import { FC } from "react";
export interface StringInputProps {
    placeholder?: string;
    backgroundColor?: string;
    textColor?: string;
    size?: number;
    style?: React.CSSProperties;
    value: any;
    updateValue: React.Dispatch<React.SetStateAction<string>>;
}
/**
 * This component will display an input for an email. It will show an indicator if the email is valid
 * @param placeholder (string)
 * @param size (number, optional)
 * @param style (React.CSSProperties object, optional)
 * @param value (useState value)
 * @param updateValue (useState update function)
 * @constructor
 */
export declare const StringInput: FC<StringInputProps>;
