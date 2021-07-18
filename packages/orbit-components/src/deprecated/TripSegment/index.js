// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import CarrierLogo, { StyledCarrierLogo } from "../../CarrierLogo";
import Airplane from "../../icons/Airplane";
import ShowMore from "../../icons/ShowMore";
import ShowLess from "../../icons/ShowLess";
import Bus from "../../icons/Bus";
import Train from "../../icons/Train";
import Text, { StyledText } from "../../Text";
import { CARRIER_TYPE_OPTIONS } from "../../CarrierLogo/consts";
import { getSize } from "../../Icon";
import { ICON_SIZES } from "../../Icon/consts";
import { right, rtlSpacing } from "../../utils/rtl";
import KEY_CODE_MAP from "../../common/keyMaps";
import Slide from "../../utils/Slide";
import Truncate from "../../Truncate";
import randomID from "../../utils/randomID";

import type { Props, State, ExpandedType } from "./index";

export const StyledTripSegmentMilestone: any = styled.div`
  display: flex;
  height: 50px;
  width: ${getSize(ICON_SIZES.MEDIUM)};
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;
  cursor: pointer;
  z-index: 1;

  > svg {
    z-index: 1;
    height: ${getSize(ICON_SIZES.MEDIUM)};
    background: ${({ theme }) => theme.orbit.paletteWhiteNormal};
    transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTripSegmentMilestone.defaultProps = {
  theme: defaultTheme,
};

const StyledTripSegmentMilestoneArrow = styled.div`
  position: relative;
  width: 6px;
  height: 12px;
  ${right}: -1px;
  z-index: 1;
  transform: ${({ theme }) => theme.rtl && `rotate(180deg)`};
  &:before,
  &:after {
    position: absolute;
    content: " ";
    width: 0;
    height: 0;
    border-style: solid;
    transition: border-color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  }
  &:before {
    border-width: 6px 6px 6px 0;
    border-color: transparent ${({ theme }) => theme.orbit.paletteCloudNormal} transparent
      transparent;
  }
  &:after {
    border-color: transparent ${({ theme }) => theme.orbit.paletteWhiteNormal} transparent
      transparent;
    border-width: 4px 4px 4px 0;
    border-color: transparent ${({ theme }) => theme.orbit.paletteWhiteNormal} transparent
      transparent;
    margin: ${rtlSpacing(`2px 0 0 0`)};
    right: 0;
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTripSegmentMilestoneArrow.defaultProps = {
  theme: defaultTheme,
};

const StyledTripSegmentContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background: ${({ theme }) => theme.orbit.elevationFlatBackground};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border: ${({ theme }) =>
    `${theme.orbit.elevationFlatBorderSize} solid ${theme.orbit.elevationFlatBorderColor}`};
  transition: border-color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTripSegmentContent.defaultProps = {
  theme: defaultTheme,
};

const StyledChevrons = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.orbit.paletteWhiteNormal};
  flex-direction: column;

  > svg {
    transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledChevrons.defaultProps = {
  theme: defaultTheme,
};

const Chevrons = ({ expanded }: ExpandedType) => (
  <StyledChevrons>
    {expanded ? (
      <ShowLess size="small" color="secondary" />
    ) : (
      <ShowMore size="small" color="secondary" />
    )}
  </StyledChevrons>
);

const StyledTripSegmentOverview = styled.div`
  display: flex;
  flex: 0 1 auto;
  width: calc(100% - 96px);
  min-width: 0;
  ${StyledText} {
    line-height: 1.2;
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTripSegmentOverview.defaultProps = {
  theme: defaultTheme,
};

const StyledTripSegmentCarrier = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  ${right}: ${({ theme }) => `-${theme.orbit.spaceTwoX}`};
  top: 0;
  height: 100%;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTripSegmentCarrier.defaultProps = {
  theme: defaultTheme,
};

const StyledTripSegmentOverviewWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.orbit.spaceTwoX};
  cursor: pointer;
  position: relative;

  ${StyledCarrierLogo} {
    margin: ${({ theme }) =>
      rtlSpacing(`0 ${theme.orbit.spaceOneX} 0
      ${theme.orbit.spaceTwoX}`)};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTripSegmentOverviewWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledTripSegmentOverviewColumn = styled.div`
  display: flex;
  flex-direction: column;
  ${({ grow }) =>
    grow &&
    css`
      min-width: 0;
      flex: 1;
    `};
`;

const StyledTripSegmentOverviewTime = styled.div`
  padding: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceThreeX} 0 0`)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTripSegmentOverviewTime.defaultProps = {
  theme: defaultTheme,
};

const StyledTripSegmentChildren = styled.div`
  padding: ${({ theme, expanded }) => (expanded ? `${theme.orbit.spaceTwoX} 0` : "0")};
  margin: ${({ theme }) => `0 ${theme.orbit.spaceTwoX}`};
  border-top: ${({ theme, expanded }) =>
    expanded
      ? `1px solid ${theme.orbit.paletteCloudNormal}`
      : `0px solid ${theme.orbit.paletteCloudNormal}`};
  transition: padding ${({ theme }) => theme.orbit.durationFast} linear,
    border-top ${({ theme }) => theme.orbit.durationFast} linear;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTripSegmentChildren.defaultProps = {
  theme: defaultTheme,
};

