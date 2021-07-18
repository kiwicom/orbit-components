// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import mq from "../../../utils/mediaQuery";
import defaultTheme from "../../../defaultTheme";

import type { Props } from ".";

const getPadding = ({ noPadding, useMargins, theme }) => {
  if (noPadding) return null;

  if (!useMargins) {
    return css`
      padding: ${theme.orbit.spaceFourX};

      ${mq.largeMobile(css`
        padding: ${theme.orbit.spaceSixX};
      `)}
    `;
  }

  return css`
    padding: ${theme.orbit.spaceFourX} 0;
    margin: 0 ${theme.orbit.spaceFourX};

    ${mq.largeMobile(css`
      padding: ${theme.orbit.spaceSixX} 0;
      margin: 0 ${theme.orbit.spaceSixX};
    `)}
  `;
};
const StyledTileContent = styled.div`
  font-size: ${({ theme }) => theme.orbit.fontSizeNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightNormal};
  ${({ withPointer }) =>
    withPointer &&
    css`
      cursor: pointer;
    `};
  ${({ withBorder, theme }) =>
    withBorder &&
    css`
      border-top: 1px solid ${theme.orbit.paletteCloudNormal};
    `};
  ${getPadding};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTileContent.defaultProps = {
  theme: defaultTheme,
};

const TileContent: React.AbstractComponent<Props, HTMLElement> = React.forwardRef<
  Props,
  HTMLElement,
>(
  (
    { children, noPadding, withPointer = false, withBorder = false, useMargins = true }: Props,
    ref,
  ) => {
    return (
      <StyledTileContent
        noPadding={noPadding}
        ref={ref}
        withPointer={withPointer}
        withBorder={withBorder}
        useMargins={useMargins}
      >
        {children}
      </StyledTileContent>
    );
  },
);

export default TileContent;
