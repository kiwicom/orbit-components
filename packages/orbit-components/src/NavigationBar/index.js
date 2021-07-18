// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import transition from "../utils/transition";
import defaultTheme from "../defaultTheme";
import MenuHamburger from "../icons/MenuHamburger";
import ButtonLink from "../ButtonLink";
import useStateWithCallback from "../hooks/useStateWithCallback";
import useTranslate from "../hooks/useTranslate";
import mq from "../utils/mediaQuery";

import type { Props } from ".";

const NAVBAR_HEIGHT = { MOBILE: 52, DESKTOP: 64 };

const StyledNavigationBarContent = styled.div`
  display: block;
  width: 100%;
  margin-right: ${({ theme }) => theme.orbit.spaceTwoX};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledNavigationBarContent.defaultProps = {
  theme: defaultTheme,
};

const StyledNavigationBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${NAVBAR_HEIGHT.MOBILE}px; // TODO: create token
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.orbit.paletteWhiteNormal};
  box-shadow: ${({ theme }) => theme.orbit.elevationFixedBoxShadow};
  padding: ${({ theme }) => theme.orbit.spaceThreeX};
  box-sizing: border-box;
  z-index: 700;
  transition: ${transition(["transform"], "normal", "ease-in-out")};
  transform: translate3d(0, ${({ shown }) => (shown ? "0" : `-${NAVBAR_HEIGHT.MOBILE}px`)}, 0);
  ${mq.tablet(css`
    height: ${NAVBAR_HEIGHT.DESKTOP}px; // TODO: create token
    transform: translate3d(0, ${({ shown }) => (shown ? "0" : `-${NAVBAR_HEIGHT.DESKTOP}px`)}, 0);
  `)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledNavigationBar.defaultProps = {
  theme: defaultTheme,
};

const NavigationBar = ({ onMenuOpen, children, dataTest, onShow, onHide }: Props): React.Node => {
  const translate = useTranslate();
  const resolveCallback = React.useCallback(
    state => {
      if (onHide && !state) onHide();
      if (onShow && state) onShow();
    },
    [onHide, onShow],
  );
  const [shown, setShown] = useStateWithCallback<boolean>(true, resolveCallback);

  const [prevScrollPosition, setPrevScrollPosition] = React.useState(0);

  const handleNavigationBarPosition = React.useCallback(() => {
    const currentScrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      (document.documentElement && document.documentElement.scrollTop);

    if (
      prevScrollPosition < currentScrollPosition &&
      currentScrollPosition > NAVBAR_HEIGHT.DESKTOP
    ) {
      setShown(false);
    } else {
      setShown(true);
    }

    setPrevScrollPosition(currentScrollPosition);
  }, [prevScrollPosition, setShown]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleNavigationBarPosition);
    return () => {
      window.removeEventListener("scroll", handleNavigationBarPosition);
    };
  });

  return (
    <StyledNavigationBar data-test={dataTest} shown={shown}>
      <StyledNavigationBarContent>{children}</StyledNavigationBarContent>
      {onMenuOpen && (
        <ButtonLink
          type="secondary"
          onClick={onMenuOpen}
          iconLeft={<MenuHamburger />}
          title={translate("navigationbar_open_menu")}
        />
      )}
    </StyledNavigationBar>
  );
};

export default NavigationBar;
