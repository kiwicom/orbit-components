// @flow
import * as React from "react";
import styled from "styled-components";

import { usePart } from "../../context";
import defaultTheme from "../../../../defaultTheme";
import Stack from "../../../../Stack";
import Text from "../../../../Text";
import ItineraryIcon from "../../ItineraryIcon";

import type { Props } from ".";

const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  opacity: ${({ hidden }) => (hidden ? `0.8` : `1`)};
  padding: 0 ${({ theme }) => theme.orbit.spaceSmall};
`;

StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledDate = styled.div`
  min-width: ${({ minWidth }) => minWidth}px;
`;

const ItineraryPartPlace = React.forwardRef<Props, HTMLDivElement>(
  ({ date, time, city, place, hidden, minWidth = 60 }, ref) => {
    const { calculatedWidth } = usePart();
    return (
      <StyledWrapper hidden={hidden}>
        <Stack inline align="center" spacing="small">
          <StyledDate minWidth={calculatedWidth || minWidth} ref={ref}>
            <Stack flex direction="column" spacing="XSmall" align="end">
              <Text weight="bold">{time}</Text>
              <Text type="secondary" size="small" align="right">
                {date}
              </Text>
            </Stack>
          </StyledDate>
          <ItineraryIcon />
          <Stack spacing="XSmall">
            <Text weight="bold">{city}</Text>
            <Text type="secondary" size="small">
              {place}
            </Text>
          </Stack>
        </Stack>
      </StyledWrapper>
    );
  },
);

ItineraryPartPlace.displayName = "ItineraryPartPlace";

export default ItineraryPartPlace;
