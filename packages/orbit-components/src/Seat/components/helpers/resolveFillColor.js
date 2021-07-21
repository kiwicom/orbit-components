// @flow
import resolveFocusColor from "./resolveFocusColor";
import resolveAccentColor from "./resolveAccentColor";
import { TYPES } from "../../consts";

import type { Params } from ".";

const resolveFillColor = ({ type, theme, selected, focus }: Params): string | (Params => any) => {
  if (focus) {
    if (type === TYPES.UNAVAILABLE) return "";

    if (!selected) {
      return resolveAccentColor;
    }

    return resolveFocusColor;
  }

  if (type === TYPES.LEGROOM)
    return selected ? theme.orbit.paletteBlueNormal : theme.orbit.paletteBlueLight;

  if (type === TYPES.UNAVAILABLE) return theme.orbit.paletteCloudLight;

  return selected ? theme.orbit.paletteProductNormal : theme.orbit.paletteProductLight;
};

export default resolveFillColor;
