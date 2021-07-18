// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import transparentColor from "@kiwicom/orbit-design-tokens/lib/js/transparentColor";

import defaultTheme from "../defaultTheme";
import { StyledText } from "../Text";
import { rtlSpacing } from "../utils/rtl";
import getFieldDataState from "../common/getFieldDataState";
import cloneWithTooltip from "../utils/cloneWithTooltip";
import media from "../utils/mediaQuery/index";

import type { Props } from "./index";

const getBorderColor = () => ({ theme, hasError, disabled, checked }) => {
  if (disabled) return theme.orbit.paletteInkLighter;
  if (checked) return theme.orbit.paletteBlueNormal;
  if (hasError && !disabled && !checked) return theme.orbit.formElementBorderColorError;

  return theme.orbit.formElementBorderColor;
};

const getBackground = () => ({ theme, disabled, checked }) => {
  if (disabled && checked) return theme.orbit.paletteInkLighter;
  if (disabled && !checked) return theme.orbit.paletteCloudNormal;

  return checked ? theme.orbit.paletteBlueNormal : theme.orbit.formElementBackground;
};

const Glyph = styled.span`
  visibility: hidden;
  width: 8px;
  height: 8px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.orbit.paletteCloudNormal : theme.orbit.paletteWhiteNormal};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusCircle};
  flex-shrink: 0;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Glyph.defaultProps = {
  theme: defaultTheme,
};

const IconContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    box-sizing: border-box;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${getBackground};
    height: ${theme.orbit.iconSmallSize};
    width: ${theme.orbit.iconSmallSize};
    border-radius: ${theme.orbit.borderRadiusCircle};
    transform: scale(1);
    transition: all ${theme.orbit.durationFast} ease-in-out;
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
IconContainer.defaultProps = {
  theme: defaultTheme,
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceTwoX}`)};
  flex: 1; // IE wrapping fix
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
TextContainer.defaultProps = {
  theme: defaultTheme,
};

const Info = styled.span`
  font-size: ${({ theme }) => theme.orbit.fontSizeSmall};
  color: ${({ theme }) => theme.orbit.textSecondaryForeground};
  line-height: ${({ theme }) => theme.orbit.lineHeightSmall};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Info.defaultProps = {
  theme: defaultTheme,
};

const LabelText = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.orbit.fontWeightNormal};
    font-size: ${theme.orbit.fontSizeNormal};
    color: ${theme.orbit.formElementLabelForeground};
    line-height: ${theme.orbit.iconSmallSize};

    ${StyledText} {
      font-weight: ${theme.orbit.fontWeightNormal};
      font-size: ${theme.orbit.fontSizeNormal};
      color: ${theme.orbit.formElementLabelForeground};
      line-height: ${theme.orbit.iconSmallSize};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
LabelText.defaultProps = {
  theme: defaultTheme,
};

const Input = styled.input`
  position: absolute;
  opacity: 0;

  &:checked ~ ${TextContainer} > ${LabelText} {
    font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
    & > ${StyledText} {
      font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
    }
  }

  &:checked + ${IconContainer} > ${Glyph} {
    visibility: visible;
  }

  &:focus + ${IconContainer} {
    outline: 0;
    border: ${({ theme, hasError }) =>
      `2px solid ${
        hasError ? theme.orbit.paletteRedNormal : theme.orbit.formElementBorderColorFocus
      }`};
    box-shadow: 0 0 0 3px
      ${({ theme, hasError }) =>
        transparentColor(
          hasError ? theme.orbit.paletteRedNormal : theme.orbit.formElementBorderColorFocus,
          15,
        )};

    ${media.largeMobile(css`
      border-width: 1px;
    `)}
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Input.defaultProps = {
  theme: defaultTheme,
};

const Label = styled(({ disabled, theme, type, hasError, ...props }) => (
  <label {...props}>{props.children}</label>
))`
  ${({ theme, disabled }) => css`
    font-family: ${theme.orbit.fontFamily};
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: self-start;
    opacity: ${disabled ? theme.orbit.formElementDisabledOpacity : "1"};
    cursor: ${disabled ? "default" : "pointer"};
    position: relative;

    ${IconContainer} {
      border: 2px solid ${getBorderColor};
    }

    &:hover ${IconContainer} {
      border-color: ${!disabled && theme.orbit.paletteBlueLightTertiary};
    }

    &:active ${IconContainer} {
      border-color: ${disabled ? getBorderColor : theme.orbit.paletteBlueNormal};
    }

    ${media.largeMobile(css`
      ${IconContainer} {
        border: 1px solid ${getBorderColor};
      }
    `)}
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Label.defaultProps = {
  theme: defaultTheme,
};

const Radio: React.AbstractComponent<Props, HTMLElement> = React.forwardRef<Props, HTMLElement>(
  (props, ref) => {
    const {
      label,
      value,
      hasError = false,
      disabled = false,
      checked = false,
      onChange,
      name,
      info,
      readOnly,
      tabIndex,
      dataTest,
      tooltip,
    } = props;
    return (
      <Label disabled={disabled} hasError={hasError} checked={checked}>
        <Input
          data-test={dataTest}
          data-state={getFieldDataState(hasError)}
          value={value}
          type="radio"
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          name={name}
          tabIndex={tabIndex}
          ref={ref}
          readOnly={readOnly}
          hasError={hasError}
        />
        {cloneWithTooltip(
          tooltip,
          <IconContainer disabled={disabled} checked={checked}>
            <Glyph disabled={disabled} />
          </IconContainer>,
        )}
        {(label || info) && (
          <TextContainer>
            {label && <LabelText>{label}</LabelText>}
            {info && <Info>{info}</Info>}
          </TextContainer>
        )}
      </Label>
    );
  },
);

Radio.displayName = "Radio";

export default Radio;
