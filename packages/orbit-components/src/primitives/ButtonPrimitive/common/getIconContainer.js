// @flow
import { SIZE_OPTIONS, TOKENS } from "./consts";
import { rtlSpacing } from "../../../utils/rtl";
import { getSize } from "../../../Icon";
import type { GetIconContainer } from "./getIconContainer";
import { ICON_SIZES } from "../../../Icon/consts";

const getIconSpacing = (onlyIcon, size, theme) => {
  if (onlyIcon) {
    return null;
  }
  const tokens = {
    [TOKENS.marginRightIcon]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.spaceThreeX,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.spaceTwoX,
      [SIZE_OPTIONS.SMALL]: theme.orbit.spaceTwoX,
    },
  };
  return {
    leftMargin: rtlSpacing(`0 ${tokens[TOKENS.marginRightIcon][size]} 0 0`)({ theme }),
    rightMargin: rtlSpacing(`0 0 0 ${tokens[TOKENS.marginRightIcon][size]}`)({ theme }),
  };
};

const getIconContainer: GetIconContainer = ({
  iconLeft,
  children,
  theme,
  size = SIZE_OPTIONS.NORMAL,
  iconForeground,
}) => {
  const onlyIcon = Boolean(iconLeft && !children);
  const sizeIcon = size === ICON_SIZES.SMALL ? ICON_SIZES.SMALL : ICON_SIZES.MEDIUM;
  const computedSize = getSize(sizeIcon)({ theme });
  return {
    icons: {
      height: computedSize,
      width: computedSize,
      ...getIconSpacing(onlyIcon, size, theme),
      ...iconForeground,
    },
  };
};

export default getIconContainer;
