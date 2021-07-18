// @flow
import { SIZE_OPTIONS, TOKENS } from "./consts";
import type { GetSizeToken } from "./getSizeToken";

const getSizeToken: GetSizeToken = (size, theme) => {
  const tokens = {
    [TOKENS.heightButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.formBoxLargeHeight,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.formBoxNormalHeight,
      [SIZE_OPTIONS.SMALL]: theme.orbit.formBoxSmallHeight,
    },
    [TOKENS.fontSizeButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.buttonLargeFontSize,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.buttonNormalFontSize,
      [SIZE_OPTIONS.SMALL]: theme.orbit.buttonSmallFontSize,
    },
    [TOKENS.spinnerWidth]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.iconMediumSize,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.iconMediumSize,
      [SIZE_OPTIONS.SMALL]: theme.orbit.iconExtraSmallSize,
    },
    [TOKENS.spinnerHeight]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.iconMediumSize,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.iconMediumSize,
      [SIZE_OPTIONS.SMALL]: theme.orbit.iconExtraSmallSize,
    },
  };
  return {
    height: tokens[TOKENS.heightButton][size],
    fontSize: tokens[TOKENS.fontSizeButton][size],
  };
};

export default getSizeToken;
