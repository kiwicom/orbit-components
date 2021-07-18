// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import Grid from "../utils/Grid";
import { LAYOUT_SETTINGS } from "./consts";
import mq from "../utils/mediaQuery";

import type { Props } from "./index";

const getChildrenProps = (type, key) => {
  if (LAYOUT_SETTINGS[type].layoutColumns && LAYOUT_SETTINGS[type].layoutColumns[key]) {
    return LAYOUT_SETTINGS[type].layoutColumns[key];
  }
  return null;
};

const StyledLayout = styled(Grid)`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  padding: 0 ${({ theme }) => theme.orbit.spaceFourX};

  ${mq.desktop(css`
    padding: ${({ theme }) => theme.orbit.spaceSixX};
  `)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledLayout.defaultProps = {
  theme: defaultTheme,
};

const Layout = ({ children, type, dataTest }: Props): React.Node => (
  <StyledLayout {...LAYOUT_SETTINGS[type]} dataTest={dataTest}>
    {React.Children.map(children, (item, key) => {
      return React.cloneElement(item, {
        ...getChildrenProps(type, key),
        ...item.props,
      });
    })}
  </StyledLayout>
);

export default Layout;

export { default as LayoutColumn } from "./LayoutColumn";
