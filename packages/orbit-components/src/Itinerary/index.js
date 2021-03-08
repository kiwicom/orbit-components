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

StyledItineraryWrapper.defaultProps = {
  theme: defaultTheme,
};

const Itinerary = ({ children, dataTest, spaceAfter }: Props) => {
  return (
    <StyledItineraryWrapper data-test={dataTest} spaceAfter={spaceAfter}>
      <ItineraryProvider>{children}</ItineraryProvider>
    </StyledItineraryWrapper>
  );
};

export { ItineraryPart, ItineraryPartDetail, ItineraryPartPlace };
export default Itinerary;
