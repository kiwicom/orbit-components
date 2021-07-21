// @flow
import styled from "styled-components";
import * as React from "react";

import useTheme from "../../hooks/useTheme";
import { TYPES, SIZE_OPTIONS } from "./consts";

import type { Props } from ".";

const getSize = ({ size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: "20px",
    [SIZE_OPTIONS.MEDIUM]: "40px",
  };
  return `width: ${tokens[size]}; height: ${tokens[size]};`;
};

const StyledSeat = styled.svg`
  flex-shrink: 0;
  ${getSize};
`;

const SeatType = ({ type }) => {
  const theme = useTheme();
  switch (type) {
    case TYPES.LEGROOM:
      return (
        <g
          fill={theme.orbit.paletteBlueLight}
          fillRule="nonzero"
          stroke={theme.orbit.paletteBlueDarker}
        >
          <path
            strokeLinejoin="round"
            d="M12 5h16V4h6c1.1046 0 2 .8954 2 2v28c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2V6c0-1.1046.8954-2 2-2h6v1z"
          />
          <path d="M39.5 36.1542V12.1739c0-2.125-1.7227-3.8478-3.8478-3.8478-2.1251 0-3.8479 1.7227-3.8479 3.8478l-.0003 19.6302H8.195l.0007-19.6302c0-2.125-1.7228-3.8478-3.8479-3.8478C2.2228 8.326.5 10.0488.5 12.1739L.5016 36.388c.0122.8693.089 1.3095.2541 1.669l.086.1724c.2148.4017.527.714.9288.9289.4733.2531.9316.3416 2.0753.3416l32.5423-.0016c.8693-.0122 1.3095-.089 1.669-.2541l.1724-.086c.4017-.2148.714-.527.9289-.9288.2531-.4733.3416-.9316.3416-2.0753z" />
        </g>
      );
    case TYPES.SELECTED:
      return (
        <g fill="none" fillRule="nonzero">
          <path
            fill={theme.orbit.paletteGreenLight}
            stroke={theme.orbit.paletteGreenDarker}
            strokeLinejoin="round"
            d="M12 5h16V4h6.2222C35.2041 4 36 4.754 36 5.6842v28.6316C36 35.246 35.204 36 34.2222 36H5.7778C4.7959 36 4 35.246 4 34.3158V5.6842C4 4.754 4.796 4 5.7778 4H12v1z"
          />
          <path
            fill={theme.orbit.paletteGreenLight}
            stroke={theme.orbit.paletteGreenDarker}
            d="M39.5 36.6558V12.1739c0-2.125-1.7227-3.8478-3.8478-3.8478-2.1251 0-3.8479 1.7227-3.8479 3.8478v19.6304H8.1957V12.174c0-2.125-1.7228-3.8478-3.8479-3.8478C2.2228 8.326.5 10.0488.5 12.1739l.0014 24.6844c.0105.7475.0758 1.1219.2141 1.423l.0738.1484c.1808.338.443.6002.781.781.4008.2143.7892.2893 1.7739.2893h33.3116c.8815 0 1.299-.0655 1.6256-.2155l.1483-.0738c.338-.1808.6002-.443.781-.781.2143-.4008.2893-.7892.2893-1.7739z"
          />
          <path
            fill={theme.orbit.paletteGreenDarker}
            d="M16.7595 20.3894a.525.525 0 00-.7597.7247l2.084 2.1845a.525.525 0 00.7787-.021l5.0115-5.8547a.525.525 0 00-.7977-.6828l-4.346 5.0772a.4.4 0 01-.564.0438l-.0292-.0278-1.3776-1.444z"
          />
        </g>
      );
    case TYPES.UNAVAILABLE:
      return (
        <g fill="none" fillRule="nonzero">
          <path
            fill={theme.orbit.paletteCloudDark}
            stroke={theme.orbit.paletteInkLight}
            strokeLinejoin="round"
            d="M12 5h16V4h6c1.1046 0 2 .8954 2 2v28c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2V6c0-1.1046.8954-2 2-2h6v1z"
          />
          <path
            fill={theme.orbit.paletteCloudDark}
            stroke={theme.orbit.paletteInkLight}
            d="M39.5 36.1542V12.1739c0-2.125-1.7227-3.8478-3.8478-3.8478-2.1251 0-3.8479 1.7227-3.8479 3.8478l-.0003 19.6302H8.195l.0007-19.6302c0-2.125-1.7228-3.8478-3.8479-3.8478C2.2228 8.326.5 10.0488.5 12.1739L.5016 36.388c.0122.8693.089 1.3095.2541 1.669l.086.1724c.2148.4017.527.714.9288.9289.4733.2531.9316.3416 2.0753.3416l32.5423-.0016c.8693-.0122 1.3095-.089 1.669-.2541l.1724-.086c.4017-.2148.714-.527.9289-.9288.2531-.4733.3416-.9316.3416-2.0753z"
          />
          <path
            fill={theme.orbit.paletteInkLight}
            d="M23.299 16.6943a.525.525 0 01.0006.7425l-2.2759 2.2788a.4.4 0 000 .5653l2.2759 2.279a.5251.5251 0 01.0465.6888l-.047.0537a.525.525 0 01-.7425-.0005l-2.274-2.2775a.4001.4001 0 00-.503-.0517l-.0632.0517-2.2732 2.2775a.525.525 0 11-.743-.742l2.2756-2.279a.4.4 0 000-.5653l-2.2756-2.2788a.5251.5251 0 01-.0465-.6887l.047-.0538a.525.525 0 01.7425.0006l2.2732 2.2767a.4001.4001 0 00.5029.0517l.0632-.0516 2.274-2.2768a.525.525 0 01.7425-.0006z"
          />
        </g>
      );
    default:
      return (
        <g fill={theme.orbit.paletteWhite} fillRule="nonzero" stroke={theme.orbit.paletteInkLight}>
          <path
            strokeLinejoin="round"
            d="M12 5h16V4h6c1.1046 0 2 .8954 2 2v28c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2V6c0-1.1046.8954-2 2-2h6v1z"
          />
          <path d="M39.5 36.1542V12.1739c0-2.125-1.7227-3.8478-3.8478-3.8478-2.1251 0-3.8479 1.7227-3.8479 3.8478l-.0003 19.6302H8.195l.0007-19.6302c0-2.125-1.7228-3.8478-3.8479-3.8478C2.2228 8.326.5 10.0488.5 12.1739L.5016 36.388c.0122.8693.089 1.3095.2541 1.669l.086.1724c.2148.4017.527.714.9288.9289.4733.2531.9316.3416 2.0753.3416h32.3084c1.0235 0 1.5136-.077 1.9029-.2557l.1724-.086c.4017-.2148.714-.527.9289-.9288.2531-.4733.3416-.9316.3416-2.0753z" />
        </g>
      );
  }
};

const Seat = ({ type, size = SIZE_OPTIONS.MEDIUM, dataTest }: Props): React.Node => {
  return (
    <StyledSeat
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 40 40"
      size={size}
      data-test={dataTest}
    >
      <SeatType type={type} />
    </StyledSeat>
  );
};

export default Seat;
