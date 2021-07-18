// @flow
import { SPACINGS } from "../../utils/layout/consts";
import type { GetSpacing } from "./getSpacing";

const getSpacing: GetSpacing = ({ theme }) => ({
  [SPACINGS.XXXSMALL]: theme.orbit.spaceHalfX,
  [SPACINGS.XXSMALL]: theme.orbit.spaceOneX,
  [SPACINGS.XSMALL]: theme.orbit.spaceTwoX,
  [SPACINGS.SMALL]: theme.orbit.spaceThreeX,
  [SPACINGS.MEDIUM]: theme.orbit.spaceFourX,
  [SPACINGS.LARGE]: theme.orbit.spaceSixX,
  [SPACINGS.XLARGE]: theme.orbit.spaceEightX,
  [SPACINGS.XXLARGE]: theme.orbit.spaceTenX,
});

export default getSpacing;
