// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import transparentColor from "@kiwicom/orbit-design-tokens/lib/js/transparentColor";

import defaultTheme from "../../defaultTheme";
import media from "../../utils/mediaQuery";
import Button from "../../Button";
import resolvePopoverPosition from "../helpers/resolvePopoverPosition";
import resolvePopoverHorizontal from "../helpers/resolvePopoverHorizontal";
import calculatePopoverPosition from "../helpers/calculatePopoverPosition";
import calculateVerticalPosition from "../helpers/calculateVerticalPosition";
import calculateHorizontalPosition from "../helpers/calculateHorizontalPosition";
import type { Props } from "./ContentWrapper.js.flow";
import useDimensions from "../hooks/useDimensions";
import useMediaQuery from "../../hooks/useMediaQuery";
import Translate from "../../Translate";
import transition from "../../utils/transition";
import useClickOutside from "../../hooks/useClickOutside";
import { ModalContext } from "../../Modal/ModalContext";
import boundingClientRect from "../../utils/boundingClientRect";
import getScrollableParent from "../helpers/getScrollableParent";
import { StyledButtonPrimitive } from "../../primitives/ButtonPrimitive";

const mobileTop = theme => theme.orbit.spaceEightX;
const popoverPadding = theme => theme.orbit.spaceFourX;

const StyledContentWrapper = styled.div`
  overflow: auto;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.orbit.paletteWhiteNormal};
  max-height: ${({ windowHeight, actionsHeight }) => `${windowHeight - actionsHeight - 32}px`};
  bottom: ${({ actionsHeight }) => actionsHeight || 0}px;

  ${media.largeMobile(css`
    max-height: 100%;
    border-radius: 3px;
    bottom: auto;
    left: auto;
    position: relative;
  `)}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledContentWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledActions = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: ${({ theme }) => popoverPadding(theme)};
  padding-top: ${({ theme }) => theme.orbit.spaceThreeX};
  background-color: ${({ theme }) => theme.orbit.paletteWhiteNormal};
  ${StyledButtonPrimitive} {
    width: 100%;
    flex: 1 1 auto;
  }
  ${media.largeMobile(css`
    position: relative;
    bottom: auto;
    left: auto;
    ${StyledButtonPrimitive} {
      width: auto;
      flex-grow: 0;
    }
  `)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledActions.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverParent = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.orbit.elevationFlatBackground}; // TODO: Add token
  box-shadow: ${({ theme }) => theme.orbit.elevationRaisedReverseBoxShadow};
  z-index: 1000;
  transition: ${transition(["opacity", "transform"], "fast", "ease-in-out")};
  transform: translateY(${({ shownMobile }) => (shownMobile ? "0%" : "100%")});
  max-height: ${({ theme }) => `calc(100% - ${mobileTop(theme)})`};
  &:focus {
    outline: 0;
  }
  ${media.largeMobile(css`
    z-index: ${({ isInsideModal }) => (isInsideModal ? "1000" : "600")};
    position: ${({ fixed }) => (fixed ? "fixed" : "absolute")};
    left: auto;
    right: auto;
    bottom: auto;
    width: ${({ width }) => (width ? `${width}` : "auto")};
    opacity: ${({ shown }) => (shown ? "1" : "0")};
    transform: none;
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
    box-shadow: ${({ theme }) => theme.orbit.elevationRaisedBoxShadow};
    max-height: none;
    ${resolvePopoverPosition}
    ${resolvePopoverHorizontal}
  `)}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledPopoverParent.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverPadding = styled.div`
  padding: ${({ noPadding, theme }) => (noPadding ? 0 : popoverPadding(theme))};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledPopoverPadding.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverContent = styled.div``;

const StyledOverlay = styled.div`
  display: block;
  position: fixed;
  opacity: ${({ shown }) => (shown ? "1" : "0")};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => transparentColor(theme.orbit.paletteInkNormal, 60)};
  transition: ${transition(["opacity"], "normal", "ease-in-out")};
  z-index: 999;

  ${media.largeMobile(css`
    display: none;
  `)};
`;
// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledOverlay.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverClose = styled.div`
  padding: ${({ theme }) => popoverPadding(theme)};

  ${media.largeMobile(css`
    display: none;
    visibility: hidden;
    padding-bottom: 0;
  `)}
