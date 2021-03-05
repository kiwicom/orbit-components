// @flow
import React from "react";
import styled, { css } from "styled-components";

import ChevronUp from "../../../../icons/ChevronUp";
import ChevronDown from "../../../../icons/ChevronDown";
import themeDefault from "../../../../defaultTheme";
import Stack from "../../../../Stack";
import Text from "../../../../Text";
import Slide from "../../../../utils/Slide";
import useBoundingRect from "../../../../hooks/useBoundingRect";
import randomID from "../../../../utils/randomID";
import { usePart } from "../../context";
import { right } from "../../../../utils/rtl";
import ItineraryIcon from "../../ItineraryIcon";

import type { Props } from ".";

const StyledWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    padding: ${theme.orbit.spaceMedium} ${theme.orbit.spaceSmall};
    &:hover {
      transition: padding ${theme.orbit.durationFast} ease-in;
      background: ${theme.orbit.paletteCloudLight};
    }
  `}
`;

StyledWrapper.defaultProps = {
  theme: themeDefault,
};

const StyledSummary = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const StyledDuration = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: ${({ minWidth }) => minWidth}px;
`;

const StyledChevronWrapper = styled.div`
  ${({ expanded, theme }) => css`
    position: ${expanded && "absolute"};
    top: 0;
    ${right}: 0;
    padding: ${theme.orbit.spaceXXSmall} ${theme.orbit.spaceSmall};
  `};
`;

StyledChevronWrapper.defaultProps = {
  theme: themeDefault,
};

const StyledExpandable = styled.div``;

const ItineraryPartDetail = ({ duration, summary, children }: Props) => {
  const { expanded, setExpanded, hasStatus, calculatedWidth } = usePart();
  const [{ height }, ref] = useBoundingRect({ height: 0 });

  const slideID = React.useMemo(() => randomID("slideID"), []);
  const labelID = React.useMemo(() => randomID("labelID"), []);

  return (
    <StyledWrapper expanded={expanded} hasStatus={hasStatus} onClick={() => setExpanded(!expanded)}>
      <Stack align="center" spacing="XSmall">
        <StyledDuration minWidth={calculatedWidth}>
          <Text weight="bold">{duration}</Text>
        </StyledDuration>
        <ItineraryIcon isDetails />
        <Stack
          inline
          justify="center"
          shrink
          direction="column"
          spacing={expanded ? "medium" : "none"}
        >
          <StyledSummary>{summary}</StyledSummary>
          <Slide maxHeight={height} expanded={expanded} id={slideID} ariaLabelledBy={labelID}>
            <StyledExpandable ref={ref} onClick={() => setExpanded(!expanded)}>
              {children}
            </StyledExpandable>
          </Slide>
        </Stack>
        <StyledChevronWrapper expanded={expanded}>
          {expanded ? <ChevronUp /> : <ChevronDown color="secondary" />}
        </StyledChevronWrapper>
      </Stack>
    </StyledWrapper>
  );
};

export default ItineraryPartDetail;
