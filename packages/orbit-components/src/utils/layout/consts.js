// @flow
import type { Theme } from "../../defaultTheme";

export const DIRECTIONS = {
  ROW: "row",
  COLUMN: "column",
  ROWREVERSE: "row-reverse",
  COLUMNREVERSE: "column-reverse",
};

export const ALIGNS = {
  START: "start",
  END: "end",
  CENTER: "center",
  STRETCH: "stretch",
  BASELINE: "baseline",
};

export const JUSTIFY = {
  START: "start",
  END: "end",
  CENTER: "center",
  BETWEEN: "between",
  AROUND: "around",
};

export const SPACINGS = {
  NONE: "none",
  XXXSMALL: "XXXSmall",
  XXSMALL: "XXSmall",
  XSMALL: "XSmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  XLARGE: "XLarge",
  XXLARGE: "XXLarge",
};

export const TOKENS = (
  theme: Theme,
): {|
  XLarge: string,
  XSmall: string,
  XXLarge: string,
  XXSmall: string,
  XXXLarge: string,
  XXXSmall: string,
  large: string,
  medium: string,
  none: null,
  small: string,
|} => ({
  none: null,
  XXXSmall: theme.orbit.spaceHalfX,
  XXSmall: theme.orbit.spaceOneX,
  XSmall: theme.orbit.spaceTwoX,
  small: theme.orbit.spaceThreeX,
  medium: theme.orbit.spaceFourX,
  large: theme.orbit.spaceSixX,
  XLarge: theme.orbit.spaceEightX,
  XXLarge: theme.orbit.spaceTenX,
  XXXLarge: "52px",
});
