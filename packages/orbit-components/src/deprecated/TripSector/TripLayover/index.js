// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";
import { rtlSpacing } from "../../../utils/rtl";

import type { Props } from ".";

const StyledTripLayover = styled.div`
  margin: ${({ theme }) =>
    rtlSpacing(`${theme.orbit.spaceSmall} 0 ${theme.orbit.spaceSmall}
    ${theme.orbit.spaceLarge}`)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTripLayover.defaultProps = {
  theme: defaultTheme,
};

const TripLayover = ({ children, dataTest }: Props): React.Node => (
  <StyledTripLayover data-test={dataTest}>{children}</StyledTripLayover>
);

export default TripLayover;
