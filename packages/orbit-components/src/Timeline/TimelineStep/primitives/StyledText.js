// @flow
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";

const StyledText: any = styled.div`
  height: ${({ theme }) => theme.orbit.spaceFourX};
  text-align: center;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledText.defaultProps = {
  theme: defaultTheme,
};

export default StyledText;
