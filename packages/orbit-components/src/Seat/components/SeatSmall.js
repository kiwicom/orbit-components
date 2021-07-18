// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
import { TYPES } from "../consts";
import type { Props } from "../index";
import useTheme from "../../hooks/useTheme";
import { resolveFillColor, resolveTextColor, resolveAccentColor } from "./helpers";

export const StyledPath: any = styled.path`
  transition: fill ${({ theme }) => theme.orbit.durationFast} ease-in;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledPath.defaultProps = {
  theme: defaultTheme,
};

export const StyledStrokeSmall: any = styled.path`
  transition: stroke ${({ theme }) => theme.orbit.durationFast} ease-in;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledStrokeSmall.defaultProps = {
  theme: defaultTheme,
};

const SeatSmall = ({ type, selected, label }: Props): null | React.Node => {
  const theme = useTheme();

  if (selected && type === TYPES.UNAVAILABLE) return null;

  return (
    <>
      <StyledPath
        d="M1 10C1 5.02944 5.02944 1 10 1H22C26.9706 1 31 5.02944 31 10V32C31 33.6569 29.6569 35 28 35H4C2.34315 35 1 33.6569 1 32V10Z"
        fill={resolveFillColor({ type, theme, selected })}
      />
      {type !== TYPES.UNAVAILABLE && (
        <text
          fill={resolveTextColor({ theme, type, selected })}
          xmlSpace="preserve"
          fontSize="14"
          letterSpacing="0em"
          textAnchor="middle"
          dominantBaseline="middle"
          x="50%"
          y="55%"
        >
          {label}
        </text>
      )}

      {type === TYPES.UNAVAILABLE && (
        <path
          d="M20.7129 13.2776C21.006 13.5703 21.0064 14.0451 20.7137 14.3383L17.3415 17.7148C17.1855 17.871 17.1855 18.124 17.3414 18.2801L20.7137 21.6571C20.982 21.9257 21.0041 22.3472 20.7801 22.641L20.7129 22.7177C20.4198 23.0104 19.9449 23.01 19.6523 22.7169L16.2823 19.3419C16.126 19.1853 15.8724 19.1854 15.7161 19.3419L12.3474 22.7169C12.0547 23.01 11.5798 23.0104 11.2867 22.7177C10.9936 22.425 10.9933 21.9502 11.2859 21.6571L14.6578 18.2801C14.8137 18.124 14.8137 17.871 14.6578 17.7149L11.2859 14.3383C11.0177 14.0696 10.9956 13.6482 11.2195 13.3544L11.2867 13.2776C11.5798 12.9849 12.0547 12.9853 12.3474 13.2784L15.7162 16.6524C15.8724 16.8089 16.126 16.8089 16.2822 16.6524L19.6523 13.2784C19.9449 12.9853 20.4198 12.9849 20.7129 13.2776Z"
          fill={theme.orbit.paletteInkLighterSecondary}
        />
      )}
      {!selected && (
        <path
          d="M0 32H32C32 34.2091 30.2091 36 28 36H4C1.79086 36 0 34.2091 0 32Z"
          fill={resolveAccentColor({ type, theme, selected })}
        />
      )}
      <StyledStrokeSmall
        d="M1 10C1 5.02944 5.02944 1 10 1H22C26.9706 1 31 5.02944 31 10V32C31 33.6569 29.6569 35 28 35H4C2.34315 35 1 33.6569 1 32V10Z"
        stroke={resolveAccentColor({ type, theme, selected })}
        strokeWidth="2"
      />
    </>
  );
};

export default SeatSmall;
