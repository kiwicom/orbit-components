// @flow
import { TYPES } from "../../consts";

import type { Params } from "./index";

const resolveFocusColor = ({ type, theme, selected }: Params): string => {
  if (!selected) return "";
  return type === TYPES.LEGROOM
    ? theme.orbit.paletteBlueNormalSecondary
    : theme.orbit.paletteProductNormalSecondary;
};

export default resolveFocusColor;
