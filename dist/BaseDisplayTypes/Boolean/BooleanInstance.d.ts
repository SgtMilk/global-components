import { FC } from "react";
export interface BooleanInstanceProps {
    value: boolean;
    size?: number;
    style?: React.CSSProperties;
}
/**
 * This component will display a boolean
 * @param value (boolean)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export declare const BooleanInstance: FC<BooleanInstanceProps>;
