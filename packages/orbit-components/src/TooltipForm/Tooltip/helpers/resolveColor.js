// @flow
import type { ResolveColor } from "./resolveColor.js.flow";

const resolveColor: ResolveColor = ({ isHelp, theme }) => {
  return isHelp ? theme.orbit.paletteBlueDark : theme.orbit.paletteRedNormal;
};

export default resolveColor;
