// @flow
import * as React from "react";
import styled from "styled-components";

import { StyledTileWrapper } from "../Tile/components/TileWrapper";
import defaultTheme from "../defaultTheme";
import { StyledSlide } from "../utils/Slide";

import type { Props } from ".";

const StyledTileGroup = styled.div`
  width: 100%;
  box-shadow: ${({ theme }) => theme.orbit.elevationActionBoxShadow};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  ${StyledSlide} {
    background: ${({ theme }) => theme.orbit.paletteWhiteNormal};
  }
  ${StyledTileWrapper} {
    border-radius: 0;
    :first-child {
      border-top-left-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
      border-top-right-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
    }
    :last-child {
      border-bottom-left-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
      border-bottom-right-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
    }
    :not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.orbit.paletteCloudDark};
    }
    box-shadow: none;
    transition: background ${({ theme }) => theme.orbit.durationFast} ease-in-out,
      box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out,
      border-color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
    :hover,
    :focus {
      background: ${({ theme }) => theme.orbit.paletteCloudNormal};
    }
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTileGroup.defaultProps = {
  theme: defaultTheme,
};

const TileGroup = ({ children, dataTest }: Props): React.Node => {
  return <StyledTileGroup data-test={dataTest}>{children}</StyledTileGroup>;
};

export default TileGroup;
