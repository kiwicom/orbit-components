import * as React from "react";
import styled, { css } from "styled-components";

import theme from "../theme";

interface LevelDivProps {
  backgroundColor: string;
  border: string;
  boxShadow: string;
}

export const LevelDiv = styled.div<LevelDivProps>`
  ${({ boxShadow, backgroundColor, border }) => css`
    height: 40px;
    width: 40px;
    position: relative;
    left: 25%;
    background-color: ${backgroundColor};
    border: ${border};
    box-shadow: ${boxShadow};
  `}
`;

interface ElevationLevelProps {
  level: 1 | 2 | 3 | 3.5 | 4 | 4.5 | 5 | 5.5 | 6;
}

export default ({ level }: ElevationLevelProps) => {
  let backgroundColor = theme.orbit.elevationFlatBackground;
  let border = "none";
  let boxShadow = "none";
  switch (level) {
    case 1:
      backgroundColor = theme.orbit.elevationSuppressedBackground;
      break;
    case 2:
      border = `${theme.orbit.elevationFlatBorderSize} solid ${theme.orbit.elevationFlatBorderColor}`;
      break;
    case 3:
      boxShadow = theme.orbit.elevationActionBoxShadow;
      break;
    case 3.5:
      boxShadow = theme.orbit.elevationActionActiveBoxShadow;
      break;
    case 4:
      boxShadow = theme.orbit.elevationFixedBoxShadow;
      break;
    case 4.5:
      boxShadow = theme.orbit.elevationFixedReverseBoxShadow;
      break;
    case 5:
      boxShadow = theme.orbit.elevationRaisedBoxShadow;
      break;
    case 5.5:
      boxShadow = theme.orbit.elevationRaisedReverseBoxShadow;
      break;
    case 6:
      boxShadow = theme.orbit.elevationOverlayBoxShadow;
      break;
    default:
      break;
  }
  return <LevelDiv backgroundColor={backgroundColor} border={border} boxShadow={boxShadow} />;
};
