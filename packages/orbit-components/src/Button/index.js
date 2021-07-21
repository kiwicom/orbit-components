// @flow
import * as React from "react";

import { TYPE_OPTIONS } from "./consts";
import ButtonPrimitive from "../primitives/ButtonPrimitive";
import getIconContainer from "../primitives/ButtonPrimitive/common/getIconContainer";
import getCommonProps from "../primitives/ButtonPrimitive/common/getCommonProps";
import useTheme from "../hooks/useTheme";
import getButtonStyles from "./helpers/getButtonStyles";
import getButtonIconForeground from "./helpers/getButtonIconForeground";

import type { Props } from ".";

const Button: React.AbstractComponent<Props, HTMLButtonElement> = React.forwardRef<
  Props,
  HTMLButtonElement,
>(({ type = TYPE_OPTIONS.PRIMARY, size, disabled = false, ...props }, ref) => {
  const theme = useTheme();
  const propsWithTheme = { theme, size, ...props };
  const commonProps = getCommonProps(propsWithTheme);
  const buttonStyles = getButtonStyles({ type, theme, disabled });
  const icons = getIconContainer({
    ...propsWithTheme,
    iconForeground: getButtonIconForeground({ type, theme }),
  });
  return (
    <ButtonPrimitive
      ref={ref}
      disabled={disabled}
      {...props}
      {...buttonStyles}
      {...commonProps}
      {...icons}
    />
  );
});

Button.displayName = "Button";

export default Button;
