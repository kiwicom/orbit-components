// @flow
import * as React from "react";

import randomID from "../../utils/randomID";
import useStateWithTimeout from "../../hooks/useStateWithTimeout";
import Portal from "../../Portal";
import { StyledTooltipChildren } from "../TooltipPrimitive";
import DialogContent from "./components/DialogContent";

import type { Props } from "./index";

const MobileDialog = ({
  children,
  enabled = true,
  renderInPortal = true,
  tabIndex = "0",
  dataTest,
  content,
  stopPropagation = false,
  removeUnderlinedText,
  block = false,
  lockScrolling,
}: Props): void | React.Node | React.Node => {
  const [
    render,
    setRender,
    setRenderWithTimeout,
    clearRenderTimeout,
  ] = useStateWithTimeout<boolean>(false, 200);
  const [shown, setshown, setshownWithTimeout] = useStateWithTimeout<boolean>(false, 200);
  const mobileDialogID = React.useMemo(() => randomID("mobileDialogID"), []);

  const handleInMobile = React.useCallback(
    ev => {
      ev.preventDefault();
      if (stopPropagation) {
        ev.stopPropagation();
      }

      setRender(true);
      setshownWithTimeout(true);
      clearRenderTimeout();
    },
    [clearRenderTimeout, setRender, setshownWithTimeout, stopPropagation],
  );

  const handleOutMobile = React.useCallback(
    ev => {
      if (stopPropagation) {
        ev.stopPropagation();
      }
      setshown(false);
      setRenderWithTimeout(false);
    },
    [setRenderWithTimeout, setshown, stopPropagation],
  );

  if (!enabled) return children;

  const dialog = (
    <DialogContent
      dataTest={dataTest}
      shown={shown}
      lockScrolling={lockScrolling}
      dialogId={mobileDialogID}
      onClose={handleOutMobile}
    >
      {content}
    </DialogContent>
  );

  return (
    <>
      <StyledTooltipChildren
        onClick={handleInMobile}
        aria-describedby={enabled ? mobileDialogID : undefined}
        tabIndex={enabled ? tabIndex : undefined}
        enabled={enabled}
        removeUnderlinedText={removeUnderlinedText}
        block={block}
      >
        {children}
      </StyledTooltipChildren>
      {enabled &&
        render &&
        (renderInPortal ? <Portal renderInto="dialogs">{dialog}</Portal> : dialog)}
    </>
  );
};

export default MobileDialog;
