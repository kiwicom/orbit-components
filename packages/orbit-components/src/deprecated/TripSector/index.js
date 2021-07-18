// @flow
import * as React from "react";
import styled from "styled-components";

import { StyledTripSegment, StyledTripSegmentMilestone } from "../TripSegment";
import defaultTheme from "../../defaultTheme";
import { left, right } from "../../utils/rtl";

import type { Props } from "./index";

const StyledTripSector = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding-${right}: 2px;
  box-sizing: border-box;
  flex-direction: column;
  font-family: ${({ theme }) => theme.orbit.fontFamily};

  &:before {
    content: " ";
    display: block;
    position: absolute;
    background-color: ${({ theme }) => theme.orbit.paletteCloudNormal};
    width: 1px;
    height: 100%;
    ${left}: 7px;
    top: 0;
  }

  ${StyledTripSegment}:last-child {
    position: relative;

    ${StyledTripSegmentMilestone}:after {
      content: " ";
      position: absolute;
      top: 13px;
      right: 0;
      bottom: 0;
      left: 0;
      width: 16px;
      background: ${({ theme }) => theme.orbit.paletteWhiteNormal};
    }
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTripSector.defaultProps = {
  theme: defaultTheme,
};

const TripSector = ({ children, dataTest }: Props): React.Node => (
  <StyledTripSector data-test={dataTest}>{children}</StyledTripSector>
);

export default TripSector;

export { default as TripDate } from "./TripDate";
export { default as TripLayover } from "./TripLayover";
