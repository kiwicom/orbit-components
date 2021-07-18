// @flow
import * as React from "react";

import { BUTTON_STATES } from "../../primitives/ButtonPrimitive/common/consts";
import getBoxShadow from "./helpers/getBoxShadow";
import getPadding from "../../primitives/ButtonPrimitive/common/getPadding";
import useTheme from "../../hooks/useTheme";
import type { Props as PrimitiveProps } from "../../primitives/ButtonPrimitive";
import ButtonPrimitive from "../../primitives/ButtonPrimitive";
import { ICON_SIZE, BUTTON_SIZE } from "./consts";

type Props = {|
  +selected?: boolean,
  ...PrimitiveProps,
|};

const Button = ({
  selected,
  iconLeft,
  iconRight,
  disabled,
  height = BUTTON_SIZE,
  width = BUTTON_SIZE,
  children,
  ...props
}: Props): React.Node => {
  const theme = useTheme();
  const onlyIcon = Boolean(iconLeft && !children);
  const padding = getPadding(onlyIcon, iconRight, iconLeft, "small", theme);
  const wrappedBoxShadow = state => getBoxShadow({ state, disabled, theme, selected });

  const boxShadow = {
    boxShadow: wrappedBoxShadow(BUTTON_STATES.DEFAULT),
    boxShadowHover: wrappedBoxShadow(BUTTON_STATES.HOVER),
    boxShadowActive: wrappedBoxShadow(BUTTON_STATES.ACTIVE),
    boxShadowFocus: wrappedBoxShadow(BUTTON_STATES.FOCUS),
  };

  return (
    <ButtonPrimitive
      circled
      contentAlign="center"
      icons={{
        width: ICON_SIZE,
        height: ICON_SIZE,
        foreground: selected ? theme.orbit.paletteWhiteNormal : theme.orbit.paletteInkNormal,
      }}
      background={selected ? theme.orbit.paletteBlueNormal : theme.orbit.paletteCloudDark}
      iconLeft={iconLeft}
      height={height}
      width={width}
      disabled={disabled}
      padding={padding}
      {...props}
      {...boxShadow}
    />
  );
};

export default Button;
