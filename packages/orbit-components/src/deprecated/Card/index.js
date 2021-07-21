// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
import Close from "../../icons/Close";
import ButtonLink from "../../ButtonLink";
import CardSection, { StyledCardSection } from "./CardSection";
import CardHeader, { StyledCardHeader } from "./CardHeader";
import { StyledCardSectionContent } from "./CardSection/CardSectionContent";
import Loading, { StyledLoading } from "../../Loading";
import getSpacingToken from "../../common/getSpacingToken";
import { right } from "../../utils/rtl";
import CLOSE_BUTTON_DATA_TEST from "./consts";
import useTranslate from "../../hooks/useTranslate";

import type { Props, State } from ".";

const getBorder = ({ theme }) =>
  `${theme.orbit.borderWidthCard} ${theme.orbit.borderStyleCard} ${theme.orbit.borderColorCard}`;

const getBorderRadius = ({ theme }) => theme.orbit.borderRadiusNormal;

// Logic of borders radius
const StyledChildWrapper = styled.div`
  margin: ${({ theme, expanded }) => expanded && `${theme.orbit.spaceXSmall} 0`};
  transition: margin ${({ theme, initialExpanded }) => !initialExpanded && theme.orbit.durationFast}
    ease-in-out;

  ${StyledCardSection}, ${StyledCardHeader}, > ${StyledLoading} {
    border-top-left-radius: ${({ roundedTopBorders }) => roundedTopBorders && getBorderRadius};
    border-top-right-radius: ${({ roundedTopBorders }) => roundedTopBorders && getBorderRadius};
    border-bottom-left-radius: ${({ roundedBottomBorders }) =>
      roundedBottomBorders && getBorderRadius};
    border-bottom-right-radius: ${({ roundedBottomBorders }) =>
      roundedBottomBorders && getBorderRadius};
    box-shadow: ${({ expanded, theme }) => expanded && theme.orbit.boxShadowActionActive};
    border-left: ${getBorder};
    border-right: ${getBorder};
    border-bottom: ${getBorder};
    background: ${({ theme }) => theme.orbit.backgroundCard};
  }

  + div ${StyledCardSection}, ${StyledCardSection} {
    // If expanded - next CardSection and current CardSection will have border-top
    border-top: ${({ expanded }) => expanded && getBorder};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledChildWrapper.defaultProps = {
  theme: defaultTheme,
};

export const StyledCard: any = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  margin-bottom: ${getSpacingToken};

  ${StyledCardHeader} {
    padding-${right}: ${({ theme, closable }) => closable && theme.orbit.spaceLarge};
    border-bottom: ${({ hasAdjustedHeader }) => hasAdjustedHeader && 0};
  }

  ${StyledChildWrapper} {

    &:first-of-type {
      ${StyledCardHeader}, ${StyledCardSection}, > ${StyledLoading} {
        border-top: ${getBorder};
        border-top-left-radius: ${getBorderRadius};
        border-top-right-radius: ${getBorderRadius};
      }

      + ${StyledChildWrapper} ${StyledCardSection} {
        padding-top: ${({ hasAdjustedHeader }) => hasAdjustedHeader && 0};

        ${StyledCardSectionContent}:first-of-type { // if there isn't any CardSectionHeader we need to delete padding of CardSectionContent
          padding-top: ${({ hasAdjustedHeader }) => hasAdjustedHeader && 0};
        }
      }
    }

    &:last-of-type {
      ${StyledCardHeader}, ${StyledCardSection} {
        border-bottom-left-radius: ${getBorderRadius};
        border-bottom-right-radius: ${getBorderRadius};
      }
    }
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCard.defaultProps = {
  theme: defaultTheme,
};

const StyledCloseContainer = styled.div`
  position: absolute;
  top: 0;
  ${right}: 0;
  z-index: 1;
