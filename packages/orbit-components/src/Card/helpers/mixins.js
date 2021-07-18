// @flow
import { css } from "styled-components";

import mq from "../../utils/mediaQuery";
import defaultTheme from "../../defaultTheme";
import { getBorder } from "./borders";

export const CardElement: any = css`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  box-shadow: ${({ expanded, theme }) => expanded && theme.orbit.elevationActionActiveBoxShadow};
  border-top: ${({ expanded }) => !expanded && getBorder};
  background: ${({ theme }) => theme.orbit.elevationFlatBackground};
  ${mq.largeMobile(css`
    border-left: ${({ expanded }) => !expanded && getBorder};
    border-right: ${({ expanded }) => !expanded && getBorder};
  `)}
`;

CardElement.defaultProps = {
  theme: defaultTheme,
};
