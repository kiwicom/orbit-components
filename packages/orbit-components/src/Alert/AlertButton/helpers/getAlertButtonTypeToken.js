// @flow
import transparentColor from "@kiwicom/orbit-design-tokens/lib/js/transparentColor";

import { TOKENS, TYPE_OPTIONS } from "../consts";
import type { GetAlertButtonTypeToken } from "./getAlertButtonTypeToken";

const getAlertButtonTypeToken: GetAlertButtonTypeToken = (name, type, theme) => {
  const tokens = {
    [TOKENS.backgroundButton]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.alertButtonInfoBackground,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.alertButtonSuccessBackground,
      [TYPE_OPTIONS.WARNING]: theme.orbit.alertButtonWarningBackground,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalBackground,
      [TYPE_OPTIONS.INFO_SUBTLE]: theme.orbit.paletteBlueLightSecondary,
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: theme.orbit.paletteGreenLightSecondary,
      [TYPE_OPTIONS.WARNING_SUBTLE]: theme.orbit.paletteOrangeLightSecondary,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedLightSecondary,
    },
    [TOKENS.backgroundButtonHover]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.alertButtonInfoBackgroundHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.alertButtonSuccessBackgroundHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.alertButtonWarningBackgroundHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalBackgroundHover,
      [TYPE_OPTIONS.INFO_SUBTLE]: theme.orbit.paletteBlueLightSecondary,
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: theme.orbit.paletteGreenLightSecondary,
      [TYPE_OPTIONS.WARNING_SUBTLE]: theme.orbit.paletteOrangeLightSecondary,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedLightSecondary,
    },
    [TOKENS.backgroundButtonActive]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.alertButtonInfoBackgroundActive,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.alertButtonSuccessBackgroundActive,
      [TYPE_OPTIONS.WARNING]: theme.orbit.alertButtonWarningBackgroundActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalBackgroundActive,
      [TYPE_OPTIONS.INFO_SUBTLE]: theme.orbit.paletteBlueLightTertiary,
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: theme.orbit.paletteGreenLightTertiary,
      [TYPE_OPTIONS.WARNING_SUBTLE]: theme.orbit.paletteOrangeLightTertiary,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedLightTertiary,
    },
    // TODO: We don't use backgroundFocus on buttons and therefore can be deleted
    [TOKENS.backgroundButtonFocus]: {
      [TYPE_OPTIONS.INFO]: transparentColor(theme.orbit.paletteBlueNormal, 10),
      [TYPE_OPTIONS.SUCCESS]: transparentColor(theme.orbit.paletteGreenNormal, 10),
      [TYPE_OPTIONS.WARNING]: transparentColor(theme.orbit.paletteOrangeNormal, 10),
      [TYPE_OPTIONS.CRITICAL]: transparentColor(theme.orbit.paletteRedNormal, 10),
      [TYPE_OPTIONS.INFO_SUBTLE]: theme.orbit.paletteBlueLight,
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: theme.orbit.paletteGreenLight,
      [TYPE_OPTIONS.WARNING_SUBTLE]: theme.orbit.paletteOrangeLight,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedLight,
    },
    [TOKENS.colorTextButton]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.alertButtonInfoForeground,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.alertButtonSuccessForeground,
      [TYPE_OPTIONS.WARNING]: theme.orbit.alertButtonWarningForeground,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalForeground,
      [TYPE_OPTIONS.INFO_SUBTLE]: theme.orbit.paletteBlueDark,
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: theme.orbit.paletteGreenDark,
      [TYPE_OPTIONS.WARNING_SUBTLE]: theme.orbit.paletteOrangeDark,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedDark,
    },
    [TOKENS.borderColorButtonFocus]: {
      [TYPE_OPTIONS.INFO]: transparentColor(theme.orbit.paletteBlueNormal, 50),
      [TYPE_OPTIONS.SUCCESS]: transparentColor(theme.orbit.paletteGreenNormal, 50),
      [TYPE_OPTIONS.WARNING]: transparentColor(theme.orbit.paletteOrangeNormal, 50),
      [TYPE_OPTIONS.CRITICAL]: transparentColor(theme.orbit.paletteRedNormal, 50),
      [TYPE_OPTIONS.INFO_SUBTLE]: transparentColor(theme.orbit.paletteBlueNormal, 50),
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: transparentColor(theme.orbit.paletteGreenNormal, 50),
      [TYPE_OPTIONS.WARNING_SUBTLE]: transparentColor(theme.orbit.paletteOrangeNormal, 50),
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: transparentColor(theme.orbit.paletteRedNormal, 50),
    },
  };
  return tokens[name][type];
};

export default getAlertButtonTypeToken;
