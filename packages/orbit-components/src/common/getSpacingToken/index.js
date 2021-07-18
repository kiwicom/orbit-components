// @flow
import SPACINGS_AFTER from "./consts";

import type { Props } from ".";

const getSpacingToken = ({ spaceAfter, theme }: Props): void | string => {
  const tokens = {
    [SPACINGS_AFTER.NONE]: "0",
    [SPACINGS_AFTER.SMALLEST]: theme.orbit.spaceOneX,
    [SPACINGS_AFTER.SMALL]: theme.orbit.spaceTwoX,
    [SPACINGS_AFTER.NORMAL]: theme.orbit.spaceThreeX,
    [SPACINGS_AFTER.MEDIUM]: theme.orbit.spaceFourX,
    [SPACINGS_AFTER.LARGE]: theme.orbit.spaceSixX,
    [SPACINGS_AFTER.LARGEST]: theme.orbit.spaceEightX,
  };
  return spaceAfter && tokens[spaceAfter];
};

export default getSpacingToken;
