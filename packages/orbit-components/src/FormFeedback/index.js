// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import TYPE_OPTIONS from "./consts";

import type { Props } from "./index";

export const StyledFormFeedback: any = styled(({ theme, type, ...props }) => <div {...props} />)`
  color: ${({ theme, type }) =>
    type === TYPE_OPTIONS.ERROR
      ? theme.orbit.textCriticalForeground
      : theme.orbit.textSecondaryForeground};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeSmall};
  font-weight: ${({ theme, type }) =>
    type === TYPE_OPTIONS.ERROR ? theme.orbit.fontWeightMedium : theme.orbit.fontWeightNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightSmall};
  width: 100%;
  margin-top: 2px;
  position: absolute;
  top: 100%;
  max-height: ${({ theme }) => theme.orbit.lineHeightSmall};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  & a {
    color: ${({ theme, type }) =>
      type === TYPE_OPTIONS.ERROR
        ? theme.orbit.textCriticalForeground
        : theme.orbit.textPrimaryForeground};
    font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
    text-decoration: underline;
    cursor: pointer;
  }

  strong,
  b {
    font-weight: ${({ theme }) => theme.fontWeightMedium};
    color: ${({ theme }) => theme.paletteInkNormal};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledFormFeedback.defaultProps = {
  theme: defaultTheme,
};

const FormFeedback = ({ error, help, dataTest }: Props): null | React.Node => {
  const isHelp = help && !error;

  if (!error && !help) return null;

  return (
    <StyledFormFeedback
      type={isHelp ? "help" : error && "error"}
      data-test={dataTest}
      aria-live="polite"
    >
      {isHelp ? help : error && error}
    </StyledFormFeedback>
  );
};

export default FormFeedback;
