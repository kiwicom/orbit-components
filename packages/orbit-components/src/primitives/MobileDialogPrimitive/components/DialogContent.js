// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { StyledText } from "../../../Text/index";
import { Item } from "../../../List/ListItem/index";
import defaultTheme from "../../../defaultTheme";
import Button from "../../../Button";
import Translate from "../../../Translate";
import { StyledTextLink } from "../../../TextLink";
import transition from "../../../utils/transition";
import FOCUSABLE_ELEMENT_SELECTORS from "../../../hooks/useFocusTrap/consts";
import type { Props } from "./DialogContent.flow";
import useLockScrolling from "../../../hooks/useLockScrolling";

const StyledDialog = styled.div`
  width: 100%;
`;

const StyledDialogWrapper = styled.div`
  position: fixed;
  width: ${({ theme }) => `calc(100% - ${theme.orbit.spaceXLarge})`};
  box-sizing: border-box;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.orbit.paletteInkNormal};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowRaisedReverse};
  padding: ${({ theme }) => theme.orbit.spaceMedium}; // TODO: create token paddingTooltip
  visibility: ${({ shown }) => (shown ? "visible" : "hidden")};
  opacity: ${({ shown }) => (shown ? "1" : "0")};
  transition: ${({ theme, shown }) =>
    css`
      ${transition(["transform"], "normal", "ease-in-out")},
      ${transition(["visibility"], "fast", "linear")},
        ${!shown && theme.orbit.durationNormal}
    `};

  z-index: 10012; // TODO: use some good value
  transform: ${({ shown }) => (!shown ? "translateY(calc(100% + 16px))" : "translateY(0)")};
  bottom: ${({ theme }) => theme.orbit.spaceMedium};
  left: ${({ theme }) => theme.orbit.spaceMedium};
  right: ${({ theme }) => theme.orbit.spaceMedium};
  max-height: ${({ theme }) => `calc(100% - ${theme.orbit.spaceXLarge})`};
  overflow-y: scroll;

  img {
    max-width: 100%;
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledDialogWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledTooltipContent = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  font-weight: ${({ theme }) => theme.orbit.fontWeightNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightTextNormal};
  color: ${({ theme }) => theme.orbit.paletteWhite};
  margin-bottom: ${({ theme }) => theme.orbit.spaceMedium};

  & ${StyledText}, ${Item} {
    font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
    font-weight: ${({ theme }) => theme.orbit.fontWeightNormal};
    color: ${({ theme }) => theme.orbit.paletteWhite};
  }

  & ${StyledTextLink} {
    color: ${({ theme }) => theme.orbit.paletteWhite};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTooltipContent.defaultProps = {
  theme: defaultTheme,
};

const StyledDialogOverlay = styled.div`
  position: fixed;
  visibility: ${({ shown }) => (shown ? "visible" : "hidden")};
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(23, 27, 30, 0.6); // TODO: token
  z-index: 10011; // TODO: use some good value
  opacity: ${({ shown }) => (shown ? "1" : "0")};
  transition: ${({ theme, shown }) => css`
    ${transition(["opacity"], "normal", "ease-in-out")},
    ${transition(["visibility"], "fast", "linear")},
    ${!shown && theme.orbit.durationNormal}
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledDialogOverlay.defaultProps = {
  theme: defaultTheme,
};

const DialogContent = ({
  dataTest,
  shown,
  lockScrolling = true,
  dialogId,
  children,
  onClose,
}: Props): React.Node => {
  const overlay = React.useRef(null);
  const dialog = React.useRef<HTMLElement | null>(null);
  useLockScrolling(dialog, lockScrolling);
  const handleClickOutside = React.useCallback(
    ev => {
      ev.stopPropagation();
      if (ev.target === overlay.current) {
        onClose(ev);
      }
    },
    [onClose],
  );
  const handleInnerClick = React.useCallback(
    ev => {
      if (dialog.current) {
        const focusableElements = dialog.current.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS);
        if (Object.values(focusableElements).some(v => v === ev.target)) {
          onClose(ev);
        }
      }
    },
    [onClose],
  );
  return (
    <StyledDialog role="dialog" id={dialogId} data-test={dataTest}>
      <StyledDialogOverlay shown={shown} ref={overlay} onClick={handleClickOutside} />
      <StyledDialogWrapper
        shown={shown}
        ref={dialog}
        role="tooltip"
        aria-hidden={!shown}
        onClick={handleInnerClick}
      >
        <StyledTooltipContent>{children}</StyledTooltipContent>
        <Button type="secondary" fullWidth onClick={onClose}>
          <Translate tKey="button_close" />
        </Button>
      </StyledDialogWrapper>
    </StyledDialog>
  );
};

export default DialogContent;
