// @flow
import { css } from "styled-components";
import transparentColor from "@kiwicom/orbit-design-tokens/lib/js/transparentColor";

// TODO: adopt new design tokens `formElementFocus` and `formElementErrorFocus`
const formElementFocus = (): any => css`
  box-shadow: ${({ theme, error }) =>
    error
      ? `inset 0 0 0 1px ${theme.orbit.paletteRedNormal}, 0 0 0 3px ${transparentColor(
          theme.orbit.paletteRedNormal,
          15,
        )};`
      : `inset 0 0 0 1px ${theme.orbit.formElementBorderColorFocus}, 0 0 0 3px ${transparentColor(
          theme.orbit.formElementBorderColorFocus,
          15,
        )};`};
`;

export default formElementFocus;
