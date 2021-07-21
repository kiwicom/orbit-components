// @flow
import { css } from "styled-components";
import type { CSSRules } from "styled-components";

import { isHorizontal, isVertical } from "./isPosition";
import { isAlignCenter, isAlignEnd, isAlignStart } from "./isAlign";
import type { Props } from "./resolveTooltipArrowAlign";
import { TOOLTIP_ARROW_SIZE, TOOLTIP_PADDING } from "../consts";

// TODO: use tokens for 12px and 7px - paddings and sizeTooltipArrow
const resolveTooltipArrowAlign = ({
  position,
  align,
  tooltipWidth,
  tooltipHeight,
  customArrowAlign = 0,
}: Props): CSSRules | null => {
  if (isVertical(position)) {
    if (isAlignCenter(align)) {
      return css`
        left: ${customArrowAlign ||
        Math.floor(tooltipWidth / 2 - parseFloat(TOOLTIP_ARROW_SIZE))}px; // TODO: use token
      `;
    }
    if (isAlignStart(align)) {
      return css`
        left: ${customArrowAlign || parseFloat(TOOLTIP_PADDING)}px; // TODO: use token
      `;
    }
    if (isAlignEnd(align)) {
      return css`
        right: ${customArrowAlign || parseFloat(TOOLTIP_PADDING)}px; // TODO: use token
      `;
    }
  } else if (isHorizontal(position)) {
    if (isAlignCenter(align)) {
      return css`
        top: ${customArrowAlign ||
        Math.floor(tooltipHeight / 2 - parseFloat(TOOLTIP_ARROW_SIZE))}px; // TODO: use token
      `;
    }
    if (isAlignStart(align)) {
      return css`
        top: ${customArrowAlign || parseFloat(TOOLTIP_PADDING)}px; // TODO: use token
      `;
    }
    if (isAlignEnd(align)) {
      return css`
        bottom: ${customArrowAlign || parseFloat(TOOLTIP_PADDING)}px; // TODO: use token
      `;
    }
  }
  return null;
};

export default resolveTooltipArrowAlign;
