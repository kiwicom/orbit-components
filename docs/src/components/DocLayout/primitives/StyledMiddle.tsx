import styled, { css } from "styled-components";
import { mediaQueries } from "@kiwicom/orbit-components";

import { CONTENT_PADDING, MAX_CONTENT_WIDTH } from "../../../consts";

const StyledMiddle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${CONTENT_PADDING} ${CONTENT_PADDING} 0;
    width: calc(100% - (${CONTENT_PADDING} * 2));
    max-width: ${MAX_CONTENT_WIDTH};
    margin: 0 auto;
    box-sizing: content-box;
    ${mediaQueries.largeDesktop(css`
      flex-direction: row;
      > * + * {
        margin-left: ${theme.orbit.spaceSixX};
      }
    `)};
  `}
`;

export default StyledMiddle;
