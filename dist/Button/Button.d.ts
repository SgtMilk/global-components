import { FC, ReactNode } from "react";
export interface ButtonProps {
    onClick: () => void;
    backgroundColor?: string;
    textColor?: string;
    hoverDarken?: boolean;
    size?: number;
    children?: ReactNode;
    style?: React.CSSProperties;
}
/**
 * Custom Button
 * @param onClick (callback function for clicking the button)
 * @param backgroundColor (string, optional, background color for the button)
 * @param textColor (string, optional, color of the text in the button)
 * @param hoverDarken (boolean, optional, will default to false. If true, will darken on hover, if false, will lighten on hover)
 * @param size (number, size of the component, optional)
 * @param children (child jsx components, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export declare const Button: FC<ButtonProps>;
