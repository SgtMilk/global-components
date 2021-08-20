import { FC } from "react";
export interface DateInstanceProps {
    value: Date;
    size?: number;
    style?: React.CSSProperties;
}
/**
 * This component will display a date
 * @param value (Date ts object)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export declare const DateInstance: FC<DateInstanceProps>;
