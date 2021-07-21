// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";
import media from "../../../utils/mediaQuery";
import CardSectionContext from "./CardSectionContext";
import ChevronDown from "../../../icons/ChevronDown";
import { getSize } from "../../../Icon";
import { ICON_SIZES } from "../../../Icon/consts";

import type { Props } from ".";

const StyledCardSectionIconRight = styled(ChevronDown)`
  align-self: center;
  transition: ${({ theme }) => theme.orbit.durationFast};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCardSectionIconRight.defaultProps = {
  theme: defaultTheme,
};

const StyledCardSectionContent = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightTextNormal};
  color: ${({ theme }) => theme.orbit.colorTextPrimary};
  border-top: ${({ theme, expanded }) =>
    expanded
      ? `1px solid ${theme.orbit.paletteCloudNormal}`
      : `0px solid ${theme.orbit.paletteCloudNormal}`};
  padding-top: ${({ theme, expanded }) => expanded && `${theme.orbit.spaceMedium}`};
  overflow: hidden;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCardSectionContent.defaultProps = {
  theme: defaultTheme,
};

const StyledCardSectionHeader = styled.div`
  margin-bottom: ${({ theme, expanded }) => expanded && theme.orbit.spaceMedium};
  display: flex;
  flex-direction: row;
  cursor: pointer;
  position: relative;
  min-height: ${({ expandable }) => expandable && getSize(ICON_SIZES.MEDIUM)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCardSectionHeader.defaultProps = {
  theme: defaultTheme,
};

export const StyledCardSection: any = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.orbit.spaceMedium};
  box-sizing: border-box;
  position: relative;
  background: ${({ theme }) => theme.orbit.backgroundCard};

  ${media.desktop(css`
    padding: ${({ theme }) => theme.orbit.spaceLarge};
  `)}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCardSection.defaultProps = {
  theme: defaultTheme,
};

class CardSection extends React.Component<any, Props> {
  componentDidMount() {
    const { handleToggleSection, initialExpanded, setInitialExpandedSection } = this.props;

    if (initialExpanded) {
      handleToggleSection();
      setInitialExpandedSection();
    }
  }

  injectCallbackAndToggleSection: () => void = () => {
    const { handleToggleSection, onClose, onExpand, expanded } = this.props;
    handleToggleSection(); // First do toggle

    if (expanded && onClose) {
      // If is expanded -> action is closing
      onClose();
    }
    if (!expanded && onExpand) {
      // if is closed > action is expanding
      onExpand();
    }
  };

  handleKeyDown: (ev: SyntheticKeyboardEvent<HTMLDivElement>) => void = (
    ev: SyntheticKeyboardEvent<HTMLDivElement>,
  ) => {
    if (ev.keyCode === 13 || ev.keyCode === 32) {
      ev.preventDefault();

      this.injectCallbackAndToggleSection();
    }
  };

  render(): React.Node {
    const { children, dataTest, expandable, expanded } = this.props;
    return (
      <StyledCardSection data-test={dataTest} expandable={expandable} expanded={expanded}>
        <CardSectionContext.Provider
          value={{
            expandable,
            expanded,
            handleToggleSection: this.injectCallbackAndToggleSection,
            onKeyDownHandler: this.handleKeyDown,
          }}
        >
          {children}
        </CardSectionContext.Provider>
      </StyledCardSection>
    );
  }
}

export default CardSection;

export { default as CardSectionHeader } from "./CardSectionHeader";
export { default as CardSectionContent } from "./CardSectionContent";
