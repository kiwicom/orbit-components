// @flow
import * as React from "react";
import styled from "styled-components";

import Calendar from "../../../icons/Calendar";
import defaultTheme from "../../../defaultTheme";
import Text, { StyledText } from "../../../Text";
import Clock from "../../../icons/Clock";
import Stack from "../../../Stack";
import Badge from "../../../Badge";

import type { Props } from "./index";

const StyledTripDate = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.orbit.spaceTwoX};
  padding-bottom: ${({ theme }) => theme.orbit.spaceOneX};
  background: ${({ theme }) => theme.orbit.paletteWhiteNormal};
  z-index: 1;

  ${StyledText} {
    font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
    height: ${({ theme }) => theme.orbit.iconExtraSmallSize};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTripDate.defaultProps = {
  theme: defaultTheme,
};

const TripDate = ({ children, dataTest, duration }: Props): React.Node => (
  <StyledTripDate data-test={dataTest}>
    <Stack direction="row" spacing="XSmall" shrink>
      <Calendar size="small" />
      <Text>{children}</Text>
    </Stack>
    {duration && <Badge icon={<Clock />}>{duration}</Badge>}
  </StyledTripDate>
);

export default TripDate;
