// @flow
import * as React from "react";
import styled from "styled-components";

import KEY_CODE_MAP from "../common/keyMaps";
import defaultTheme from "../defaultTheme";

import type { Props } from "./index";

const StyledNavigation = styled.nav``;

const StyledLink = styled.a`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  text-decoration: ${({ theme }) => theme.orbit.textLinkTextDecoration};
  font-size: ${({ theme }) => theme.orbit.fontSizeLarge}; /* TODO: ADD TOKEN */
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal}; /* TODO: ADD TOKEN */
  color: ${({ theme }) => theme.orbit.paletteInkNormal}; /* TODO: ADD TOKEN */

  &:focus {
    top: 1rem;
    left: 1rem;
    clip: auto;
    height: auto;
    width: auto;
    margin: 0;
    overflow: visible;
    padding: ${({ theme }) => theme.orbit.spaceFourX}; /* TODO: ADD TOKEN */
    background-color: ${({ theme }) => theme.orbit.paletteWhiteNormal}; /* TODO: ADD TOKEN */
    z-index: ${({ theme }) => theme.orbit.zIndexOnTheTop}; /* TODO: ADD TOKEN */
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledLink.defaultProps = {
  theme: defaultTheme,
};

const SkipLink = ({ links, buttonLabel }: Props): React.Node => {
  return (
    <StyledNavigation aria-label={buttonLabel}>
      {links &&
        links.map(({ href, name, onClick }, index) => {
          return (
            <StyledLink
              key={encodeURIComponent(name + index)}
              href={href}
              tabIndex={onClick && "0"}
              role={href ? "link" : "button"}
              onClick={onClick}
              onKeyDown={ev => {
                if (ev.keyCode === KEY_CODE_MAP.ENTER && onClick) {
                  onClick();
                }
              }}
            >
              {name}
            </StyledLink>
          );
        })}
    </StyledNavigation>
  );
};

export default SkipLink;
