// @flow
import * as React from "react";
import styled from "styled-components";

import transition from "../../../utils/transition";
import { StyledIconRight } from "../TileHeader/index";
import defaultTheme from "../../../defaultTheme";

import type { Props } from ".";

export const StyledTileWrapper: any = styled.div`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  color: ${({ theme }) => theme.orbit.paletteInkNormal};
  text-decoration: none;
  background: ${({ theme }) =>
    theme.orbit.paletteWhiteNormal}; //TODO Create token backgroundColorTile
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  box-shadow: ${({ theme }) => theme.orbit.elevationActionBoxShadow};
  transition: ${transition(["box-shadow"], "fast", "ease-in-out")};

  :hover,
  :focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.orbit.elevationActionActiveBoxShadow};
    ${StyledIconRight} {
      color: ${({ theme }) => theme.orbit.paletteInkLightSecondary};
    }
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTileWrapper.defaultProps = {
  theme: defaultTheme,
};

const TileWrapper = ({
  href,
  external,
  dataTest,
  onClick,
  onKeyDown,
  children,
  as,
  tabIndex,
  role,
  ariaExpanded,
  ariaControls,
  id,
  htmlTitle,
}: Props): React.Node => (
  <StyledTileWrapper
    target={href && external ? "_blank" : undefined}
    rel={href && external ? "noopener noreferrer" : undefined}
    href={href || undefined}
    data-test={dataTest}
    onClick={onClick}
    onKeyDown={onKeyDown}
    as={as}
    tabIndex={tabIndex}
    role={role}
    aria-expanded={ariaExpanded}
    aria-controls={ariaControls}
    id={id}
    title={htmlTitle}
  >
    {children}
  </StyledTileWrapper>
);

export default TileWrapper;
