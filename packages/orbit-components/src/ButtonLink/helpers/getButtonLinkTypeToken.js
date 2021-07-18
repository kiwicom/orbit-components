// @flow
import { TOKENS, TYPES } from "../consts";
import type { GetButtonLinkTypeToken } from "./getButtonLinkTypeToken";

const getButtonLinkTypeToken: GetButtonLinkTypeToken = (name, type, theme) => {
  const tokens = {
    [TOKENS.background]: {
      [TYPES.PRIMARY]: "transparent",
      [TYPES.SECONDARY]: "transparent",
      [TYPES.CRITICAL]: "transparent",
    },
    [TOKENS.backgroundHover]: {
      [TYPES.PRIMARY]: theme.orbit.paletteProductLightSecondary,
      [TYPES.SECONDARY]: theme.orbit.paletteCloudLightSecondary,
      [TYPES.CRITICAL]: theme.orbit.paletteRedLightSecondary,
    },
    [TOKENS.backgroundActive]: {
      [TYPES.PRIMARY]: theme.orbit.paletteProductLightTertiary,
      [TYPES.SECONDARY]: theme.orbit.paletteCloudLightTertiary,
      [TYPES.CRITICAL]: theme.orbit.paletteRedLightTertiary,
    },
    [TOKENS.foreground]: {
      [TYPES.PRIMARY]: theme.orbit.paletteProductNormal,
      [TYPES.SECONDARY]: theme.orbit.paletteInkNormal,
      [TYPES.CRITICAL]: theme.orbit.paletteRedNormal,
    },
    [TOKENS.foregroundHover]: {
      [TYPES.PRIMARY]: theme.orbit.paletteProductNormalSecondary,
      [TYPES.SECONDARY]: theme.orbit.paletteInkNormalSecondary,
      [TYPES.CRITICAL]: theme.orbit.paletteRedNormalSecondary,
    },
    [TOKENS.foregroundActive]: {
      [TYPES.PRIMARY]: theme.orbit.paletteProductNormalTertiary,
      [TYPES.SECONDARY]: theme.orbit.paletteInkNormalTertiary,
      [TYPES.CRITICAL]: theme.orbit.paletteRedNormalTertiary,
    },
  };
  return tokens[name][type];
};

export default getButtonLinkTypeToken;
