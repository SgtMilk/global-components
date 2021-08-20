import { FC } from "react";
export interface SelectInputProps {
    name: string;
    choices?: Array<string>;
    placeholder?: string;
    backgroundColor?: string;
    textColor?: string;
    size?: number;
    style?: React.CSSProperties;
    value: any;
    updateValue: React.Dispatch<React.SetStateAction<string>>;
}
/**
 * This component will display a select input
 * @param name (string)
 * @param choices (array of strings)
 * @param size (number, optional)
 * @param style (React.CSSProperties object, optional)
 * @param value (useState value)
 * @param updateValue (useState update function)
 * @constructor
 */
export declare const SelectInput: FC<SelectInputProps>;
