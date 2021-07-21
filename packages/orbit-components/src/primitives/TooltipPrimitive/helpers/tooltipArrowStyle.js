// @flow
import { css } from "styled-components";
import type { CSSRules } from "styled-components";

import type { Props, ResolveColor } from "./tooltipArrowStyle";

export const resolveColor: ResolveColor = ({ error, help, theme }) => {
  if (error) return theme.orbit.paletteRedNormal;
  if (help) return theme.orbit.paletteBlueNormal;
  return theme.orbit.paletteInkNormal;
};

const tooltipArrowStyle = ({ position, theme, error, help }: Props): CSSRules => {
  const arrows = {
    top: css`
      border-width: 7px 7px 0 7px; // TODO: create token sizeTooltipArrow
      border-color: ${resolveColor({ theme, error, help })} transparent transparent transparent; // TODO: create token backgroundTooltip
    `,
    right: css`
      border-width: 7px 7px 7px 0; // TODO: create token sizeTooltipArrow
      border-color: transparent ${resolveColor({ theme, error, help })} transparent transparent; // TODO: create token backgroundTooltip
    `,
    left: css`
      border-width: 7px 0 7px 7px; // TODO: create token sizeTooltipArrow
      border-color: transparent transparent transparent ${resolveColor({ theme, error, help })}; // TODO: create token backgroundTooltip
    `,
    bottom: css`
      border-width: 0 7px 7px 7px; // TODO: create token sizeTooltipArrow
      border-color: transparent transparent ${resolveColor({ theme, error, help })} transparent; // TODO: create token backgroundTooltip
    `,
  };
  return arrows[position];
};

export default tooltipArrowStyle;
