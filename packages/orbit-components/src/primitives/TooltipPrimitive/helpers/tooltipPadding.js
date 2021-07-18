// @flow
import type { Props } from "./tooltipPadding";

const tooltipPadding = ({ contentHeight, theme }: Props): string => {
  // one-line text should have smaller top/bottom padding
  if (contentHeight <= Math.floor(parseFloat(theme.orbit.lineHeightNormal))) {
    return `${theme.orbit.spaceTwoX} ${theme.orbit.spaceThreeX}`; // TODO: create token
  }
  return theme.orbit.spaceThreeX; // TODO: create token
};

export default tooltipPadding;