`;
// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledPopoverClose.defaultProps = {
  theme: defaultTheme,
};

const PopoverContentWrapper = ({
  children,
  offset,
  onClose,
  width,
  dataTest,
  preferredPosition,
  preferredAlign,
  containerRef,
  noPadding,
  overlapped,
  shown,
  fixed,
  actions,
}: Props): React.Node => {
  const { isInsideModal } = React.useContext(ModalContext);
  const { isTablet } = useMediaQuery();
  const popover: {| current: React.ElementRef<*> |} = React.useRef(null);
  const content: {| current: React.ElementRef<*> |} = React.useRef(null);
  const intervalRef = React.useRef(null);
  const position = calculatePopoverPosition(preferredPosition, preferredAlign);
  const scrollableParent = React.useMemo(() => getScrollableParent(containerRef.current), [
    containerRef,
  ]);
  const dimensions = useDimensions({
    containerRef,
    popover,
    content,
    fixed,
    scrollableParent,
    children,
  });
  const verticalPosition = calculateVerticalPosition(position[0], dimensions);
  const horizontalPosition = calculateHorizontalPosition(position[1], dimensions);
  const [actionsDimensions, setActionsDimensions] = React.useState(0);
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  const measuredRef = React.useCallback(
    node => {
      if (node !== null) {
        const timer = setTimeout(() => {
          setActionsDimensions(boundingClientRect({ current: node }));
        }, 15);
        intervalRef.current = timer;
      }
    },
    // this measures the element that's containing actions
    // so it needs to be re-measured every time actions change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [actions],
  );

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (popover.current) {
        popover.current.focus();
      }
    }, 100);
    return () => {
      clearTimeout(timer);
      clearTimeout(intervalRef.current);
    };
  }, []);

  useClickOutside(popover, ev => {
    if (isTablet) onClose(ev);
  });

  const handleKeyDown = (ev: SyntheticKeyboardEvent<HTMLDivElement>) => {
    if (ev.keyCode === 27 && onClose) onClose(ev);
  };

  return (
    <>
      <StyledOverlay shown={shown} isInsideModal={isInsideModal} onMouseDown={onClose} />
      <StyledPopoverParent
        shownMobile={shown}
        shown={shown && verticalPosition && horizontalPosition}
        anchor={horizontalPosition}
        position={verticalPosition}
        containerTop={dimensions.containerTop}
        containerLeft={dimensions.containerLeft}
        containerPureTop={dimensions.containerPureTop}
        containerHeight={dimensions.containerHeight}
        containerWidth={dimensions.containerWidth}
        popoverHeight={dimensions.popoverHeight}
        popoverWidth={dimensions.popoverWidth}
        width={width}
        ref={popover}
        tabIndex="0"
        offset={offset}
        data-test={dataTest}
        noPadding={noPadding}
        overlapped={overlapped}
        role="tooltip"
        onKeyDown={handleKeyDown}
        fixed={fixed}
        isInsideModal={isInsideModal}
      >
        <StyledPopoverContent ref={content}>
          <StyledContentWrapper
            actionsHeight={actionsDimensions ? actionsDimensions.height : 0}
            windowHeight={windowHeight}
          >
            <StyledPopoverPadding noPadding={noPadding}>{children}</StyledPopoverPadding>
          </StyledContentWrapper>

          {actions ? (
            <StyledActions ref={measuredRef}>{actions}</StyledActions>
          ) : (
            <StyledPopoverClose ref={measuredRef}>
              <Button type="secondary" fullWidth onClick={onClose}>
                <Translate tKey="button_close" />
              </Button>
            </StyledPopoverClose>
          )}
        </StyledPopoverContent>
      </StyledPopoverParent>
    </>
  );
};

export default PopoverContentWrapper;
