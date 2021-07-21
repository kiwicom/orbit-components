// @flow
import { isHorizontal, isVertical } from "./isPosition";
import { ALIGNS, POSITION_DIRECTIONS, TOOLTIP_TOTAL_PADDING } from "../consts";
import type { CalculateTooltipAlign } from "./calculateTooltipAlign";

const getPositionDirection = position => {
  if (isVertical(position)) {
    return POSITION_DIRECTIONS.VERTICAL;
  }
  if (isHorizontal(position)) {
    return POSITION_DIRECTIONS.HORIZONTAL;
  }
  return null;
};

const getPossibleAligns = ({
  containerHeight,
  containerWidth,
  tooltipWidth,
  tooltipHeight,
  windowWidth,
  windowHeight,
  containerLeftPure,
  containerTopPure,
}) => ({
  [POSITION_DIRECTIONS.VERTICAL]: {
    [ALIGNS.START]:
      containerLeftPure + containerWidth / 2 - TOOLTIP_TOTAL_PADDING > 0 &&
      containerLeftPure + containerWidth / 2 - TOOLTIP_TOTAL_PADDING + tooltipWidth < windowWidth,
    [ALIGNS.CENTER]:
      containerLeftPure + containerWidth / 2 - tooltipWidth / 2 > 0 &&
      containerLeftPure + containerWidth / 2 + tooltipWidth / 2 < windowWidth,
    [ALIGNS.END]:
      containerLeftPure + containerWidth + TOOLTIP_TOTAL_PADDING < windowWidth &&
      containerLeftPure + containerWidth / 2 + TOOLTIP_TOTAL_PADDING - tooltipWidth > 0,
  },
  [POSITION_DIRECTIONS.HORIZONTAL]: {
    [ALIGNS.START]:
      containerTopPure + containerHeight / 2 - TOOLTIP_TOTAL_PADDING > 0 &&
      containerTopPure + containerHeight / 2 + (tooltipHeight - TOOLTIP_TOTAL_PADDING) <
        windowHeight,
    [ALIGNS.CENTER]:
      containerTopPure + containerHeight / 2 - tooltipHeight / 2 > 0 &&
      containerTopPure + containerHeight / 2 + tooltipHeight / 2 < windowHeight,
    [ALIGNS.END]:
      containerTopPure + containerHeight + TOOLTIP_TOTAL_PADDING - tooltipHeight > 0 &&
      containerTopPure + containerHeight / 2 + TOOLTIP_TOTAL_PADDING < windowHeight,
  },
});

const calculateTooltipAlign: CalculateTooltipAlign = (position, aligns, dimensions) => {
  if (!position) return null;

  const direction = getPositionDirection(position);

  if (direction) {
    const possibleAligns = getPossibleAligns(dimensions);
    const align = aligns.find(a => possibleAligns[direction][a]);
    if (typeof align === "string") return align;
    return null;
  }

  return null;
};

export default calculateTooltipAlign;
