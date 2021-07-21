// @flow
import * as React from "react";

import { getBreakpointWidth } from "../../utils/mediaQuery";
import useTheme from "../../hooks/useTheme";
import type { UseMediaQuery } from "../../hooks/useMediaQuery";

const createBreakpoints = theme => ({
  isDesktop: getBreakpointWidth("desktop", theme),
  isLargeDesktop: getBreakpointWidth("largeDesktop", theme),
  isTablet: getBreakpointWidth("tablet", theme),
  isLargeMobile: getBreakpointWidth("largeMobile", theme),
  isMediumMobile: getBreakpointWidth("mediumMobile", theme),
  prefersReducedMotion: "(prefers-reduced-motion: reduce)",
});

const createMediaQueryList = breakpoints => {
  if (typeof window !== "undefined") {
    /* $FlowFixMe(>=0.115.0) This comment suppresses an error found when upgrading Flow to
     * v0.115.0. To view the error, delete this comment and run Flow. */
    return Object.keys(breakpoints).map(q => ({ [q]: window.matchMedia(breakpoints[q]) }));
  }
  return [];
};

const useMediaQueryContext: UseMediaQuery = () => {
  const theme = useTheme();
  const breakpoints = React.useMemo(() => createBreakpoints(theme), [theme]);
  const mediaQueryLists = React.useMemo(
    () =>
      Object.assign(
        {
          isDesktop: {},
          isLargeDesktop: {},
          isTablet: {},
          isLargeMobile: {},
          isMediumMobile: {},
          prefersReducedMotion: {},
        },
        ...createMediaQueryList(breakpoints),
      ),
    [breakpoints],
  );
  const getValue = React.useCallback(() => {
    return Object.assign(
      {
        isDesktop: false,
        isLargeDesktop: false,
        isTablet: false,
        isLargeMobile: false,
        isMediumMobile: false,
        prefersReducedMotion: false,
      },
      /* $FlowFixMe(>=0.115.0) This comment suppresses an error found when upgrading Flow to
       * v0.115.0. To view the error, delete this comment and run Flow. */
      ...Object.keys(mediaQueryLists).map(q => ({ [q]: mediaQueryLists[q]?.matches })),
    );
  }, [mediaQueryLists]);

  const [value, setValue] = React.useState(getValue);

  React.useEffect(() => {
    const handler = () => setValue(getValue);
    Object.keys(mediaQueryLists).forEach(mql => {
      mediaQueryLists[mql].addListener(handler);
    });
    return () => {
      Object.keys(mediaQueryLists).forEach(mql => mediaQueryLists[mql].removeListener(handler));
    };
  }, [getValue, mediaQueryLists]);
  return value;
};

export default useMediaQueryContext;
