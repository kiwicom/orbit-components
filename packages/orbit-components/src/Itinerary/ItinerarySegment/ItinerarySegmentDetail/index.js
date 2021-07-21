// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { left } from "../../../utils/rtl";
import ChevronUp from "../../../icons/ChevronUp";
import ChevronDown from "../../../icons/ChevronDown";
import themeDefault from "../../../defaultTheme";
import Stack from "../../../Stack";
import Text from "../../../Text";
import Slide from "../../../utils/Slide";
import useBoundingRect from "../../../hooks/useBoundingRect";
import randomID from "../../../utils/randomID";
import { usePart } from "../context";
import { useWidth } from "../../context";
import ItineraryIcon from "../ItineraryIcon";

import type { Props } from ".";

const StyledWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
`;

const StyledInnerWrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.orbit.spaceSmall};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledInnerWrapper.defaultProps = {
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

const StyledExpandable = styled.div`
  ${({ offset, theme }) => css`
    padding: ${theme.orbit.spaceSmall} 0;
    margin-${left}: ${offset + 16}px;
    background: ${theme.orbit.paletteCloudLight};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledExpandable.defaultProps = {
  theme: themeDefault,
};

const StyledExpandableContent = styled.div`
  ${({ offset }) => css`
    margin-${left}: ${offset + 16}px;
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledExpandableContent.defaultProps = {
  theme: themeDefault,
};

const ItinerarySegmentDetail = ({ duration, summary, children }: Props): React.Node => {
  const { expanded, setExpanded, hasStatus } = usePart();
  const { calculatedWidth } = useWidth();
  const [{ height }, ref] = useBoundingRect({ height: 0 });

  const slideID = React.useMemo(() => randomID("slideID"), []);
  const labelID = React.useMemo(() => randomID("labelID"), []);

  return (
    <>
      <StyledWrapper
        expanded={expanded}
        hasStatus={hasStatus}
        onClick={() => setExpanded(!expanded)}
      >
        <StyledInnerWrapper>
          <Stack align="center" spacing="small" spaceAfter="small">
            <StyledDuration minWidth={calculatedWidth || 60}>
              <Text weight="bold">{duration}</Text>
            </StyledDuration>
            <ItineraryIcon isDetails />
            <Stack
              justify="center"
              shrink
              direction="column"
              spacing={expanded ? "medium" : "none"}
            >
              <StyledSummary>{summary}</StyledSummary>
            </Stack>
            {expanded ? <ChevronUp /> : <ChevronDown />}
          </Stack>
        </StyledInnerWrapper>
        <Slide maxHeight={height} expanded={expanded} id={slideID} ariaLabelledBy={labelID}>
          <StyledExpandable ref={ref} onClick={() => setExpanded(!expanded)}>
            <StyledExpandableContent offset={calculatedWidth}>{children}</StyledExpandableContent>
          </StyledExpandable>
        </Slide>
      </StyledWrapper>
    </>
  );
};

export default ItinerarySegmentDetail;
