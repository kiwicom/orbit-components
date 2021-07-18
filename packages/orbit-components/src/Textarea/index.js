// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import FormFeedback from "../FormFeedback";
import FormLabel from "../FormLabel";
import { SIZE_OPTIONS, RESIZE_OPTIONS } from "./consts";
import { rtlSpacing } from "../utils/rtl";
import getSpacingToken from "../common/getSpacingToken";
import formElementFocus from "../InputField/helpers/formElementFocus";
import mq from "../utils/mediaQuery";

import type { Props } from "./index";

const Field = styled.label`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  display: flex;
  width: 100%;
  height: ${({ fullHeight }) => fullHeight && "100%"};
  flex-direction: column;
  position: relative;
  // for usage with Stack
  flex: ${({ fullHeight }) => fullHeight && "1"};
  margin-bottom: ${getSpacingToken};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Field.defaultProps = {
  theme: defaultTheme,
};

const getFontSize = ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.orbit.formElementSmallFontSize,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.formElementNormalFontSize,
  };

  return tokens[size];
};

const getLineHeight = ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.orbit.lineHeightSmall,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.lineHeightNormal,
  };
  return tokens[size];
};

const getPadding = ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: `${theme.orbit.spaceTwoX} ${theme.orbit.spaceThreeX}`,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.spaceThreeX,
  };
  return rtlSpacing(tokens[size]);
};

const StyledTextArea = styled.textarea`
  appearance: none;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: ${({ fullHeight }) => fullHeight && "100%"};
  padding: ${getPadding};
  box-shadow: inset 0 0 0
    ${({ theme, error }) =>
      `1px ${
        error ? theme.orbit.formElementBorderColorError : theme.orbit.formElementBorderColor
      }`};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.formElementDisabledBackground : theme.orbit.formElementBackground};
  color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.formElementDisabledForeground : theme.orbit.formElementFilledForeground};
  font-size: ${getFontSize};
  line-height: ${getLineHeight};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  resize: ${({ resize }) => resize};
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  min-height: 44px; // TODO: create token

  border-radius: 6px;
  ${mq.tablet(css`
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  `)};

  // for usage with Stack
  flex: ${({ fullHeight }) => fullHeight && "1"};

  /* IE 11 bug fix, border: 0 won't work - the box-shadow will be hidden */
  border: 1px solid transparent;

  // IE 11 bug fix, hide scrollbar by default (shown only when scrollable)
  overflow: auto;

  &::placeholder {
    color: ${({ theme }) => theme.orbit.formElementForeground};
  }

  &:hover {
    box-shadow: ${({ disabled, theme }) =>
      !disabled && `inset 0 0 0 1px ${theme.orbit.formElementBorderColorHover}`};
  }

  &:focus {
    ${formElementFocus}
    outline: none;
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTextArea.defaultProps = {
  theme: defaultTheme,
};

const Textarea: React.AbstractComponent<Props, HTMLElement> = React.forwardRef<Props, HTMLElement>(
  (
    {
      size = SIZE_OPTIONS.NORMAL,
      disabled,
      resize = RESIZE_OPTIONS.VERTICAL,
      dataTest,
      spaceAfter,
      fullHeight,
      label,
      value,
      name,
      rows,
      readOnly,
      tabIndex,
      error,
      help,
      placeholder,
      maxLength,
      onChange,
      onFocus,
      onBlur,
      required,
    },
    ref,
  ) => {
    return (
      <Field fullHeight={fullHeight} spaceAfter={spaceAfter}>
        {label && (
          <FormLabel filled={Boolean(value)} disabled={disabled}>
            {label}
          </FormLabel>
        )}
        <StyledTextArea
          data-test={dataTest}
          name={name}
          value={value}
          rows={rows}
          size={size}
          fullHeight={fullHeight}
          disabled={disabled}
          error={error}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          resize={resize}
          readOnly={readOnly}
          tabIndex={tabIndex}
          required={required}
          ref={ref}
        />
        <FormFeedback error={error} help={help} />
      </Field>
    );
  },
);

Textarea.displayName = "Textarea";

export default Textarea;
