import { FC } from "react";
export interface NumberInstanceProps {
    value: number;
    size?: number;
    style?: React.CSSProperties;
}
/**
 * This component will display a number
 * @param value (number)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export declare const NumberInstance: FC<NumberInstanceProps>;
