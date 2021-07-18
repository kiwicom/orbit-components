// @flow
import styled, { css } from "styled-components";

import { left } from "../../../utils/rtl";
import defaultTheme from "../../../defaultTheme";

const renderStatus = (type, theme) => {
  if (type === "success") return theme.orbit.textSuccessForeground;
  if (type === "warning") return theme.orbit.textWarningForeground;
  if (type === "critical") return theme.orbit.textCriticalForeground;

  return theme.orbit.paletteCloudNormalSecondary;
};

const StyledProgressLine: any = styled.span`
  ${({ desktop, theme, status }) => css`
    ${!desktop && `position: absolute`};
    ${!desktop && `top: 18px`};
    width: ${desktop ? "50%" : "2px"};
    ${left}: 11px;
    background: ${renderStatus(status, theme)};
    height: ${desktop ? `2px` : `calc(100% + 4px)`};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledProgressLine.defaultProps = {
  theme: defaultTheme,
};

export default StyledProgressLine;
