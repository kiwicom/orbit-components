// @flow
import transparentColor from "@kiwicom/orbit-design-tokens/lib/js/transparentColor";

import { TOKENS, TYPE_OPTIONS } from "../consts";
import type { GetSocialButtonTypeToken } from "./getSocialButtonTypeToken";

const getSocialButtonTypeToken: GetSocialButtonTypeToken = (name, type, theme) => {
  const tokens = {
    [TOKENS.backgroundButton]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteCloudDark,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteCloudDark,
      [TYPE_OPTIONS.TWITTER]: theme.orbit.paletteCloudDark,
    },
    [TOKENS.backgroundButtonHover]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteInkNormalSecondary,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteCloudNormalSecondary,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteCloudNormalSecondary,
      [TYPE_OPTIONS.TWITTER]: theme.orbit.paletteCloudNormalSecondary,
    },
    [TOKENS.backgroundButtonActive]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteInkNormalTertiary,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteCloudNormalTertiary,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteCloudNormalTertiary,
      [TYPE_OPTIONS.TWITTER]: theme.orbit.paletteCloudNormalTertiary,
    },
    // TODO: remove, not used in render
    [TOKENS.backgroundButtonFocus]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteCloudDark,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteCloudDark,
      [TYPE_OPTIONS.TWITTER]: theme.orbit.paletteCloudDark,
    },
    [TOKENS.colorTextButton]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteWhiteNormal,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.TWITTER]: theme.orbit.paletteInkNormal,
    },
    [TOKENS.colorTextButtonHover]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteWhiteNormal,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.TWITTER]: theme.orbit.paletteInkNormal,
    },
    [TOKENS.colorTextButtonActive]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteWhiteNormal,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.TWITTER]: theme.orbit.paletteInkNormal,
    },
    [TOKENS.iconColor]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteWhiteNormal,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteSocialFacebook,
      [TYPE_OPTIONS.GOOGLE]: "currentColor",
      [TYPE_OPTIONS.TWITTER]: "#00ACEE", // TODO: add token
    },
    [TOKENS.borderColorButtonFocus]: {
      [TYPE_OPTIONS.APPLE]: transparentColor(theme.orbit.paletteInkLight, 50),
      [TYPE_OPTIONS.FACEBOOK]: transparentColor(theme.orbit.paletteInkLight, 30),
      [TYPE_OPTIONS.GOOGLE]: transparentColor(theme.orbit.paletteInkLight, 50),
      [TYPE_OPTIONS.TWITTER]: transparentColor(theme.orbit.paletteInkLight, 50),
    },
  };
  return tokens[name][type];
};

export default getSocialButtonTypeToken;
