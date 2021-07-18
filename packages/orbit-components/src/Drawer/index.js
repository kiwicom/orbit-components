// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import transparentColor from "@kiwicom/orbit-design-tokens/lib/js/transparentColor";

import transition from "../utils/transition";
import mq from "../utils/mediaQuery";
import defaultTheme from "../defaultTheme";
import DrawerClose from "./components/DrawerClose";
import POSITIONS from "./consts";
import getPosition from "./helpers/getPosition";
import getTransitionAnimation from "./helpers/getTransitionAnimation";
import useTheme from "../hooks/useTheme";
import Stack from "../Stack";
import useStateWithTimeout from "../hooks/useStateWithTimeout";
import Heading from "../Heading";
import { rtlSpacing } from "../utils/rtl";

import type { Props } from ".";

const getPadding = ({ noPadding, theme, hasTopPadding }) => {
  const padding = space => (!hasTopPadding ? rtlSpacing(`0 ${space} ${space}`) : space);
  return (
    !noPadding &&
    css`
      padding: ${padding(theme.orbit.spaceFourX)};
      ${mq.largeMobile(css`
        padding: ${padding(theme.orbit.spaceEightX)}};
      `)};
    `
  );
};

const StyledDrawer = styled.div`
  display: flex;
  visibility: ${({ overlayShown }) => (overlayShown ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme, shown }) =>
    shown ? transparentColor(theme.orbit.paletteInkNormal, 50) : "transparent"};
  // TODO: use z-index framework
  z-index: 825;
  transition: ${transition(["background-color"], "fast", "ease-in-out")};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledDrawer.defaultProps = {
  theme: defaultTheme,
};

const StyledDrawerSide = styled(({ theme, width, position, shown, suppressed, ...props }) => (
  <aside {...props} />
))`
  display: block;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  bottom: 0;
  height: 100%;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  overflow-y: auto;
  box-shadow: ${({ theme }) => theme.orbit.elevationRaisedBoxShadow};
  background: ${({ theme, suppressed }) =>
    suppressed
      ? theme.orbit.paletteCloudLight
      : theme.orbit.paletteWhiteNormal}; // TODO: create token backgroundDrawer
  transition: ${transition(["transform"], "normal", "ease-in-out")};
  width: 100%;
  ${mq.largeMobile(css`
    max-width: ${({ width }) => width};
  `)};
  ${getPosition};
  ${getTransitionAnimation};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledDrawerSide.defaultProps = {
  theme: defaultTheme,
};

const StyledDrawerContent = styled(
  ({ theme, type, hasTopPadding, noPadding, hasClose, ...props }) => <div {...props} />,
)`
  ${getPadding};
  margin-bottom: ${({ theme, noPadding }) => noPadding && theme.orbit.spaceSixX};
  margin-top: ${({ hasClose, theme, noPadding }) =>
    !hasClose && noPadding && theme.orbit.spaceSixX};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledDrawerContent.defaultProps = {
  theme: defaultTheme,
};

const StyledDrawerHeader = styled.div`
  display: flex;
  justify-content: ${({ onlyIcon }) => (onlyIcon ? "flex-end" : "space-between")};
  align-items: center;
  background: ${({ suppressed, bordered, theme }) =>
    suppressed && !bordered ? theme.orbit.paletteCloudLight : theme.orbit.paletteWhiteNormal};
  height: 64px;
  box-sizing: border-box;
  ${({ bordered, theme }) =>
    bordered &&
    css`
      border-bottom: 1px solid ${theme.orbit.paletteCloudNormal};
    `};
  ${({ noPadding, theme }) =>
    !noPadding &&
    css`
      padding: 0 ${theme.orbit.spaceFourX};
      ${mq.largeMobile(css`
        padding: ${rtlSpacing(`0 ${theme.orbit.spaceSixX} 0 ${theme.orbit.spaceEightX}`)};
      `)};
    `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledDrawerHeader.defaultProps = {
  theme: defaultTheme,
};

const Drawer = ({
  children,
  onClose,
  shown = true,
  width = "320px",
  position = POSITIONS.RIGHT,
  dataTest,
  noPadding,
  suppressed,
  title,
  actions,
}: Props): React.Node => {
  const theme = useTheme();
  const overlayRef = React.useRef(null);
  const timeoutLength = React.useMemo(() => parseFloat(theme.orbit.durationNormal) * 1000, [
    theme.orbit.durationNormal,
  ]);
  const [overlayShown, setOverlayShown, setOverlayShownWithTimeout] = useStateWithTimeout<boolean>(
    shown,
    timeoutLength,
  );
  const handleOnClose = React.useCallback(
    ev => {
      if (onClose && ev.target === overlayRef.current) {
        onClose();
      }
    },
    [onClose],
  );

  React.useEffect(() => {
    if (overlayShown !== shown) {
      if (shown) {
        setOverlayShown(true);
      } else if (!shown) {
        setOverlayShownWithTimeout(false);
      }
    }
  }, [overlayShown, setOverlayShown, setOverlayShownWithTimeout, shown]);
  return (
    <StyledDrawer
      role="button"
      overlayShown={overlayShown}
      shown={shown}
      onClick={handleOnClose}
      data-test={dataTest}
      aria-hidden={!shown}
      ref={overlayRef}
    >
      <StyledDrawerSide
        shown={shown}
        width={width}
        position={position}
        role="navigation"
        suppressed={suppressed}
      >
        {(title || actions || onClose) && (
          <StyledDrawerHeader
            onlyIcon={!title && !actions}
            bordered={title || actions}
            suppressed={suppressed}
          >
            {title && <Heading type="title2">{title}</Heading>}
            {actions && (
              <Stack spacing="none" justify="end" flex shrink>
                {actions}
              </Stack>
            )}
            {onClose && <DrawerClose onClick={onClose} />}
          </StyledDrawerHeader>
        )}
        <StyledDrawerContent
          noPadding={noPadding}
          hasClose={!!onClose}
          hasTopPadding={title || actions}
        >
          {children}
        </StyledDrawerContent>
      </StyledDrawerSide>
    </StyledDrawer>
  );
};

export default Drawer;
