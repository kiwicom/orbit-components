// @flow
import { css } from "styled-components";

import { isPositionBottom, isPositionTop, isPositionRight, isPositionLeft } from "./isPosition";
import type { Props } from "./resolveContainerPosition";
import { TOOLTIP_ARROW_SIZE } from "../consts";

const resolveContainerPosition = ({
  position,
  containerTop,
  containerLeft,
  containerHeight,
  containerWidth,
  tooltipHeight,
  contentHeight,
  tooltipWidth,
  customContainerPos = 0,
  theme,
}: Props): any | null => {
  if (isPositionTop(position)) {
    /*
      Needed, otherwise the top position is incorrectly positioned due to missing 8 pixels.
      It's produced by tooltipPadding.js helper that changes the padding based on the actual height -
      if it's one-line or multi-line.
     */
    const isMultiline = contentHeight > Math.floor(parseFloat(theme.orbit.lineHeightTextNormal));
    return css`
      top: ${Math.floor(
        containerTop -
          tooltipHeight -
          customContainerPos -
          parseFloat(TOOLTIP_ARROW_SIZE) -
          (isMultiline ? 8 : 0),
      )}px; // TODO: use token
    `;
  }
  if (isPositionBottom(position)) {
    return css`
      top: ${Math.floor(
        containerTop + containerHeight + customContainerPos + parseFloat(TOOLTIP_ARROW_SIZE),
      )}px; // TODO: use token
    `;
  }
  if (isPositionRight(position)) {
    return css`
      left: ${Math.floor(
        containerLeft + containerWidth + customContainerPos + parseFloat(TOOLTIP_ARROW_SIZE),
      )}px; // TODO: use token
    `;
  }
  if (isPositionLeft(position)) {
    return css`
      left: ${Math.floor(
        containerLeft - tooltipWidth - customContainerPos - parseFloat(TOOLTIP_ARROW_SIZE),
      )}px; // TODO: use token
    `;
  }
  return null;
};

export default resolveContainerPosition;
