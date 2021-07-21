// @flow
import { css } from "styled-components";

import {
  getJustify,
  getAlign,
  getDirection,
  getWrap,
  getGrow,
  getShrink,
} from "../../utils/layout";
import getWidth from "./getWidth";
import getDisplay from "./getDisplay";
import getBasis from "./getBasis";
import getSpacingToken from "../../common/getSpacingToken";
import type { GetViewportFlexStyles } from "./getViewportFlexStyles";

const getViewportFlexStyles: GetViewportFlexStyles = viewport => props => {
  const { flex, theme } = props;
  const { inline, direction, wrap, grow, shrink, basis, justify, align, spaceAfter } = props[
    viewport
  ];

  return css`
    ${flex &&
    css`
      display: ${getDisplay(inline)};
      flex-direction: ${getDirection(direction)};
      flex-wrap: ${getWrap(wrap)};
      flex-grow: ${getGrow(grow)};
      flex-shrink: ${getShrink(shrink)};
      flex-basis: ${getBasis(basis)};
      justify-content: ${getJustify(justify)};
      align-content: ${getAlign(align)};
      align-items: ${getAlign(align)};
    `};
    width: ${getWidth(inline)};
    margin-bottom: ${getSpacingToken({ spaceAfter, theme })};
  `;
};

export default getViewportFlexStyles;
