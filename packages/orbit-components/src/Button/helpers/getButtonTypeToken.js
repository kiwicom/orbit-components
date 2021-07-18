// @flow
import transparentColor from "@kiwicom/orbit-design-tokens/lib/js/transparentColor";

import { TOKENS, TYPE_OPTIONS } from "../consts";
import type { GetButtonTypeToken } from "./getButtonTypeToken";

const getButtonTypeToken: GetButtonTypeToken = (name, type, theme) => {
  const tokens = {
    [TOKENS.backgroundButton]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.buttonPrimaryBackground,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.buttonSecondaryBackground,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalBackground,
      [TYPE_OPTIONS.WHITE]: theme.orbit.buttonWhiteBackground,
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.paletteProductLight,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedLight,
    },
    [TOKENS.backgroundButtonHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.buttonPrimaryBackgroundHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.buttonSecondaryBackgroundHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalBackgroundHover,
      [TYPE_OPTIONS.WHITE]: theme.orbit.buttonWhiteBackgroundHover,
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.paletteProductLightSecondary,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedLightSecondary,
    },
    [TOKENS.backgroundButtonActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.buttonPrimaryBackgroundActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.buttonSecondaryBackgroundActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalBackgroundActive,
      [TYPE_OPTIONS.WHITE]: theme.orbit.buttonWhiteBackgroundActive,
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.paletteProductLightTertiary,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedLightTertiary,
    },
    [TOKENS.backgroundButtonFocus]: {
      [TYPE_OPTIONS.PRIMARY]: transparentColor(theme.orbit.paletteProductNormal, 10),
      [TYPE_OPTIONS.SECONDARY]: transparentColor(theme.orbit.paletteInkLight, 10),
      [TYPE_OPTIONS.CRITICAL]: transparentColor(theme.orbit.paletteRedNormal, 10),
      [TYPE_OPTIONS.WHITE]: transparentColor(theme.orbit.paletteWhiteNormal, 20),
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.paletteProductLight,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedLight,
    },
    [TOKENS.colorTextButton]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.buttonPrimaryForeground,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.buttonSecondaryForeground,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalForeground,
      [TYPE_OPTIONS.WHITE]: theme.orbit.buttonWhiteForeground,
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.paletteProductNormal,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedNormal,
    },
    [TOKENS.colorTextButtonHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.buttonPrimaryForegroundHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.buttonSecondaryForegroundHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalForegroundHover,
      [TYPE_OPTIONS.WHITE]: theme.orbit.buttonWhiteForegroundHover,
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.paletteProductDark,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedDark,
    },
    [TOKENS.colorTextButtonActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.buttonPrimaryForegroundActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.buttonSecondaryForegroundActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalForegroundActive,
      [TYPE_OPTIONS.WHITE]: theme.orbit.buttonWhiteForegroundActive,
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.paletteProductDark,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedDark,
    },
    [TOKENS.borderColorButtonFocus]: {
      [TYPE_OPTIONS.PRIMARY]: transparentColor(theme.orbit.paletteProductNormal, 50),
      [TYPE_OPTIONS.SECONDARY]: transparentColor(theme.orbit.paletteInkLight, 30),
      [TYPE_OPTIONS.CRITICAL]: transparentColor(theme.orbit.paletteRedNormal, 50),
      // because it's not possible to see outline on the white bg, we use active token
      [TYPE_OPTIONS.WHITE]: transparentColor(theme.orbit.paletteWhiteNormalTertiary, 50),
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: transparentColor(theme.orbit.paletteProductNormal, 50),
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: transparentColor(theme.orbit.paletteRedNormal, 50),
    },
  };
  return tokens[name][type];
};

export default getButtonTypeToken;
