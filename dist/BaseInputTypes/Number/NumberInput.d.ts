import { FC } from "react";
export interface NumberInputProps {
    name: string;
    placeholder?: string;
    backgroundColor?: string;
    textColor?: string;
    size?: number;
    style?: React.CSSProperties;
    value: any;
    updateValue: React.Dispatch<React.SetStateAction<number>>;
}
/**
 * This component will display an input for a number.
 * @param name (string)
 * @param placeholder (string)
 * @param size (number, optional)
 * @param style (React.CSSProperties object, optional)
 * @param value (useState value)
 * @param updateValue (useState update function)
 * @constructor
 */
export declare const NumberInput: FC<NumberInputProps>;
