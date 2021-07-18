// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
import getViewportHideStyles from "../../Hide/helpers/getViewportHideStyles";
import { StyledCard } from "../../Card";
import { StyledCard as DeprecatedStyledCard } from "../../deprecated/Card";
import { getBreakpointWidth } from "../../utils/mediaQuery";
import { QUERIES } from "../../utils/mediaQuery/consts";

import type { Props } from "./index";

const StyledColumn = styled.div`
  ${({ hideOn }) => !!hideOn && getViewportHideStyles(hideOn)};

  @media (max-width: ${({ theme }) =>
      +getBreakpointWidth(QUERIES.LARGEMOBILE, theme, true) - 1}px) {
    ${StyledCard}, ${DeprecatedStyledCard} {
      margin-right: -${({ theme }) => theme.orbit.spaceFourX};
      margin-left: -${({ theme }) => theme.orbit.spaceFourX};
      width: auto;
    }
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledColumn.defaultProps = {
  theme: defaultTheme,
};

const LayoutColumn = ({ children, hideOn, as = "div", dataTest }: Props): React.Node => {
  return (
    <StyledColumn data-test={dataTest} hideOn={hideOn} as={as}>
      {children}
    </StyledColumn>
  );
};

export default LayoutColumn;
