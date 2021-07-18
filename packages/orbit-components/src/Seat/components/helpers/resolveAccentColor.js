// @flow
import { TYPES } from "../../consts";

import type { Params } from "./index";

const resolveAccentColor = ({ type, theme, selected }: Params): string => {
  if (type === TYPES.LEGROOM)
    return selected ? theme.orbit.paletteBlueNormal : theme.orbit.paletteBlueLightTertiary;

  if (type === TYPES.UNAVAILABLE) return theme.orbit.paletteCloudLightTertiary;

  return selected ? theme.orbit.paletteProductNormal : theme.orbit.paletteProductLightTertiary;
};

export default resolveAccentColor;
