// @flow
import * as React from "react";
import styled from "styled-components";

import ItineraryPart from "./ItineraryPart";
import defaultTheme from "../defaultTheme";
import getSpacingToken from "../common/getSpacingToken";

import type { Props } from ".";

const StyledItineraryWrapper = styled.div`
  margin-bottom: ${getSpacingToken};
`;

StyledItineraryWrapper.defaultProps = {
  theme: defaultTheme,
};

const Itinerary = ({ children, dataTest, spaceAfter }: Props) => {
  const content = React.Children.toArray(children);

  return (
    <StyledItineraryWrapper data-test={dataTest} spaceAfter={spaceAfter}>
      {content &&
        content.length > 0 &&
        React.Children.map(content, el => {
          if (!React.isValidElement(el)) return null;
          return el;
        })}
    </StyledItineraryWrapper>
  );
};

export { ItineraryPart };
export default Itinerary;
