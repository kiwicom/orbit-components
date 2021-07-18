// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../../../defaultTheme";
import CardSectionContext from "../CardSectionContext";
import Slide, { StyledSlide } from "../../../../utils/Slide";
import media from "../../../../utils/mediaQuery";

import type { Props, State } from "./index";

const hasPaddingTop = ({ expandable, expanded, visible }) => expanded || visible || !expandable;

export const StyledCardSectionContent: any = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightNormal};
  color: ${({ theme }) => theme.orbit.textPrimaryForeground};
  border-top: ${({ theme, expanded }) =>
    expanded
      ? `1px solid ${theme.orbit.paletteCloudNormal}`
      : `0px solid ${theme.orbit.paletteCloudNormal}`};
  padding-top: ${({ theme, expandable, expanded, visible }) =>
    hasPaddingTop({ expandable, expanded, visible }) && theme.orbit.spaceFourX};
  transition: padding ${({ theme }) => theme.orbit.durationFast} linear,
    border-top ${({ theme }) => theme.orbit.durationFast} linear;

  ${media.desktop(css`
    padding-top: ${({ theme, expandable, expanded, visible }) =>
      hasPaddingTop({ expandable, expanded, visible }) && theme.orbit.spaceSixX};
  `)}

  ${StyledSlide} {
    max-height: ${({ expandable, visible }) => expandable && visible && "none"};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCardSectionContent.defaultProps = {
  theme: defaultTheme,
};

const withConsumer = CardSection => ({ children, visible }: Props) => (
  <CardSectionContext.Consumer>
    {({ expandable, expanded }) => (
      <CardSection expandable={expandable} expanded={expanded} visible={visible}>
        {children}
      </CardSection>
    )}
  </CardSectionContext.Consumer>
);

class CardSectionContent extends React.Component<Props, State> {
  state = {
    contentHeight: 0,
  };

  node = React.createRef<HTMLDivElement>();

  componentDidMount() {
    const { expandable } = this.props;
    if (expandable) {
      window.addEventListener("resize", this.setHeight);
      setTimeout(this.setHeight, 10);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { expandable } = this.props;

    if (expandable) {
      if (
        prevState.contentHeight !== this.state.contentHeight ||
        prevProps.children !== this.props.children
      ) {
        setTimeout(this.setHeight, 10);
      }

      if (prevProps.expanded !== this.props.expanded) {
        // Calculate height on expand - for dynamic components like TripSector
        this.setHeight();
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setHeight);
  }

  setHeight = () => {
    this.setState({
      contentHeight: this.node.current?.clientHeight,
    });
  };

  render() {
    const { children, expanded, expandable, visible } = this.props;

    return (
      <StyledCardSectionContent
        expanded={expanded}
        expandable={expandable}
        visible={visible}
        contentHeight={this.state.contentHeight}
      >
        {expandable ? (
          <Slide maxHeight={this.state.contentHeight} expanded={expanded}>
            <div ref={this.node}>{children}</div>
          </Slide>
        ) : (
          <div ref={this.node}>{children}</div>
        )}
      </StyledCardSectionContent>
    );
  }
}

const DecoratedComponent: Props => React.Node = withConsumer(CardSectionContent);
// $FlowFixMe
DecoratedComponent.displayName = "CardSectionContent";

export default DecoratedComponent;
