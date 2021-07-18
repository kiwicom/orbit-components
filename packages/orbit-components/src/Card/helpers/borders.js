// @flow
import type { ThemeProps } from "../../defaultTheme";

export const getBorder = ({ theme }: ThemeProps): string =>
  `${theme.orbit.elevationFlatBorderSize} solid ${theme.orbit.elevationFlatBorderColor}`;

export const getBorderRadius = ({ theme }: ThemeProps): string =>
  `${theme.orbit.borderRadiusNormal}`;

export const getBorderRadiusMobile = ({ theme }: ThemeProps): string =>
  `${theme.orbit.borderRadiusLarge}`;
