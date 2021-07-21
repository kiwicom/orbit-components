// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import AlertCircle from "../icons/AlertCircle";
import InformationCircle from "../icons/InformationCircle";
import { rtlSpacing } from "../utils/rtl";

import type { Props } from "./index";

const StyledAsterisk = styled.span`
  font-weight: ${({ theme }) => theme.orbit.fontWeightBold};
  color: ${({ theme, filled }) =>
    !filled ? theme.orbit.colorTextError : theme.orbit.colorFormLabelFilled};
  font-size: ${({ theme }) => theme.orbit.fontSizeFormLabel};
  vertical-align: top;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledAsterisk.defaultProps = {
  theme: defaultTheme,
};

const StyledInputErrorIcWrapper = styled.span`
  margin: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceXXSmall} 0 0`)};
  display: inline-flex;
  align-items: center;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledInputErrorIcWrapper.defaultProps = {
  theme: defaultTheme,
};

const FormLabel: any = styled(
  ({
    className,
    children,
    required,
    filled,
    dataTest,
    id,
    error,
    help,
    onMouseEnter,
    onMouseLeave,
    iconRef,
    inlineLabel,
    labelRef,
  }: Props) => (
    <span className={className} data-test={dataTest} id={id} ref={labelRef}>
      {!inlineLabel && (error || help) && (
        <StyledInputErrorIcWrapper
          ref={iconRef}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {error && <AlertCircle color="critical" size="small" />}
          {!error && help && <InformationCircle color="secondary" size="small" />}
        </StyledInputErrorIcWrapper>
      )}

      {required && !error && (
        <StyledAsterisk aria-hidden="true" filled={filled}>
          *
        </StyledAsterisk>
      )}
      <span>{children}</span>
    </span>
  ),
)`
  display: flex;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeFormLabel};
  color: ${({ theme, filled, disabled }) =>
    !filled || disabled ? theme.orbit.colorFormLabel : theme.orbit.colorFormLabelFilled};
  line-height: ${({ theme }) => theme.orbit.lineHeightTextSmall};
  margin-bottom: ${({ theme }) => theme.orbit.spaceXXSmall};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
FormLabel.defaultProps = {
  theme: defaultTheme,
};

export default FormLabel;
