// @flow
import { rtlSpacing } from "../../../utils/rtl";
import { SIZE_OPTIONS, TOKENS } from "./consts";
import type { GetPadding } from "./getPadding";

const getSpacing: GetPadding = (onlyIcon, iconRight, iconLeft, size, theme) => {
  const wrappedRtl = value => rtlSpacing(value)({ theme });
  if (onlyIcon) return wrappedRtl(theme.orbit.buttonWithoutTextPadding);
  const tokens = {
    [TOKENS.paddingButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.buttonLargePadding,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.buttonNormalPadding,
      [SIZE_OPTIONS.SMALL]: theme.orbit.buttonSmallPadding,
    },
    [TOKENS.paddingButtonWithIcons]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.buttonLargeBothIconsPadding,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.buttonNormalBothIconsPadding,
      [SIZE_OPTIONS.SMALL]: theme.orbit.buttonSmallBothIconsPadding,
    },
    [TOKENS.paddingButtonWithLeftIcon]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.buttonLargeLeftIconPadding,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.buttonNormalLeftIconPadding,
      [SIZE_OPTIONS.SMALL]: theme.orbit.buttonSmallLeftIconPadding,
    },
    [TOKENS.paddingButtonWithRightIcon]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.buttonLargeRightIconPadding,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.buttonNormalRightIconPadding,
      [SIZE_OPTIONS.SMALL]: theme.orbit.buttonSmallRightIconPadding,
    },
  };
  if (iconLeft && iconRight) return wrappedRtl(tokens[TOKENS.paddingButtonWithIcons][size]);
  if (iconLeft && !iconRight) return wrappedRtl(tokens[TOKENS.paddingButtonWithLeftIcon][size]);
  if (!iconLeft && iconRight) return wrappedRtl(tokens[TOKENS.paddingButtonWithRightIcon][size]);
  return wrappedRtl(tokens[TOKENS.paddingButton][size]);
};

export default getSpacing;
