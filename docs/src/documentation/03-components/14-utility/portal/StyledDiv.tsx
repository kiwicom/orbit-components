import styled from "styled-components";

const StyledDiv = styled.div`
  ${({ theme }) => `
    border: solid 1px ${theme.orbit.borderColorCard};
    border-radius: ${theme.orbit.borderRadiusLarge};
    box-shadow: ${theme.boxShadowRaisedSubtle};
    min-height: 100px;
    padding: ${theme.orbit.spaceMedium};
  `}
`;

export default StyledDiv;