export const StyledTripSegment: any = styled.div`
  display: flex;
  width: 100%;

  &:focus {
    outline: 0;

    ${StyledTripSegmentContent} {
      border-color: ${({ theme }) => theme.orbit.formElementBorderColorFocus};
    }

    ${StyledTripSegmentMilestone}, ${StyledChevrons} {
      svg {
        color: ${({ theme }) => theme.orbit.iconForegroundPrimary};
      }
    }
    ${StyledTripSegmentMilestoneArrow} {
      &:before {
        border-color: transparent ${({ theme }) => theme.orbit.formElementBorderColorFocus}
          transparent transparent;
      }
    }
  }

  &:hover {
    ${StyledTripSegmentContent} {
      border-color: ${({ theme }) => theme.orbit.paletteCloudNormalSecondary};
    }
    ${StyledTripSegmentMilestone}, ${StyledChevrons} {
      svg {
        color: ${({ theme }) => theme.orbit.iconForegroundPrimary};
      }
    }
    ${StyledTripSegmentMilestoneArrow} {
      &:before {
        border-color: transparent ${({ theme }) => theme.orbit.paletteCloudNormalSecondary}
          transparent transparent;
      }
    }
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTripSegment.defaultProps = {
  theme: defaultTheme,
};

const MilestoneIcon = ({ type }) => {
  switch (type) {
    case "airline":
      return <Airplane size="small" color="secondary" />;
    case "train":
      return <Train size="small" color="secondary" />;
    case "bus":
      return <Bus size="small" color="secondary" />;
    default:
      return <Airplane size="small" color="secondary" />;
  }
};

class TripSegment extends React.PureComponent<Props, State> {
  node: {| current: null | HTMLDivElement |} = React.createRef<HTMLDivElement>();

  tripSegmentID: string = randomID("tripSegmentID");

  constructor(props: Props) {
    super(props);
    this.state = {
      contentHeight: this.props.initialExpanded ? null : 0,
      expanded: this.props.initialExpanded || false,
    };
  }

  componentDidMount() {
    this.setHeight();
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.children !== prevProps.children) {
      this.setHeight();
    }
  }

  setHeight: () => void = () => {
    this.setState({
      contentHeight: this.node.current?.clientHeight,
    });
  };

  handleToggle: () => void = () => {
    const { onClick } = this.props;
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));

    if (onClick) {
      onClick();
    }
  };

  handleOnKeyDown: (ev: SyntheticKeyboardEvent<HTMLInputElement>) => void = (
    ev: SyntheticKeyboardEvent<HTMLInputElement>,
  ) => {
    if (ev.keyCode === KEY_CODE_MAP.ENTER) {
      this.handleToggle();
    } else if (ev.keyCode === KEY_CODE_MAP.SPACE) {
      ev.preventDefault();
      this.handleToggle();
    }
  };

  render(): React.Node {
    const {
      children,
      departure,
      departureTime,
      arrival,
      arrivalTime,
      duration,
      carrier,
      dataTest,
      tabIndex = "0",
    } = this.props;
    const { expanded, contentHeight } = this.state;

    return (
      <StyledTripSegment
        dataTest={dataTest}
        tabIndex={tabIndex}
        role="button"
        aria-expanded={expanded}
        onKeyDown={this.handleOnKeyDown}
      >
        <StyledTripSegmentMilestone onClick={this.handleToggle}>
          <MilestoneIcon type={carrier.type || CARRIER_TYPE_OPTIONS.AIRLINE} />
          <StyledTripSegmentMilestoneArrow />
        </StyledTripSegmentMilestone>
        <StyledTripSegmentContent>
          <StyledTripSegmentOverviewWrapper
            onClick={this.handleToggle}
            aria-controls={this.tripSegmentID}
          >
            <StyledTripSegmentOverview>
              <StyledTripSegmentOverviewColumn>
                <StyledTripSegmentOverviewTime>
                  <Text as="div" align="right">
                    {departureTime}
                  </Text>
                </StyledTripSegmentOverviewTime>
                <StyledTripSegmentOverviewTime>
                  <Text as="div" align="right">
                    {arrivalTime}
                  </Text>
                </StyledTripSegmentOverviewTime>
              </StyledTripSegmentOverviewColumn>
              <StyledTripSegmentOverviewColumn grow>
                <Text as="div" type="primary">
                  <Truncate>{departure}</Truncate>
                </Text>
                <Text as="div" type="primary">
                  <Truncate>{arrival}</Truncate>
                </Text>
              </StyledTripSegmentOverviewColumn>
            </StyledTripSegmentOverview>
            <StyledTripSegmentCarrier>
              <Text as="div" type="secondary" size="small">
                {duration}
              </Text>
              <CarrierLogo size="medium" carriers={[carrier]} />
              <Chevrons expanded={expanded} />
            </StyledTripSegmentCarrier>
          </StyledTripSegmentOverviewWrapper>
          <Slide maxHeight={contentHeight} expanded={expanded} id={this.tripSegmentID}>
            <StyledTripSegmentChildren expanded={expanded}>
              <div ref={this.node}>{children}</div>
            </StyledTripSegmentChildren>
          </Slide>
        </StyledTripSegmentContent>
      </StyledTripSegment>
    );
  }
}

export default TripSegment;
