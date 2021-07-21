// @flow
import { css } from "styled-components";

import POSITIONS from "../consts";
import { left, right } from "../../utils/rtl";
import type { GetPosition } from "./getPosition";

const getPosition: GetPosition = ({ position, theme }) => css`
  ${position === POSITIONS.RIGHT ? right({ theme }) : left({ theme })}: 0;
`;
export default getPosition;
