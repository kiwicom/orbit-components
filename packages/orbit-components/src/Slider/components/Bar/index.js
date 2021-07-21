// @flow
import * as React from "react";
import styled from "styled-components";

import { left as leftRight } from "../../../utils/rtl";
import defaultTheme from "../../../defaultTheme";

import type { CalculateBarPosition, Props } from ".";

const StyledBar = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 24px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
`;

export const calculateBarPosition: CalculateBarPosition = (value, max, min, hasHistogram) => {
  if (Array.isArray(value)) {
    return {
      left: +(((value[0] - min) / (max - min + 1)) * 100).toFixed(1),
      width: +(((value[value.length - 1] - value[0] + 1) / (max - min + 1)) * 100).toFixed(1),
    };
  }
  const addition = hasHistogram ? 1 : 0;
  return {
    left: 0,
    width: +(((value - min + addition) / (max - min + addition)) * 100).toFixed(1),
  };
};

export const StyledBarPart: any = styled(({ width, left, theme, active, ...props }) => (
  <div {...props} />
)).attrs(({ width, left, theme }) => {
  return {
    style: {
      width: `${width}%`,
      [leftRight({ theme })]: `${left}%`,
    },
  };
})`
  position: absolute;
  height: 4px;
  top: 10px;
  border-radius: 4px;
  background-color: ${({ theme, active }) =>
    active ? theme.orbit.paletteBlueNormal : theme.orbit.paletteInkLighter};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledBarPart.defaultProps = {
  theme: defaultTheme,
};

const Bar: React.AbstractComponent<Props, HTMLElement> = React.forwardRef<Props, HTMLElement>(
  ({ onMouseDown, value, max, min, hasHistogram }, ref) => {
    const { left, width } = calculateBarPosition(value, max, min, hasHistogram);
    return (
      <StyledBar ref={ref} onMouseDown={onMouseDown}>
        <StyledBarPart width={100} left={0} />
        <StyledBarPart active left={left} width={width} />
      </StyledBar>
    );
  },
);

Bar.displayName = "Bar";

export default Bar;
