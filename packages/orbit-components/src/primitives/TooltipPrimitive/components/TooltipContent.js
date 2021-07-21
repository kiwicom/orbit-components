// @flow
import * as React from "react";
import styled from "styled-components";

import useTheme from "../../../hooks/useTheme";
import resolveContainerPosition from "../helpers/resolveContainerPosition";
import resolveTooltipArrowAlign from "../helpers/resolveTooltipArrowAlign";
import resolveTooltipArrowPosition from "../helpers/resolveTooltipArrowPosition";
import { StyledText } from "../../../Text";
import { Item } from "../../../List/ListItem";
import tooltipSize from "../helpers/tooltipSize";
import resolveContainerAlign from "../helpers/resolveContainerAlign";
import tooltipArrowStyle from "../helpers/tooltipArrowStyle";
import tooltipPadding from "../helpers/tooltipPadding";
import defaultTheme from "../../../defaultTheme";
import { StyledTextLink } from "../../../TextLink";
import calculateTooltipPosition from "../helpers/calculateTooltipPosition";
import calculateTooltipAlign from "../helpers/calculateTooltipAlign";
import sortPositionsAndAligns from "../helpers/sortPositionsAndAligns";
import useDimensions from "../hooks/useDimensions";
import transition from "../../../utils/transition";
import FOCUSABLE_ELEMENT_SELECTORS from "../../../hooks/useFocusTrap/consts";
import type { Props } from "./TooltipContent";

const StyledTooltip = styled.div`
  width: 100%;
`;

const StyledTooltipWrapper = styled.div`
  display: block;
  position: absolute;
  width: auto;
  max-width: ${tooltipSize};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  background-color: ${({ theme }) => theme.orbit.paletteInkNormal};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowRaised};
  padding: ${tooltipPadding};
  visibility: ${({ shown }) => (shown ? "visible" : "hidden")};
  opacity: ${({ shown }) => (shown ? "1" : "0")};
  transition: ${transition(["opacity", "visibility"], "fast", "ease-in-out")};
  z-index: 10012; // TODO: use some good value
  overflow-y: scroll;
  overflow: visible;

  img {
    max-width: 100%;
  }

  // prevent position, IEs don't have initial YAY
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;

  // tooltip positions
  ${resolveContainerPosition};
  ${resolveContainerAlign};

  &::after {
    width: 0;
    height: 0;
    border-style: solid;
    content: " ";
    display: block;
    position: absolute;

    ${tooltipArrowStyle};

    ${resolveTooltipArrowPosition};
    ${resolveTooltipArrowAlign};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTooltipWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledTooltipContent = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
  font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
  line-height: ${({ theme }) => theme.orbit.lineHeightTextNormal};
  color: ${({ theme }) => theme.orbit.paletteWhite};
  margin-bottom: 0;

  & ${StyledText}, ${Item} {
    font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
    font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
    color: ${({ theme }) => theme.orbit.paletteWhite};
  }

  & ${StyledTextLink} {
    color: ${({ theme }) => theme.orbit.paletteWhite};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTooltipContent.defaultProps = {
  theme: defaultTheme,
};

const TooltipContent = ({
  dataTest,
  shown,
  size,
  tooltipId,
  children,
  onClose,
  onCloseMobile,
  onEnter,
  preferredPosition,
  preferredAlign,
  containerRef,
  parent,
}: Props): React.Node => {
  const theme = useTheme();
  const tooltip = React.useRef(null);
  const content = React.useRef(null);
  const [positions, aligns] = React.useMemo(
    () => sortPositionsAndAligns(preferredPosition, preferredAlign, theme),
    [preferredAlign, preferredPosition, theme],
  );
  const dimensions = useDimensions({ containerRef, tooltip, content }, children, parent);
  const position = React.useMemo(() => calculateTooltipPosition(positions, dimensions), [
    dimensions,
    positions,
  ]);
  const align = React.useMemo(() => calculateTooltipAlign(position, aligns, dimensions), [
    aligns,
    dimensions,
    position,
  ]);
  const handleInnerClick = React.useCallback(
    ev => {
      if (tooltip.current) {
        const focusableElements = tooltip.current.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS);
        if (Object.values(focusableElements).some(v => v === ev.target)) {
          onClose();
          onCloseMobile();
        }
      }
    },
    [onClose, onCloseMobile],
  );
  return (
    <StyledTooltip role="tooltip" id={tooltipId} data-test={dataTest}>
      <StyledTooltipWrapper
        shown={shown && position && align}
        size={size}
        align={align}
        position={position}
        ref={tooltip}
        containerTop={dimensions.containerTop}
        containerLeft={dimensions.containerLeft}
        containerHeight={dimensions.containerHeight}
        containerWidth={dimensions.containerWidth}
        tooltipHeight={dimensions.tooltipHeight}
        tooltipWidth={dimensions.tooltipWidth}
        contentHeight={dimensions.contentHeight}
        role="tooltip"
        aria-hidden={!shown}
        onMouseEnter={onEnter}
        onMouseLeave={onClose}
        onClick={handleInnerClick}
      >
        <StyledTooltipContent ref={content}>{children}</StyledTooltipContent>
      </StyledTooltipWrapper>
    </StyledTooltip>
  );
};

export default TooltipContent;
