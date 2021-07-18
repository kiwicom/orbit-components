// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";
import createRel from "../primitives/ButtonPrimitive/common/createRel";

import type { Props, GetLinkStyleProps } from "./index";

const getColor = ({ theme, type }) => {
  const tokens = {
    [TYPE_OPTIONS.PRIMARY]: theme.orbit.textLinkPrimaryForeground,
    [TYPE_OPTIONS.SECONDARY]: theme.orbit.textLinkSecondaryForeground,
    [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDark,
    [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDark,
    [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDark,
    [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDark,
  };

  return tokens[type];
};

const getHoverColor = ({ type, theme }) => {
  const tokens = {
    [TYPE_OPTIONS.PRIMARY]: theme.orbit.paletteProductNormalSecondary,
    [TYPE_OPTIONS.SECONDARY]: theme.orbit.paletteProductNormalSecondary,
    [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDarkSecondary,
    [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDarkSecondary,
    [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDarkSecondary,
    [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDarkSecondary,
  };
  return tokens[type];
};
const getSizeToken = () => ({ theme, size }) => {
  const sizeTokens = {
    [SIZE_OPTIONS.LARGE]: theme.orbit.fontSizeLarge,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeNormal,
    [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeSmall,
  };
  return size && sizeTokens[size];
};

const StyledIconContainer = styled(({ children, className }) => (
  <span className={className}>{children}</span>
))`
  display: flex;
  align-items: center;

  & svg {
    width: ${({ theme }) => theme.orbit.iconExtraSmallSize};
    height: ${({ theme }) => theme.orbit.iconExtraSmallSize};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledIconContainer.defaultProps = {
  theme: defaultTheme,
};

const resolveUnderline = ({ type, theme, noUnderline }) => {
  if (noUnderline) return "none";
  // TODO: type not needed, there's only one token for underline
  return type === TYPE_OPTIONS.SECONDARY
    ? theme.orbit.textLinkTextDecoration
    : theme.orbit.textLinkTextDecoration;
};

export const getLinkStyle = ({ theme, type }: GetLinkStyleProps): any => css`
  // Common styles for TextLink and "a" in Text

  &,
  &:link,
  &:visited {
    color: ${getColor({ theme, type })};
    text-decoration: ${resolveUnderline};
    font-weight: ${theme.orbit.textLinkFontWeight};
  }

  :hover,
  :active,
  :focus {
    outline: none;
    text-decoration: none;
    color: ${getHoverColor({ theme, type })};
  }
`;

export const StyledTextLink: any = styled(
  ({ theme, type, standAlone, noUnderline, asComponent: Component, ...props }) => (
    <Component {...props}>{props.children}</Component>
  ),
)`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-weight: ${({ theme }) => theme.orbit.textLinkFontWeight};
  font-size: ${getSizeToken};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  height: ${({ standAlone, theme }) => standAlone && theme.orbit.formBoxNormalHeight};
  ${getLinkStyle};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTextLink.defaultProps = {
  theme: defaultTheme,
};

// eslint-disable-next-line jsx-a11y/anchor-has-content
const DefaultComponent = props => <a {...props} />;

const IconContainer = ({ children }) => {
  if (!children) return null;
  return <StyledIconContainer>{children}</StyledIconContainer>;
};

const TextLink = ({
  ariaCurrent,
  type = TYPE_OPTIONS.PRIMARY,
  size,
  children,
  href,
  external = false,
  rel,
  iconLeft,
  iconRight,
  onClick,
  dataTest,
  tabIndex,
  asComponent = DefaultComponent,
  stopPropagation = false,
  title,
  standAlone,
  noUnderline,
}: Props): React.Node => {
  const onClickHandler = ev => {
    if (stopPropagation) {
      ev.stopPropagation();
    }
    if (onClick) onClick(ev);
  };

  return (
    <StyledTextLink
      aria-current={ariaCurrent}
      type={type}
      size={size}
      href={href}
      target={external ? "_blank" : undefined}
      rel={createRel({ href, external, rel })}
      onClick={onClickHandler}
      data-test={dataTest}
      tabIndex={tabIndex || (!href ? "0" : undefined)}
      role={!href ? "button" : undefined}
      asComponent={asComponent}
      title={title}
      noUnderline={noUnderline}
      standAlone={standAlone}
    >
      {<IconContainer>{iconLeft}</IconContainer>}
      {children}
      {<IconContainer>{iconRight}</IconContainer>}
    </StyledTextLink>
  );
};

export default TextLink;
