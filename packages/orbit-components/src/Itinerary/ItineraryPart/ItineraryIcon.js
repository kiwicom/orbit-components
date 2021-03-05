// @flow
import React from "react";
import styled, { css } from "styled-components";

import { usePart } from "./context";
import ArrowDown from "../../icons/ArrowDown";
import Circle from "../../icons/Circle";
import defaultTheme from "../../defaultTheme";

type Props = {|
  isDetails?: boolean,
|};

const lineMixin = css`
  content: "";
  position: absolute;
  height: calc(50% + 9px);
  z-index: -1;
  display: block;
`;

// TODO: Improve
const IconStyled = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;

  ${({ index, isHidden, last, count, isNextHidden, isStatus, theme }) => css`
    ${index === 0 &&
    isStatus &&
    `
      &:before {
        top: -27px;
        border: 1px dashed #ccc;
        ${lineMixin};
        height: 100%;
      }
    `}

    ${index > 0 &&
    count > 0 &&
    `&:before {
      top: -9px;
      border: 1px ${isHidden || isStatus ? `dashed` : `solid`} ${
      theme.orbit.paletteCloudNormalHover
    };
      ${lineMixin};
    }`};

    ${!last &&
    count > 0 &&
    `&:after {
        bottom: -7px;
        opacity: ${isNextHidden ? `0.5` : `1`};
        border: 1px ${isNextHidden ? `dashed` : `solid`} ${theme.orbit.paletteCloudNormalHover};
        ${lineMixin};
      }`};
  `}
`;

IconStyled.defaultProps = {
  theme: defaultTheme,
};

const ItineraryIcon = ({ isDetails }: Props) => {
  const { index, last, isNextHidden, isHidden, count, hasStatus } = usePart();

  return (
    <IconStyled
      index={index}
      last={last}
      isDetails={isDetails}
      isNextHidden={isNextHidden}
      isHidden={isHidden}
      isStatus={hasStatus && index === 0}
      count={count}
    >
      {isDetails ? <ArrowDown /> : <Circle size="small" color="secondary" />}
    </IconStyled>
  );
};

export default ItineraryIcon;
