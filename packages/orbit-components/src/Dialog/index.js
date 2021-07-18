// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import useFocusTrap from "../hooks/useFocusTrap";
import Portal from "../Portal";
import useTheme from "../hooks/useTheme";
import defaultTheme from "../defaultTheme";
import Heading from "../Heading";
import Text, { StyledText } from "../Text";
import Stack from "../Stack";
import mq from "../utils/mediaQuery";
import { StyledButtonPrimitive } from "../primitives/ButtonPrimitive";
import KEY_CODE_MAP from "../common/keyMaps";
import randomID from "../utils/randomID";
import { left } from "../utils/rtl";

import type { Props } from ".";

const StyledDialog = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: ${({ theme }) => theme.orbit.spaceFourX};
  z-index: ${({ theme }) => theme.orbit.zIndexModalOverlay};
  box-sizing: border-box;
  outline: none;
  overflow-x: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  ${mq.largeMobile(css`
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledDialog.defaultProps = {
  theme: defaultTheme,
};

const StyledDialogCenterWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
`;

const StyledDialogContent = styled.div`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: ${({ theme }) =>
    `${theme.orbit.spaceSixX} ${theme.orbit.spaceFourX} ${theme.orbit.spaceFourX}`};
  background: ${({ theme }) => theme.orbit.paletteWhiteNormal};
  border-radius: 12px;
  bottom: ${({ shown }) => (shown ? "0" : "-100%")};
  box-shadow: ${({ theme }) => theme.orbit.elevationOverlayBoxShadow};
  text-align: center;
  ${StyledText} {
    text-align: center;
  }
  ${mq.largeMobile(css`
    min-width: ${({ theme }) => theme.orbit.modalWidthSmall};
    border-radius: 9px;
    padding: ${({ theme }) => theme.orbit.spaceSixX};
    text-align: ${left};
    ${StyledText} {
      text-align: ${left};
    }
  `)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledDialogContent.defaultProps = {
  theme: defaultTheme,
};

const StyledAction = styled(({ width, theme, ...props }) => <div {...props} />)`
  width: 100%;
  ${StyledButtonPrimitive} {
    width: 100%;
    flex: 1 1 auto;
  }
  ${mq.largeMobile(
    css`
      width: auto;
      ${StyledButtonPrimitive} {
        width: auto;
        flex: 0 0 auto;
      }
    `,
  )};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledAction.defaultProps = {
  theme: defaultTheme,
};

const IllustrationContainer = styled.div`
  margin-bottom: 16px;
`;

const Dialog = ({
  dataTest,
  title,
  description,
  primaryAction,
  secondaryAction,
  onClose,
  renderInPortal = true,
  illustration,
}: Props): React.Node => {
  const ref = React.useRef(null);
  const theme = useTheme();
  const transitionLength = React.useMemo(() => parseFloat(theme.orbit.durationFast) * 1000, [
    theme.orbit.durationFast,
  ]);
  const [shown, setShown] = React.useState(false);

  useFocusTrap(ref);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShown(true);
      if (ref.current) {
        ref.current.focus();
      }
    }, transitionLength);
    return () => clearTimeout(timer);
  }, [transitionLength]);

  const handleClose = ev => {
    if (ref.current && onClose) {
      if (ref.current && !ref.current.contains(ev.target)) onClose();
    }
  };

  React.useEffect(() => {
    const handleKeyDown = ev => {
      if (ev.keyCode === KEY_CODE_MAP.ESC && onClose) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const dialogID = React.useMemo(() => randomID("dialog"), []);

  const dialog = (
    <StyledDialog
      data-test={dataTest}
      shown={shown}
      onClick={handleClose}
      tabIndex="0"
      role="dialog"
      aria-modal="true"
      aria-labelledby={dialogID}
    >
      <StyledDialogCenterWrapper>
        <StyledDialogContent shown={shown} ref={ref} id={dialogID}>
          {illustration && <IllustrationContainer>{illustration}</IllustrationContainer>}
          <Stack spacing="XSmall" spaceAfter="medium">
            {title && <Heading type="title3">{title}</Heading>}
            {description && <Text type="secondary">{description}</Text>}
          </Stack>
          <Stack
            direction="column-reverse"
            spacing="XSmall"
            largeMobile={{ direction: "row", justify: "end" }}
          >
            {secondaryAction && <StyledAction>{secondaryAction}</StyledAction>}
            <StyledAction>{primaryAction}</StyledAction>
          </Stack>
        </StyledDialogContent>
      </StyledDialogCenterWrapper>
    </StyledDialog>
  );

  return renderInPortal ? <Portal renderInto="modals">{dialog}</Portal> : dialog;
};

export default Dialog;
