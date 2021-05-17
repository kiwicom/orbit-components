// @flow
import * as React from "react";
import styled from "styled-components";

import ItineraryPart from "./ItineraryPart";
import ItineraryPartPlace from "./ItineraryPart/ItineraryPartPlace";
import ItineraryPartDetail from "./ItineraryPart/ItineraryPartDetail";
import defaultTheme from "../defaultTheme";
import getSpacingToken from "../common/getSpacingToken";
import { ItineraryProvider } from "./context";

import type { Props } from ".";

const StyledItineraryWrapper = styled.div`
  margin-bottom: ${getSpacingToken};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledItineraryWrapper.defaultProps = {
  theme: defaultTheme,
};

const Itinerary = ({ children, dataTest, spaceAfter }: Props): React.Node => {
  return (
    <StyledItineraryWrapper data-test={dataTest} spaceAfter={spaceAfter}>
      <ItineraryProvider>{children}</ItineraryProvider>
    </StyledItineraryWrapper>
  );
};

export { ItineraryPart, ItineraryPartDetail, ItineraryPartPlace };
export default Itinerary;