`;

const CardCloseButton = ({ onClick, dataTest }) => {
  const translate = useTranslate();
  return (
    <StyledCloseContainer>
      <ButtonLink
        dataTest={dataTest}
        type="secondary"
        size="small"
        iconLeft={<Close />}
        onClick={onClick}
        title={translate("button_close")}
      />
    </StyledCloseContainer>
  );
};

class Card extends React.Component<Props, State> {
  state: State = {
    expandedSections: [],
    initialExpandedSections: [],
  };

  getRoundedBorders: (index: number) => {| bottom: boolean, top: boolean |} = (index: number) => {
    const { expandedSections } = this.state;
    const topBorder =
      expandedSections.indexOf(index - 1) !== -1 || expandedSections.indexOf(index) !== -1;
    const bottomBorder =
      expandedSections.indexOf(index + 1) !== -1 || expandedSections.indexOf(index) !== -1;
    return {
      top: topBorder,
      bottom: bottomBorder,
    };
  };

  getChildren: () => React.Node = () => {
    // Loading Card Logic
    const children = React.Children.toArray(this.props.children);
    if (children[0] === undefined) {
      // Jest test
      return [];
    }
    if (
      // $FlowFixMe
      Loading.name !== "" &&
      children[0].type?.name === Loading.name &&
      !children[0].props?.loading
    ) {
      if (
        !Array.isArray(children[0].props?.children) &&
        String(children[0].props?.children?.type) === React.Fragment.toString()
      ) {
        return children[0].props?.children?.props?.children;
      }
    }
    return children;
  };

  setInitialExpandedSection: (index: number) => void = (index: number) => {
    this.setState({
      initialExpandedSections: [...this.state.initialExpandedSections, index],
    });
  };

  isExpanded: (index: number) => boolean = (index: number) =>
    this.state.expandedSections.indexOf(index) !== -1;

  isInitialExpanded: (index: number) => boolean = (index: number) =>
    this.state.initialExpandedSections.indexOf(index) !== -1;

  isExpandableCardSection: (item: any) => any | boolean = (item: any) =>
    item.type.name === CardSection.name && item.props.expandable;

  handleToggleSection: (index: number) => void = (index: number) => {
    this.setState({
      expandedSections:
        this.state.expandedSections.indexOf(index) === -1
          ? [...this.state.expandedSections, index]
          : this.state.expandedSections.filter(value => value !== index),
      initialExpandedSections: [
        ...this.state.initialExpandedSections.filter(sectionIndex => sectionIndex !== index),
      ],
    });
  };

  hasAdjustedHeader: any = () => {
    const children: any = this.getChildren();
    if (children === undefined) {
      return false;
    }
    // Check if first element is Header
    if (children && children[0] !== undefined && children[0].type.name !== CardHeader.name) {
      return false;
    }

    // Check if first section exists
    if (children && children[1] === undefined) {
      return false;
    }

    return !this.isExpandableCardSection(children[1]);
  };

  renderSection: (section: any, index: number) => React.Node = (section: any, index: number) => {
    const isExpanded = this.isExpanded(index);
    const isInitialExpanded = this.isInitialExpanded(index);

    const roundedBorders = this.getRoundedBorders(index);
    return (
      <StyledChildWrapper
        roundedTopBorders={roundedBorders.top}
        roundedBottomBorders={roundedBorders.bottom}
        expanded={isExpanded}
        initialExpanded={isInitialExpanded}
      >
        {React.cloneElement(section, {
          expanded: isExpanded,
          handleToggleSection: () => this.handleToggleSection(index),
          setInitialExpandedSection: () => this.setInitialExpandedSection(index),
        })}
      </StyledChildWrapper>
    );
  };

  render(): React.Node {
    const { closable, dataTest, spaceAfter, onClose } = this.props;
    const children = this.getChildren();
    return (
      <StyledCard
        closable={closable}
        data-test={dataTest}
        spaceAfter={spaceAfter}
        hasAdjustedHeader={this.hasAdjustedHeader()}
      >
        {children && React.Children.map(children, (item, index) => this.renderSection(item, index))}
        {closable && <CardCloseButton onClick={onClose} dataTest={CLOSE_BUTTON_DATA_TEST} />}
      </StyledCard>
    );
  }
}

export default Card;

export { default as CardHeader } from "./CardHeader";
export { default as CardSection } from "./CardSection";
export { default as CardSectionHeader } from "./CardSection/CardSectionHeader";
export { default as CardSectionContent } from "./CardSection/CardSectionContent";
