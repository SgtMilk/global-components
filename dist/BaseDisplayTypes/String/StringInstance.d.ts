import { FC } from "react";
export interface StringInstanceProps {
    value: string;
    size?: number;
    style?: React.CSSProperties;
}
/**
 * This component will display a string
 * @param value (string)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export declare const StringInstance: FC<StringInstanceProps>;
