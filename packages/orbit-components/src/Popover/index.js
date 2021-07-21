// @flow
import * as React from "react";
import styled from "styled-components";

import Portal from "../Portal";
import PopoverContentWrapper from "./components/ContentWrapper";
import type { Props } from "./index.js.flow";
import useTheme from "../hooks/useTheme";
import useStateWithTimeout from "../hooks/useStateWithTimeout";
import { POSITIONS, ALIGNS } from "./consts";
import handleKeyDown from "../utils/handleKeyDown";

const StyledPopoverChild = styled.div`
  position: relative;
`;

const Popover = ({
  children,
  offset = { top: 0, left: 0 },
  content,
  preferredPosition = POSITIONS.BOTTOM,
  preferredAlign = ALIGNS.START,
  dataTest,
  opened,
  width,
  noPadding,
  overlapped,
  onClose,
  onOpen,
  fixed,
  lockScrolling,
  actions,
  renderInPortal = true,
}: Props): React.Node => {
  const theme = useTheme();
  const transitionLength = React.useMemo(() => parseFloat(theme.orbit.durationFast) * 1000, [
    theme.orbit.durationFast,
  ]);
  const [shown, setShown, setShownWithTimeout, clearShownTimeout] = useStateWithTimeout<boolean>(
    false,
    transitionLength,
  );
  const [
    render,
    setRender,
    setRenderWithTimeout,
    clearRenderTimeout,
  ] = useStateWithTimeout<boolean>(false, transitionLength);
  const container: {| current: React.ElementRef<*> |} = React.useRef(null);

  const resolveCallback = React.useCallback(
    state => {
      if (onClose && !state) onClose();
      if (onOpen && state) onOpen();
    },
    [onClose, onOpen],
  );

  const handleOut = React.useCallback(
    ev => {
      // If open prop is present ignore custom handler
      if (container.current && !container.current.contains(ev.target)) {
        if (typeof opened === "undefined") {
          setShown(false);
          clearShownTimeout();
          setRenderWithTimeout(false);
          resolveCallback(false);
        } else if (onClose) onClose();
      }
    },
    [clearShownTimeout, onClose, opened, resolveCallback, setRenderWithTimeout, setShown],
  );

  const handleClick = React.useCallback(() => {
    // If open prop is present ignore custom handler
    if (typeof opened === "undefined") {
      if (shown) {
        setShown(false);
        clearShownTimeout();
        setRenderWithTimeout(false);
        resolveCallback(false);
      } else {
        setRender(true);
        clearRenderTimeout();
        setShownWithTimeout(true);
        resolveCallback(true);
      }
    } else if (opened) {
      resolveCallback(false);
    } else if (!opened) {
      resolveCallback(true);
    }
  }, [
    clearRenderTimeout,
    clearShownTimeout,
    opened,
    resolveCallback,
    setRender,
    setRenderWithTimeout,
    setShown,
    setShownWithTimeout,
    shown,
  ]);

  React.useEffect(() => {
    if (typeof opened !== "undefined") {
      if (opened) {
        setRender(true);
        clearRenderTimeout();
        setShownWithTimeout(true);
      } else {
        setShown(false);
        clearShownTimeout();
        setRenderWithTimeout(false);
      }
    }
  }, [
    opened,
    clearRenderTimeout,
    clearShownTimeout,
    setRender,
    setShown,
    setShownWithTimeout,
    setRenderWithTimeout,
  ]);

  const popover = (
    <PopoverContentWrapper
      shown={shown}
      offset={{ top: 0, left: 0, ...offset }}
      width={width}
      containerRef={container}
      preferredPosition={preferredPosition}
      preferredAlign={preferredAlign}
      onClose={handleOut}
      dataTest={dataTest}
      noPadding={noPadding}
      overlapped={overlapped}
      fixed={fixed}
      lockScrolling={lockScrolling}
      actions={actions}
    >
      {content}
    </PopoverContentWrapper>
  );

  return (
    <>
      <StyledPopoverChild
        onClick={handleClick}
        onKeyDown={handleKeyDown(handleClick)}
        ref={container}
      >
        {children}
      </StyledPopoverChild>
      {render && (renderInPortal ? <Portal renderInto="popovers">{popover}</Portal> : popover)}
    </>
  );
};

export default Popover;
