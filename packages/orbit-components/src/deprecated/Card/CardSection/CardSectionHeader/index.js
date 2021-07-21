// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import CardSectionContext from "../CardSectionContext";
import { getSize } from "../../../../Icon";
import { ICON_SIZES } from "../../../../Icon/consts";
import defaultTheme from "../../../../defaultTheme";
import ChevronDown from "../../../../icons/ChevronDown";
import { left } from "../../../../utils/rtl";
import media from "../../../../utils/mediaQuery";

import type { Props } from ".";

const StyledCardSectionIconRight = styled(ChevronDown)`
  align-self: center;
  transition: ${({ theme }) => theme.orbit.durationFast};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCardSectionIconRight.defaultProps = {
  theme: defaultTheme,
};

export const StyledCardSectionHeader: any = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: margin ${({ theme }) => theme.orbit.durationFast} linear;
  cursor: ${({ expandable }) => expandable && "pointer"};
  position: relative;
  min-height: ${({ expandable }) => expandable && getSize(ICON_SIZES.MEDIUM)};
  margin: ${({ theme }) => `-${theme.orbit.spaceMedium}`};
  padding: ${({ theme }) => theme.orbit.spaceMedium};
  margin-bottom: ${({ expanded }) => expanded && 0};

  ${media.desktop(css`
    padding: ${({ theme }) => theme.orbit.spaceLarge};
    margin: ${({ theme }) => `-${theme.orbit.spaceLarge}`};
    margin-bottom: ${({ expanded }) => expanded && 0};
  `)}


  &:hover {
    background: ${({ theme, expandable }) => expandable && theme.orbit.paletteWhiteHover};
  }

  ${StyledCardSectionIconRight} {
    transform: ${({ expanded }) => expanded && "rotate(-180deg)"};
    margin-${left}: ${({ theme }) => theme.orbit.spaceMedium};
  }
  &:focus {
    background: ${({ theme, expandable }) => expandable && theme.orbit.paletteWhiteHover};
    outline: none;
  }


`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCardSectionHeader.defaultProps = {
  theme: defaultTheme,
};

const StyledCardSectionButtons = styled.div`
  margin-${left}: ${({ theme }) => theme.orbit.spaceLarge};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCardSectionButtons.defaultProps = {
  theme: defaultTheme,
};

const StyledCardSectionHeaderContent = styled.div`
  flex: 1;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCardSectionHeaderContent.defaultProps = {
  theme: defaultTheme,
};

const CardSectionHeader = ({ children, actions }: Props): React.Node => (
  <CardSectionContext.Consumer>
    {({ expandable, expanded, handleToggleSection, onKeyDownHandler }) => (
      <StyledCardSectionHeader
        expandable={expandable}
        expanded={expanded}
        onClick={expandable && handleToggleSection}
        aria-expanded={expandable && expanded}
        role={expandable && "button"}
        tabIndex={expandable && "0"}
        onKeyDown={onKeyDownHandler}
      >
        <StyledCardSectionHeaderContent expandable={expandable}>
          {children}
        </StyledCardSectionHeaderContent>
        {actions && <StyledCardSectionButtons>{actions}</StyledCardSectionButtons>}
        {!actions && expandable && <StyledCardSectionIconRight size="medium" color="secondary" />}
      </StyledCardSectionHeader>
    )}
  </CardSectionContext.Consumer>
);

export default CardSectionHeader;
