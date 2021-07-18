import { mediaQueries } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

const StyledTocWrapper = styled.div`
  ${mediaQueries.tablet(css`
    order: 2;
  `)}

  padding-left: ${({ theme }) => theme.orbit.spaceThreeX};
  > * {
    position: sticky;
    top: 0;
    transition: top ${({ theme }) => theme.orbit.durationNormal} ease-in-out;
  }
`;

export default StyledTocWrapper;
