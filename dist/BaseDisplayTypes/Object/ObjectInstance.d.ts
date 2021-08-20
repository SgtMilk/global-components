import { FC } from "react";
export interface ObjectInstanceProps {
    value: {
        [key: string]: any;
    };
    size?: number;
    style?: React.CSSProperties;
}
/**
 * This component will display a json-type object
 * @param value (json-type object)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export declare const ObjectInstance: FC<ObjectInstanceProps>;
