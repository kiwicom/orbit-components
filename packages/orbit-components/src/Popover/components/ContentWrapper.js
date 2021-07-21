// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";
import { usePopper } from "react-popper";

import defaultTheme from "../../defaultTheme";
import mq from "../../utils/mediaQuery";
import Button from "../../Button";
import type { Props } from "./ContentWrapper.js.flow";
import useMediaQuery from "../../hooks/useMediaQuery";
import Translate from "../../Translate";
import transition from "../../utils/transition";
import useClickOutside from "../../hooks/useClickOutside";
import { ModalContext } from "../../Modal/ModalContext";
import { StyledButtonPrimitive } from "../../primitives/ButtonPrimitive";
import { PLACEMENTS } from "../consts";
import boundingClientRect from "../../utils/boundingClientRect";

const mobileTop = theme => theme.orbit.spaceXLarge;
const popoverPadding = ({ theme }) => () => theme.orbit.spaceMedium;

const StyledContentWrapper = styled.div`
  ${({ theme, windowHeight, actionsHeight }) => css`
    overflow: auto;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    position: absolute;
    left: 0;
    width: 100%;
    background-color: ${theme.orbit.paletteWhite};
    max-height: ${windowHeight - actionsHeight - 32}px;
    bottom: ${actionsHeight || 0}px;

    ${mq.largeMobile(css`
      max-height: 100%;
      border-radius: 3px;
      bottom: auto;
      left: auto;
      position: relative;
    `)}
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledContentWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledActions = styled.div`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding: ${popoverPadding};
    padding-top: ${theme.orbit.spaceSmall};
    background-color: ${theme.orbit.paletteWhite};
    ${StyledButtonPrimitive} {
      width: 100%;
      flex: 1 1 auto;
    }
    ${mq.largeMobile(css`
      position: relative;
      bottom: auto;
      left: auto;
      ${StyledButtonPrimitive} {
        width: auto;
        flex-grow: 0;
      }
    `)};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledActions.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverParent = styled.div`
  ${({
    isInsideModal,
    fixed,
    width,
    shown,
    theme,
    transform,
    top,
    left,
    bottom,
    right,
    position,
    shownMobile,
  }) => css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
    width: 100%;
    z-index: 1000;
    box-sizing: border-box;
    box-shadow: ${theme.orbit.boxShadowRaisedReverse};
    background-color: ${theme.orbit.backgroundModal};
    max-height: ${`calc(100% - ${mobileTop(theme)})`};
    transform: translateY(${shownMobile ? "0%" : "100%"});
    transition: ${transition(["opacity", "transform"], "fast", "ease-in-out")};
    &:focus {
      outline: 0;
    }
    ${mq.largeMobile(css`
      top: ${top};
      left: ${left};
      bottom: ${bottom};
      right: ${right};
      transform: ${transform};
      position: ${position};
      z-index: ${isInsideModal ? "1000" : "600"};
      width: ${width ? `${width}` : "auto"};
      border-radius: ${theme.orbit.borderRadiusNormal};
      box-shadow: ${theme.orbit.boxShadowRaised};
      opacity: ${shown ? "1" : "0"};
      max-height: none;
    `)}
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledPopoverParent.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverPadding = styled.div`
  padding: ${({ noPadding }) =>
    // $FlowFixMe: TODO
    noPadding ? 0 : popoverPadding};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledPopoverPadding.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverContent = styled.div``;

const StyledOverlay = styled.div`
  ${({ theme, shown }) => css`
    display: block;
    position: fixed;
    opacity: ${shown ? "1" : "0"};
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: ${convertHexToRgba(theme.orbit.paletteInkNormal, 60)};
    transition: ${transition(["opacity"], "normal", "ease-in-out")};
    z-index: 999;

    ${mq.largeMobile(css`
      display: none;
    `)};
  `}
`;
// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledOverlay.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverClose = styled.div`
  padding: ${popoverPadding};
  ${mq.largeMobile(css`
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
  onClose,
  width,
  offset,
  referenceElement,
  dataTest,
  placement = PLACEMENTS.BOTTOM_START,
  noPadding,
  overlapped,
  shown,
  fixed,
  actions,
}: Props): React.Node => {
  const popoverRef = React.useRef(null);
  const [actionsDimensions, setActionsDimensions] = React.useState(0);
  const intervalRef = React.useRef(null);
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  const { isInsideModal } = React.useContext(ModalContext);
  const { isTablet } = useMediaQuery();
  const content: {| current: React.ElementRef<*> |} = React.useRef(null);

  const { styles } = usePopper(referenceElement, popoverRef.current, {
    placement,
    strategy: fixed ? "fixed" : "absolute",
    modifiers: [
      {
        name: "offset",
        enabled: !!offset,
        options: {
          offset: [offset?.left, offset?.top],
        },
      },
    ],
  });

  const { popper } = styles;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (popoverRef.current) {
        popoverRef.current.focus();
      }
    }, 100);
    return () => {
      clearTimeout(timer);
      clearTimeout(intervalRef.current);
    };
  }, []);

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

  useClickOutside(content, ev => {
    if (isTablet) onClose(ev);
  });

  const handleKeyDown = (ev: SyntheticKeyboardEvent<HTMLDivElement>) => {
    if (ev.keyCode === 27 && onClose) onClose(ev);
  };

  return (
    <>
      <StyledOverlay shown={shown} isInsideModal={isInsideModal} onMouseDown={onClose} />
      {/* $FlowFixMe: https://github.com/popperjs/react-popper/issues/318 */}
      <StyledPopoverParent
        shownMobile={shown}
        width={width}
        ref={popoverRef}
        tabIndex="0"
        data-test={dataTest}
        noPadding={noPadding}
        overlapped={overlapped}
        role="tooltip"
        onKeyDown={handleKeyDown}
        fixed={fixed}
        shown={shown}
        isInsideModal={isInsideModal}
        {...popper}
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
