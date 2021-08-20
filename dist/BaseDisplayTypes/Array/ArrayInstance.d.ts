import { FC } from "react";
export interface ArrayInstanceProps {
    value: Array<any>;
    size?: number;
    style?: React.CSSProperties;
}
/**
 * This component will display an array
 * @param value (Array of any type)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export declare const ArrayInstance: FC<ArrayInstanceProps>;
