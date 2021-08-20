import { FC } from "react";
interface SpacerProps {
    size?: number;
}
/**
 * This component is a horizontal spacer (for buttons, for example, to not use margins).
 * Note for storybook: You obviously cannot see the spacer, but it is included here for documentation.
 * @param size (number, the width of the spacer, defaults to 1)
 * @constructor
 */
export declare const Spacer: FC<SpacerProps>;
export {};
