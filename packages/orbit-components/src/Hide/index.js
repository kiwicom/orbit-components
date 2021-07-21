// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import getViewportHideStyles from "./helpers/getViewportHideStyles";
import getDisplay from "./helpers/getDisplay";

import type { Props } from ".";

const StyledHide = styled(({ on, block, theme, ...props }) => <div {...props} />)`
  ${({ on }) => getViewportHideStyles(on, getDisplay)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledHide.defaultProps = {
  theme: defaultTheme,
};

const Hide = ({ on = [], block, children }: Props): React.Node => (
  <StyledHide on={on} block={block}>
    {children}
  </StyledHide>
);

export default Hide;
