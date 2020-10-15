// @flow
import { css } from "styled-components";

import { left } from "../../utils/rtl";
import type { ResolveTooltipPosition } from "./resolveTooltipPosition.js.flow";

const resolveLeft = ({ theme, inlineLabel, iconBounding }) => {
  if (iconBounding && inlineLabel) {
    const { height, width } = iconBounding;
    return theme.rtl ? `${width - 26}` : `${height === 16 ? width + 5 : width}`;
  }

  return theme.rtl ? 0 : 8;
};

const resolveTop = ({ iconBounding, inlineLabel }) => {
  if (inlineLabel && iconBounding) return `${iconBounding.height / 3 - 10}`;
  if (iconBounding) return -13;

  return -14;
};

const resolveTooltipPosition: ResolveTooltipPosition = ({ position }) => {
  const pos = {
    top: css`
      top: ${resolveTop}px;
      ${left}: ${resolveLeft}px;
    `,
  };
  return pos[position];
};

export default resolveTooltipPosition;
