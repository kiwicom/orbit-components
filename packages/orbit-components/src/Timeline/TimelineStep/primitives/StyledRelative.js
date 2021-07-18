// @flow
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";

const StyledRelative: any = styled.div`
  position: relative;
  ${({ inner, theme }) =>
    inner &&
    css`
      width: calc(100% + ${parseInt(theme.orbit.spaceThreeX, 10) * 2}px);
      display: flex;
      align-items: center;
    `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledRelative.defaultProps = {
  theme: defaultTheme,
};

export default StyledRelative;
