// @flow
import styled, { css } from "styled-components";
import * as React from "react";

import SeatLegend from "./components/SeatLegend";
import Stack from "../Stack";
import Text from "../Text";
import randomID from "../utils/randomID";
import defaultTheme from "../defaultTheme";
import SeatNormal, {
  StyledPath as StyledPathNormal,
  StyledStrokeNormal,
} from "./components/SeatNormal";
import SeatSmall, {
  StyledPath as StyledPathSmall,
  StyledStrokeSmall,
} from "./components/SeatSmall";
import {
  resolveHoverColor,
  resolveAccentColor,
  resolveFillColor,
  resolveFocusColor,
  resolveCloseIconColor,
} from "./components/helpers";
import SeatCircle, { StyledCirclePath } from "./components/SeatCircle";
import { SIZE_OPTIONS, TYPES } from "./consts";

import type { Props } from ".";

const getSize = ({ size }) => {
  const height = {
    [SIZE_OPTIONS.SMALL]: "36px",
    [SIZE_OPTIONS.MEDIUM]: "46px",
  };

  const width = {
    [SIZE_OPTIONS.SMALL]: "32px",
    [SIZE_OPTIONS.MEDIUM]: "46px",
  };

  return `width: ${width[size]}; height: ${height[size]};`;
};

const StyledSeatWrapper = styled.div`
  ${({ type, selected, theme }) => css`
    position: relative;
    cursor: ${type !== TYPES.UNAVAILABLE && "pointer"};
    ${getSize};
    outline: none;
    font-family: ${theme.orbit.fontFamily};
    &:hover {
      ${StyledPathNormal}, ${StyledPathSmall} {
        ${type !== TYPES.UNAVAILABLE &&
        !selected &&
        css`
          fill: ${resolveHoverColor};
        `};
      }
      ${StyledCirclePath} {
        fill: ${resolveCloseIconColor({ theme, type, hover: true })};
      }
    }

    &:active,
    &:focus {
      ${StyledPathNormal}, ${StyledPathSmall} {
        fill: ${resolveFillColor({ theme, type, selected, focus: true })};
      }
      ${StyledStrokeNormal}, ${StyledStrokeSmall} {
        stroke: ${resolveFocusColor};
      }
    }

    &:focus:not(:focus-visible):not(:active) {
      ${StyledPathNormal}, ${StyledPathSmall} {
        fill: ${resolveFillColor};
      }
      ${StyledStrokeNormal}, ${StyledStrokeSmall} {
        stroke: ${resolveAccentColor};
      }
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledSeatWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledSeat = styled.svg``;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledSeat.defaultProps = {
  theme: defaultTheme,
};

const Seat = ({
  type = TYPES.DEFAULT,
  selected,
  onClick,
  size = SIZE_OPTIONS.MEDIUM,
  dataTest,
  price,
  label,
  title = "Seat",
  description = "Presents options for seating",
}: Props): React.Node => {
  const titleId = React.useMemo(() => randomID("title"), []);
  const descrId = React.useMemo(() => randomID("descr"), []);
  const clickable = type !== TYPES.UNAVAILABLE;

  return (
    <Stack inline grow={false} spacing="XXXSmall" direction="column" align="center">
      <StyledSeatWrapper
        data-test={dataTest}
        onClick={clickable ? onClick : undefined}
        tabIndex={clickable ? "0" : "-1"}
        type={type}
        size={size}
        selected={selected}
      >
        <svg
          viewBox={size === SIZE_OPTIONS.SMALL ? "0 0 32 36" : "0 0 46 46"}
          aria-labelledby={`${titleId} ${descrId}`}
          fill="none"
          role="img"
        >
          <title id={titleId}>{title}</title>
          <desc id={descrId}>{description}</desc>

          {size === SIZE_OPTIONS.SMALL ? (
            <SeatSmall type={type} selected={selected} price={price} label={label} />
          ) : (
            <SeatNormal type={type} selected={selected} price={price} label={label} />
          )}
        </svg>
        {selected && clickable && <SeatCircle size={size} type={type} />}
      </StyledSeatWrapper>
      {price && !(selected && type === TYPES.UNAVAILABLE) && (
        <Text size="small" type="secondary">
          {price}
        </Text>
      )}
    </Stack>
  );
};

export { SeatLegend };
export default Seat;
