// @flow
import { css } from "styled-components";

import mediaQueries from "../../utils/mediaQuery";
import { DEVICES } from "../../utils/mediaQuery/consts";
import type { GetViewportHideStyles } from "./getViewportHideStyles";

const getViewportHideStyles: GetViewportHideStyles = (on, resolveDisplayProp = () => "block") =>
  DEVICES.map(viewport =>
    viewport in mediaQueries
      ? css`
          ${mediaQueries[viewport](css`
            display: ${on.indexOf(viewport) !== -1 ? "none" : resolveDisplayProp()};
          `)};
        `
      : // "smallMobile" is not media query so we need to check it explicitly
        viewport === "smallMobile" &&
        on.indexOf(viewport) !== -1 &&
        css`
          display: none;
        `,
  );

export default getViewportHideStyles;
