// @flow
import { TYPES } from "../../consts";

import type { Params } from "./index";

const resolveHoverColor = ({ theme, type }: Params): string => {
  if (type === TYPES.UNAVAILABLE) return "";
  if (type === TYPES.LEGROOM) return theme.orbit.paletteBlueLightSecondary;
  return theme.orbit.paletteProductLightSecondary;
};

export default resolveHoverColor;
