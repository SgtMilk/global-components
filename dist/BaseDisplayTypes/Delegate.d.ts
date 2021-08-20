import { FC } from "react";
export interface DelegateProps {
    value: any;
    size?: number;
    style?: React.CSSProperties;
}
/**
 * This component will display of any of the following types:
 * array, boolean, Date ts object, number, json-type object, string
 * @param value (array, boolean, Date ts object, number, json-type object, string)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export declare const Delegate: FC<DelegateProps>;
