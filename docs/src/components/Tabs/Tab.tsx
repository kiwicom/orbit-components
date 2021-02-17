import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";

import StackOfTabs, { StyledWrapper as StyledStackWrapper } from "./StackOfTabs";
import { TAB_HEIGHT, BORDER_RADIUS, SHADOW_PADDING_TOP } from "./consts";

export interface TabObject {
  slug: string;
  tabCollection: string | null;
  title: string;
}

const commonStyle = css`
  ${({ theme }) => css`
    font-size: ${theme.orbit.fontSizeTextLarge};
    padding: ${theme.orbit.spaceSmall} ${theme.orbit.spaceMedium} ${theme.orbit.spaceXSmall}
      ${theme.orbit.spaceMedium};
  `}
`;

const StyledTabLink = styled(Link)`
  ${commonStyle};
  ${({ theme }) => css`
    display: flex;
    align-items: center; /* align text so it matches StyledTab */
    height: calc(${TAB_HEIGHT} - ${SHADOW_PADDING_TOP});
    color: ${theme.orbit.paletteInkLight};
    transition: color ${theme.orbit.durationFast};
    &:hover {
      color: ${theme.orbit.paletteInkNormal};
    }
  `};
`;

export const commonTabStyle = css`
  ${({ theme }) => `
    height: calc(${TAB_HEIGHT} - ${SHADOW_PADDING_TOP});
    border-top-left-radius: ${BORDER_RADIUS};
    border-top-right-radius: ${BORDER_RADIUS};
    box-shadow: ${theme.boxShadowRaisedSubtle};
    background: ${theme.orbit.paletteWhite};
  `};
`;

// needs to be a <span> to be a valid child of <StackOfTabs>
const StyledTab = styled.span<{ fullWidth?: boolean }>`
  ${commonStyle};
  ${commonTabStyle};
  ${({ theme, fullWidth }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.orbit.paletteInkNormal};
    ${fullWidth &&
    css`
      width: 100%;
    `};
    transition: box-shadow ${theme.orbit.durationFast};

    ${StyledStackWrapper}:hover & {
      box-shadow: ${theme.orbit.boxShadowRaised};
    }

    > * + * {
      margin-left: ${theme.orbit.spaceSmall};
    }
  `}
`;

interface TabProps {
  href?: string;
  stacked?: boolean;
  children: React.ReactNode;
}

export default function Tab({ href, stacked, children }: TabProps) {
  if (href) {
    return <StyledTabLink to={href}>{children}</StyledTabLink>;
  }

  if (stacked) {
    return (
      <StackOfTabs>
        <StyledTab fullWidth>{children}</StyledTab>
      </StackOfTabs>
    );
  }

  return <StyledTab>{children}</StyledTab>;
}
