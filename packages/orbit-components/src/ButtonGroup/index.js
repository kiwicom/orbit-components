// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import { borderRadius, rtlSpacing } from "../utils/rtl";
import { StyledButtonPrimitive } from "../primitives/ButtonPrimitive";
import mq from "../utils/mediaQuery";

import type { Props } from ".";

const StyledButtonGroup = styled.div`
  display: flex;

  ${StyledButtonPrimitive} {
    border-radius: 0;
    margin: ${({ theme }) => rtlSpacing(theme.orbit.marginButtonGroup)};

    :first-child {
      border-radius: ${borderRadius("6px 0 0 6px")};
    }

    :last-child {
      border-radius: ${borderRadius("0 6px 6px 0")};
      margin: 0;
    }
  }
  ${mq.tablet(css`
    ${StyledButtonPrimitive} {
      :first-child {
        border-radius: ${({ theme }) =>
          borderRadius(`${theme.orbit.borderRadiusNormal} 0 0 ${theme.orbit.borderRadiusNormal}`)};
      }
      :last-child {
        border-radius: ${({ theme }) =>
          borderRadius(`0 ${theme.orbit.borderRadiusNormal} ${theme.orbit.borderRadiusNormal} 0`)};
      }
    }
  `)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledButtonGroup.defaultProps = {
  theme: defaultTheme,
};

const ButtonGroup = ({ children, dataTest }: Props): React.Node => (
  <StyledButtonGroup data-test={dataTest}>{children}</StyledButtonGroup>
);

export default ButtonGroup;
