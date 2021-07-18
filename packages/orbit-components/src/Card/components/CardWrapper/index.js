// @flow
import styled, { css } from "styled-components";
import * as React from "react";

import transition from "../../../utils/transition";
import mq from "../../../utils/mediaQuery";
import { CardElement } from "../../helpers/mixins";
import defaultTheme from "../../../defaultTheme";
import { getBorder, getBorderRadius, getBorderRadiusMobile } from "../../helpers/borders";

import type { Props } from ".";

const topBorderRadius = css`
  border-top-left-radius: ${({ expanded }) => expanded && getBorderRadiusMobile};
  border-top-right-radius: ${({ expanded }) => expanded && getBorderRadiusMobile};

  ${mq.largeMobile(css`
    border-top-left-radius: ${getBorderRadius};
    border-top-right-radius: ${getBorderRadius};
  `)}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
topBorderRadius.defaultTheme = {
  theme: defaultTheme,
};

const bottomBorderRadius = css`
  border-bottom-left-radius: ${({ expanded }) => expanded && getBorderRadiusMobile};
  border-bottom-right-radius: ${({ expanded }) => expanded && getBorderRadiusMobile};

  ${mq.largeMobile(css`
    border-bottom-left-radius: ${getBorderRadius};
    border-bottom-right-radius: ${getBorderRadius};
  `)}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
bottomBorderRadius.defaultProps = {
  theme: defaultTheme,
};

const StyledCardWrapper = styled.div`
  padding: ${({ theme, noPadding }) => !noPadding && theme.orbit.spaceFourX};
  cursor: ${({ onClick }) => onClick && `pointer`};
  ${CardElement};
  ${({ bottomBorder }) => bottomBorder && bottomBorderRadius};
  border-bottom: ${({ roundedBottom, bottomBorder }) =>
    (roundedBottom || bottomBorder) && getBorder};
  transition: ${transition(["margin"], "fast", "ease-in-out")};
  ${({ noBorderTop, expandable }) =>
    noBorderTop && !expandable && `border-top: 1px solid transparent; padding-top: 0 !important;`};

  ${({ expanded }) =>
    expanded &&
    css`
      margin: ${({ theme }) => theme.orbit.spaceTwoX} 0;
      border: 1px solid transparent;
    `};

  ${({ roundedTop }) => roundedTop && topBorderRadius};
  ${({ roundedBottom }) => roundedBottom && bottomBorderRadius}

  &:last-of-type {
    ${({ expanded }) =>
      !expanded &&
      css`
        border-bottom: ${getBorder};
      `}
  }

  ${mq.largeMobile(css`
    &:first-of-type {
      ${topBorderRadius};
    }

    &:last-of-type {
      ${bottomBorderRadius};
    }

    padding: ${({ theme, noPadding }) => !noPadding && theme.orbit.spaceSixX};
  `)}

  &:focus {
    outline: 0;
    background: ${({ theme }) => theme.orbit.paletteWhiteNormalSecondary};
  }

  &:hover {
    background: ${({ theme, onClick }) => onClick && theme.orbit.paletteWhiteNormalSecondary};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCardWrapper.defaultProps = {
  theme: defaultTheme,
};

const CardWrapper = ({
  children,
  onClick,
  bottomBorder,
  roundedBottom,
  roundedTop,
  expanded,
  noBorderTop,
  dataTest,
  noPadding,
  expandable,
  initialExpanded,
}: Props): React.Node => (
  <StyledCardWrapper
    bottomBorder={bottomBorder}
    expanded={expanded || initialExpanded}
    onClick={onClick}
    tabIndex={onClick ? "0" : undefined}
    data-test={dataTest}
    noBorderTop={noBorderTop}
    expandable={expandable}
    noPadding={noPadding}
    roundedBottom={roundedBottom}
    roundedTop={roundedTop}
  >
    {children}
  </StyledCardWrapper>
);

export default CardWrapper;
