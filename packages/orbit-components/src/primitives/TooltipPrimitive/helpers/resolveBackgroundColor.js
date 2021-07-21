// @flow
import type { ResolveBackgroundColor } from "./resolveBackgroundColor";

const backgroundColor: ResolveBackgroundColor = ({ theme, error, help }) => {
  if (error) return theme.orbit.paletteRedNormal;
  if (help) return theme.orbit.paletteBlueNormal;

  return theme.orbit.paletteInkNormal;
};

export default backgroundColor;
