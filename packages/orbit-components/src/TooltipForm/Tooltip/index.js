// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import handleKeyDown from "../../utils/handleKeyDown";
import defaultTheme from "../../defaultTheme";
import media from "../../utils/mediaQuery";
import { StyledText } from "../../Text";
import { Item } from "../../List/ListItem";
import CloseIc from "../../icons/Close";
import { rtlSpacing, right } from "../../utils/rtl";
import resolveColor from "./helpers/resolveColor";
import tooltipArrowStyle from "./helpers/tooltipArrowStyle";
import resolveTooltipArrowPosition from "./helpers/resolveTooltipArrowPosition";
import resolveTooltipPosition from "./helpers/resolveTooltipPosition";
import useDimensions from "../hooks/useDimensions";
import { POSITIONS, SIDE_NUDGE, SIZE_OPTIONS } from "./consts";

import type { Props } from "./index";

const getToken = ({ theme, inputSize }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.orbit.heightInputSmall,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.heightInputNormal,
  };

  return tokens[inputSize];
};

const StyledFormFeedbackTooltip = styled.div`
  ${({ theme, isHelp, shown }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    border-radius: ${theme.orbit.borderRadiusNormal};
    box-shadow: ${theme.orbit.boxShadowElevatedLevel1};
    padding: 0 ${theme.orbit.spaceSmall};
    padding-${right}: ${isHelp && theme.orbit.spaceSmall};
    height: ${getToken};
    z-index: 10;
    max-height: none;
    overflow: visible;
    width: ${`calc(100% + ${SIDE_NUDGE * 2}px)`};
    background-color: ${resolveColor};
    visibility: ${shown ? "visible" : "hidden"};
    opacity: ${shown ? "1" : "0"};
    transition: opacity ${theme.orbit.durationFast} ease-in-out,
      visibility ${theme.orbit.durationFast} ease-in-out;

    /* prevent position, IEs don't have initial YAY */
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;

    img {
      max-width: 100%;
    }

    &::after {
      width: 0;
      height: 0;
      border-style: solid;
      content: " ";
      display: block;
      position: absolute;

      ${tooltipArrowStyle};
      ${resolveTooltipArrowPosition};
    }

    ${media.largeMobile(css`
      width: auto;
    `)};

    ${resolveTooltipPosition};
`}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledFormFeedbackTooltip.defaultProps = {
  theme: defaultTheme,
};

const StyledTooltipContent = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.orbit.fontFamily};
    font-size: ${theme.orbit.fontSizeTextNormal};
    font-weight: ${theme.orbit.fontWeightNormal};
    line-height: ${theme.orbit.lineHeightText};
    color: ${theme.orbit.paletteWhite};

    & ${StyledText}, ${Item}, a {
      color: ${theme.orbit.paletteWhite};
      font-weight: ${theme.orbit.fontWeightNormal};
      color: ${theme.orbit.paletteInkNormal};
    }

    ${media.largeMobile(css`
      font-size: ${theme.orbit.fontSizeTextSmall};
      font-weight: ${theme.orbit.fontWeightMedium};

      & ${StyledText}, ${Item}, a {
        color: ${theme.orbit.paletteWhite};
        font-weight: ${theme.orbit.fontWeightMedium};
        font-size: ${theme.orbit.fontSizeTextSmall};
      }
      & a:hover {
        color: ${theme.orbit.paletteWhite};
      }
    `)};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTooltipContent.defaultProps = {
  theme: defaultTheme,
};

const StyledCloseButton = styled.a`
  ${({ theme }) => css`
    color: ${theme.orbit.paletteWhite};
    cursor: pointer;
    margin: ${rtlSpacing(`0 0 0 ${theme.orbit.spaceSmall}`)};
    display: flex;
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCloseButton.defaultProps = {
  theme: defaultTheme,
};

const FormFeedbackTooltip = ({
  boundingRef,
  inputSize,
  iconBoundingRef,
  shown = true,
  children,
  isHelp = false,
  inlineLabel,
  onClick,
}: Props): React.Node => {
  const contentRef = React.useRef(null);
  const dimensions = useDimensions(
    { boundingRef, contentRef, iconBoundingRef },
    children,
    inlineLabel,
  );

  const preferredPosition = React.useMemo(
    () =>
      dimensions.bounding.top - dimensions.contentBounding.height > 0
        ? POSITIONS.TOP
        : POSITIONS.BOTTOM,
    [dimensions.bounding.top, dimensions.contentBounding.height],
  );

  return (
    <StyledFormFeedbackTooltip
      ref={contentRef}
      inputSize={inputSize}
      contentBounding={dimensions.contentBounding}
      bounding={dimensions.bounding}
      iconBounding={dimensions.iconBounding}
      position={preferredPosition}
      shown={shown && dimensions.set}
      isHelp={isHelp}
      inlineLabel={inlineLabel}
      aria-live="polite"
    >
      <StyledTooltipContent>{children}</StyledTooltipContent>
      {isHelp && (
        <StyledCloseButton
          tabIndex={0}
          // $FlowFixMe: TODO
          onKeyDown={handleKeyDown(onClick)}
          onClick={ev => {
            ev.preventDefault();
            if (onClick) {
              onClick(ev);
            }
          }}
        >
          <CloseIc size="small" />
        </StyledCloseButton>
      )}
    </StyledFormFeedbackTooltip>
  );
};

export default FormFeedbackTooltip;
