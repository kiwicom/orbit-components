// @flow
import { css } from "styled-components";

import resolveColor from "./resolveColor";
import { ARROW_SIZE } from "../consts";
import type { TooltipArrowStyle } from "./tooltipArrowStyle.js.flow";

const tooltipArrowStyle: TooltipArrowStyle = ({ position }) => {
  const arrows = {
    top: css`
      border-width: ${ARROW_SIZE}px ${ARROW_SIZE}px 0 ${ARROW_SIZE}px;
      border-color: ${resolveColor} transparent transparent transparent;
    `,
    bottom: css`
      border-width: 0 ${ARROW_SIZE}px ${ARROW_SIZE}px ${ARROW_SIZE}px;
      border-color: transparent transparent ${resolveColor} transparent;
    `,
  };
  return arrows[position];
};

export default tooltipArrowStyle;
