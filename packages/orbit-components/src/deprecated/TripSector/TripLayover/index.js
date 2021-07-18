// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";
import { rtlSpacing } from "../../../utils/rtl";

import type { Props } from "./index";

const StyledTripLayover = styled.div`
  margin: ${({ theme }) =>
    rtlSpacing(`${theme.orbit.spaceThreeX} 0 ${theme.orbit.spaceThreeX}
    ${theme.orbit.spaceSixX}`)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTripLayover.defaultProps = {
  theme: defaultTheme,
};

const TripLayover = ({ children, dataTest }: Props): React.Node => (
  <StyledTripLayover data-test={dataTest}>{children}</StyledTripLayover>
);

export default TripLayover;
