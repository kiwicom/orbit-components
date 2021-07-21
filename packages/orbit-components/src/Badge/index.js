// @flow
import * as React from "react";

import BadgePrimitive from "../primitives/BadgePrimitive";
import { TYPE_OPTIONS, TOKENS } from "./consts";
import useTheme from "../hooks/useTheme";

import type { Props } from ".";

const getTypeToken = ({ name, theme, type }) => {
  const tokens = {
    [TOKENS.background]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.paletteCloudLight,
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueLight,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenLight,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeLight,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedLight,
      [TYPE_OPTIONS.DARK]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.INFO_INVERTED]: theme.orbit.paletteBlueNormal,
      [TYPE_OPTIONS.CRITICAL_INVERTED]: theme.orbit.paletteRedNormal,
      [TYPE_OPTIONS.SUCCESS_INVERTED]: theme.orbit.paletteGreenNormal,
      [TYPE_OPTIONS.WARNING_INVERTED]: theme.orbit.paletteOrangeNormal,
    },
    [TOKENS.color]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDark,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDark,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDark,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDark,
      [TYPE_OPTIONS.DARK]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.INFO_INVERTED]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.CRITICAL_INVERTED]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.SUCCESS_INVERTED]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.WARNING_INVERTED]: theme.orbit.paletteWhite,
    },
    [TOKENS.border]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.paletteCloudDark,
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueLightHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenLightHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeLightHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedLightHover,
      [TYPE_OPTIONS.DARK]: null,
      [TYPE_OPTIONS.WHITE]: null,
      [TYPE_OPTIONS.INFO_INVERTED]: null,
      [TYPE_OPTIONS.CRITICAL_INVERTED]: null,
      [TYPE_OPTIONS.SUCCESS_INVERTED]: null,
      [TYPE_OPTIONS.WARNING_INVERTED]: null,
    },
  };
  return tokens[name][type];
};

const Badge = (props: Props): React.Node => {
  const theme = useTheme();
  const { type = TYPE_OPTIONS.NEUTRAL, icon, children, ariaLabel, dataTest } = props;

  return (
    <BadgePrimitive
      background={getTypeToken({ name: TOKENS.background, theme, type })}
      foregroundColor={getTypeToken({ name: TOKENS.color, theme, type })}
      borderColor={getTypeToken({ name: TOKENS.border, theme, type })}
      icon={icon}
      ariaLabel={ariaLabel}
      dataTest={dataTest}
    >
      {children}
    </BadgePrimitive>
  );
};

export default Badge;
