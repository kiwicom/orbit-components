// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import type { Props } from "./Feedback.js.flow";

export const StyledFormFeedback: any = styled(({ theme, type, ...props }) => <div {...props} />)`
  ${({ theme }) => css`
    color: ${theme.orbit.colorTextError};
    font-family: ${theme.orbit.fontFamily};
    font-size: ${theme.orbit.fontSizeFormFeedback};
    font-weight: ${theme.orbit.fontWeightMedium};
    line-height: ${theme.orbit.lineHeightText};
    width: 100%;
    margin-top: 2px;
    position: absolute;
    top: 100%;
    max-height: ${Math.floor(
      theme.orbit.lineHeightText * parseInt(theme.orbit.fontSizeFormFeedback, 10),
    )}px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    & a {
      color: ${theme.orbit.colorTextError};
      font-weight: ${theme.orbit.fontWeightMedium};
      text-decoration: underline;
      cursor: pointer;
    }
    strong,
    b {
      font-weight: ${theme.fontWeightMedium};
      color: ${theme.paletteInkNormal};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledFormFeedback.defaultProps = {
  theme: defaultTheme,
};

const FormFeedback = (props: Props): React.Node => {
  const { children, dataTest } = props;
  return <StyledFormFeedback data-test={dataTest}>{children}</StyledFormFeedback>;
};

export default FormFeedback;
