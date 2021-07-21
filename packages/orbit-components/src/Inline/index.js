// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import { DEVICES as DEVICES_CONSTS } from "../utils/mediaQuery/consts";
import media from "../utils/mediaQuery";
import { normalize } from "./helpers";

import type { Props } from ".";

const StyledInlineInner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${({ viewportSizes }) => {
    return Object.entries(viewportSizes).map(([query, value]: any) => {
      if (query !== DEVICES_CONSTS[0] && typeof value !== "undefined") {
        return media[query](css`
          ${normalize(value)}
        `);
      }
      return normalize(value);
    });
  }}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledInlineInner.defaultProps = {
  theme: defaultTheme,
};

const Inline = ({
  as: Component = "div",
  mediumMobile,
  largeMobile,
  className,
  tablet,
  desktop,
  largeDesktop,
  children,
  dataTest,
  ...smallMobile
}: Props): React.Element<string> => {
  const viewportSizes = { smallMobile, mediumMobile, largeMobile, tablet, desktop };

  return (
    <Component className={className} data-test={dataTest}>
      <StyledInlineInner viewportSizes={viewportSizes}>{children}</StyledInlineInner>
    </Component>
  );
};

export default Inline;
