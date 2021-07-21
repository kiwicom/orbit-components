// @flow
import { SIZE_OPTIONS } from "../consts";
import type { Props } from "./tooltipSize";

const tooltipSize = ({ size }: Props): string => {
  const sizes = {
    [SIZE_OPTIONS.SMALL]: "240px",
    [SIZE_OPTIONS.MEDIUM]: "380px",
  };

  return sizes[size];
};

export default tooltipSize;
