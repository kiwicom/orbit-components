// @flow
import { TYPES } from "../../consts";

import type { Params } from ".";

const resolveTextColor = ({ type, theme, selected }: Params): string => {
  if (selected) return theme.orbit.paletteWhite;
  if (type === TYPES.LEGROOM) return theme.orbit.paletteBlueDark;
  return theme.orbit.paletteProductDark;
};

export default resolveTextColor;
