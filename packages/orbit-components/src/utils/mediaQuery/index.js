// @flow
import { css } from "styled-components";

import { QUERIES } from "./consts";

import type { MediaQueries, GetBreakpointWidth } from ".";

export const getBreakpointWidth: GetBreakpointWidth = (name, theme, pure) => {
  const tokens = {
    [QUERIES.MEDIUMMOBILE]: theme.orbit.breakpointMediumMobile,
    [QUERIES.LARGEMOBILE]: theme.orbit.breakpointLargeMobile,
    [QUERIES.TABLET]: theme.orbit.breakpointTablet,
    [QUERIES.DESKTOP]: theme.orbit.breakpointDesktop,
    [QUERIES.LARGEDESKTOP]: theme.orbit.breakpointLargeDesktop,
  };
  if (pure) {
    return tokens[name];
  }
  return `(min-width: ${tokens[name]}px)`;
};

// $FlowFixMe
const mediaQueries: MediaQueries = Object.keys(QUERIES).reduce(
  /* $FlowFixMe(>=0.115.0) This comment suppresses an error found when upgrading Flow to
   * v0.115.0. To view the error, delete this comment and run Flow. */
  (o, name) => ({
    // $FlowFixMe
    ...o,
    /* $FlowFixMe(>=0.115.0) This comment suppresses an error found when upgrading Flow to
     * v0.115.0. To view the error, delete this comment and run Flow. */
    [QUERIES[name]]: style =>
      css`
        @media ${({ theme }) => getBreakpointWidth(QUERIES[name], theme)} {
          ${style};
        }
      `,
  }),
  {},
);

export default mediaQueries;
