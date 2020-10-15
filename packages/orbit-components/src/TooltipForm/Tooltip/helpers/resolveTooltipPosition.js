// @flow
import { css } from "styled-components";

import { SIDE_NUDGE, ARROW_SIZE, VERTICAL_NUDGE } from "../consts";
import type { ResolveTooltipPosition } from "./resolveTooltipPosition.js.flow";
import { left } from "../../../utils/rtl";

const resolveTopPosition = (isInline, contentHeight, verticalOffset, sideOffset, arrowSize) => {
  if (isInline) return -contentHeight + verticalOffset + arrowSize - 2;
  return -contentHeight - arrowSize - verticalOffset;
};

const resolveLeftPosition = (isInline, sideOffset) => {
  if (isInline) return `${-sideOffset}px`;
  return `-${sideOffset}px`;
};

const resolveTooltipPosition: ResolveTooltipPosition = ({
  position,
  contentBounding,
  inlineLabel,
}) => {
  const pos = {
    top: css`
      top: ${resolveTopPosition(
        inlineLabel,
        contentBounding.height,
        VERTICAL_NUDGE,
        SIDE_NUDGE,
        ARROW_SIZE,
      )}px;

      ${left}: ${resolveLeftPosition(inlineLabel, SIDE_NUDGE)};
    `,
    bottom: css`
      bottom: ${-contentBounding.height - ARROW_SIZE - VERTICAL_NUDGE}px;
      ${left}: ${`-${SIDE_NUDGE}px`};
    `,
  };
  return pos[position];
};

export default resolveTooltipPosition;
