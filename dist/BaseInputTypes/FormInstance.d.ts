import { FC } from "react";
export interface FormInstanceProps {
    values: Array<{
        name: string;
        choices?: Array<string>;
        placeholder?: string;
        type: TYPE;
        value: any;
        updateValue: React.Dispatch<React.SetStateAction<any>>;
    }>;
    size?: number;
    style?: React.CSSProperties;
}
export declare enum TYPE {
    boolean = 0,
    date = 1,
    email = 2,
    number = 3,
    password = 4,
    repeatedPassword = 5,
    select = 6,
    string = 7
}
/**
 * This component will display a form from an input array of wanted input fields
 * @param size (number, optional)
 * @param style (React.CSSProperties object, optional)
 * @param values (object)
 * In values:
 * @param name (string)
 * @param placeholder (string)
 * @param type (TYPE)
 * @param value (useState value)
 * @param updateValue (useState update function)
 * @constructor
 */
export declare const FormInstance: FC<FormInstanceProps>;
