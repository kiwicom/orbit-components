import React from "react";
import { Link } from "gatsby";
import { Text } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

export interface TabObject {
  slug: string;
  tabCollection: string | null;
  title: string;
}

interface SizeCheck {
  isMediumMobile?: boolean | null;
}

const Container = styled.div`
  ${({ theme }) => `
    padding-top: 16px;
    padding-left: ${theme.orbit.spaceFourX};
    overflow: hidden;
  `};
`;

const StyledTabLink = styled(Link)`
  color: ${({ theme }) => theme.orbit.paletteInkLight};
`;

const StyledTab = styled.div`
  ${({ theme }) => css`
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    color: ${theme.orbit.paletteInkNormal};
    box-shadow: ${theme.orbit.boxShadowRaisedSubtle};
    background: linear-gradient(180deg, transparent, ${theme.orbit.paletteWhiteNormal} 27%);
    display: inline-block;
    position: relative;
  `}
`;

const StyledTabWrapper = styled.div<SizeCheck>`
  ${({ theme }) => css`
    display: inline-block;
    z-index: ${theme.orbit.zIndexSticky};
    ${StyledTab}, ${StyledTabLink} {
      padding: ${theme.orbit.spaceThreeX} ${theme.orbit.spaceFourX} ${theme.orbit.spaceTwoX}
        ${theme.orbit.spaceFourX};
      margin: 0 ${theme.orbit.spaceTwoX};
    }
  `}
`;

interface TabProps {
  isActive?: boolean;
  tab: TabObject;
}

const Tab = ({ isActive, tab }: TabProps) => {
  return (
    <StyledTabWrapper>
      {isActive ? (
        <StyledTab>
          <Text size="large" as="span">
            {tab.title}
          </Text>
        </StyledTab>
      ) : (
        <StyledTabLink to={tab.slug}>
          <Text size="large" as="span">
            {tab.title}
          </Text>
        </StyledTabLink>
      )}
    </StyledTabWrapper>
  );
};

interface Props {
  tabs: TabObject[];
  activeTab: string;
}

const Tabs = ({ activeTab, tabs }: Props) => {
  if (tabs.length === 0) return null;
  return (
    <Container>
      {tabs.map(tab => (
        <Tab key={tab.title} tab={tab} isActive={activeTab === tab.slug} />
      ))}
    </Container>
  );
};

export default Tabs;
