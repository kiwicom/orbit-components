// @noflow
import { addDecorator } from "@storybook/react";

import "loki/configure-react";
import { QUERIES } from "../src/utils/mediaQuery/consts";
import orbitDecorator from "./orbitDecorator";
import theme from "../src/defaultTheme";

const tokens = {
  smallMobile: 320,
  [QUERIES.MEDIUMMOBILE]: theme.orbit.breakpointMediumMobile,
  [QUERIES.LARGEMOBILE]: theme.orbit.breakpointLargeMobile,
  [QUERIES.TABLET]: theme.orbit.breakpointTablet,
  [QUERIES.DESKTOP]: theme.orbit.breakpointDesktop,
  [QUERIES.LARGEDESKTOP]: theme.orbit.breakpointLargeDesktop,
};

const viewports = Object.entries(tokens).reduce((acc, [viewport, width]) => {
  acc[viewport] = {
    name: viewport,
    styles: {
      width: `${String(width)}px`,
      height: `100vh`,
    },
  };
  return acc;
}, {});

export const parameters = {
  viewport: {
    viewports,
  },
};

addDecorator(orbitDecorator);
