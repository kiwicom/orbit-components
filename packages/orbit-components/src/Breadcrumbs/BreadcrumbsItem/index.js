// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import ChevronRight from "../../icons/ChevronRight";

import type { Props } from ".";

const StyledBreadcrumbsItem = styled.li`
  display: flex;
  align-items: center;
`;

const StyledBreadcrumbsItemAnchor = styled(
  ({ active, component, children, isClickable, theme, ...props }) => {
    const Component = isClickable ? component : "div";
    return <Component {...props}>{children}</Component>;
  },
)`
  font-weight: ${({ active, theme }) =>
    active ? theme.orbit.fontWeightBold : theme.orbit.fontWeightMedium};
  color: ${({ theme }) => theme.orbit.paletteInkNormal};
  text-decoration: ${({ isClickable, active }) => (isClickable && !active ? "underline" : "none")};

  ${({ isClickable }) =>
    isClickable &&
    css`
      transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
      cursor: pointer;

      &:hover,
      &:focus {
        outline: none;
        text-decoration: none;
      }
      &:hover {
        color: ${({ theme }) => theme.orbit.paletteProductNormalHover};
      }
      :focus {
        color: ${({ theme }) => theme.orbit.paletteProductNormalActive};
      }
    `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledBreadcrumbsItemAnchor.defaultProps = {
  theme: defaultTheme,
};

const StyledBreadcrumbsItemIcon = styled(ChevronRight)`
  margin: 0 ${({ theme }) => theme.orbit.spaceXXSmall};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledBreadcrumbsItemIcon.defaultProps = {
  theme: defaultTheme,
};

// eslint-disable-next-line jsx-a11y/anchor-has-content
const DefaultComponent = props => <a {...props} />;

const BreadcrumbsItem = ({
  active,
  children,
  dataTest,
  onClick,
  href,
  contentKey,
  component = DefaultComponent,
  id,
  ...props
}: Props): React.Node => {
  return (
    <StyledBreadcrumbsItem
      data-test={dataTest}
      aria-current={active ? "page" : undefined}
      itemProp="itemListElement"
      itemScope
      itemType="http://schema.org/ListItem"
    >
      <StyledBreadcrumbsItemAnchor
        isClickable={href || onClick}
        href={href}
        component={component}
        active={active}
        onClick={onClick}
        itemScope
        itemType="http://schema.org/WebPage"
        itemProp="item"
        itemID={id || href}
        {...props}
      >
        <span itemProp="name">{children}</span>
      </StyledBreadcrumbsItemAnchor>
      <meta itemProp="position" content={contentKey} />
      {!active && (
        <StyledBreadcrumbsItemIcon ariaHidden reverseOnRtl size="small" color="secondary" />
      )}
    </StyledBreadcrumbsItem>
  );
};

export default BreadcrumbsItem;
