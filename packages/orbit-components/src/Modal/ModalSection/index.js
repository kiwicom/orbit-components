// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import media from "../../utils/mediaQuery";
import { StyledModalFooter } from "../ModalFooter";
import { ModalContext } from "../ModalContext";
import useModalContextFunctions from "../helpers/useModalContextFunctions";

import type { Props } from "./index";

export const StyledModalSection: any = styled.section`
  width: 100%;
  padding: ${({ theme }) => `${theme.orbit.spaceSixX} ${theme.orbit.spaceFourX}`};
  background-color: ${({ theme, suppressed }) =>
    suppressed ? theme.orbit.paletteCloudLight : theme.orbit.paletteWhiteNormal};
  border-bottom: 1px solid ${({ theme }) => theme.orbit.paletteCloudNormal};
  box-sizing: border-box;

  &:first-of-type {
    border-top: ${({ suppressed, theme }) =>
      suppressed && `1px solid ${theme.orbit.paletteCloudNormal}`};
    border-top-left-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && "12px"}; // TODO: create token
    border-top-right-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && "12px"}; // TODO: create token
    margin-top: ${({ suppressed, theme, closable }) =>
      suppressed && closable && theme.orbit.spaceSixX};
  }

  &:last-of-type {
    border-bottom: ${({ suppressed, theme }) =>
      suppressed ? `1px solid ${theme.orbit.paletteCloudNormal}` : "0"};
    border-bottom-left-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && "12px"}; // TODO: create token
    border-bottom-right-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && "12px"}; // TODO: create token
    & ~ ${StyledModalFooter} {
      margin-top: ${({ theme, suppressed }) => suppressed && theme.orbit.spaceFourX};
    }
    &:not(:last-child) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  ${media.largeMobile(css`
    padding: ${({ theme }) => theme.orbit.spaceTenX};

    &:first-of-type {
      margin-top: ${({ suppressed, theme, closable }) =>
        ((suppressed && closable) || suppressed) && theme.orbit.spaceTenX};
      border-top-left-radius: ${({ isMobileFullPage }) =>
        !isMobileFullPage && "9px"}; // TODO: create token
      border-top-right-radius: ${({ isMobileFullPage }) =>
        !isMobileFullPage && "9px"}; // TODO: create token
    }

    &:last-of-type {
      border-bottom-left-radius: ${({ isMobileFullPage }) =>
        !isMobileFullPage && "9px"}; // TODO: create token
      border-bottom-right-radius: ${({ isMobileFullPage }) =>
        !isMobileFullPage && "9px"}; // TODO: create token
      & ~ ${StyledModalFooter} {
        padding-top: ${({ suppressed }) => !suppressed && "0"};
        margin-top: 0;
      }
    }
  `)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledModalSection.defaultProps = {
  theme: defaultTheme,
};

const ModalSection = ({ children, suppressed, dataTest }: Props): React.Node => {
  const {
    removeHasModalSection,
    setHasModalSection,
    isMobileFullPage,
    closable,
  } = React.useContext(ModalContext);

  useModalContextFunctions();

  /*
    Run on every re-render to prevent setting hasModalSection to false when there's more sections
   */
  React.useEffect(() => {
    if (setHasModalSection) setHasModalSection();
  });

  React.useEffect(() => {
    return () => {
      if (removeHasModalSection) removeHasModalSection();
    };
  }, [removeHasModalSection]);

  return (
    <StyledModalSection
      suppressed={suppressed}
      data-test={dataTest}
      closable={closable}
      isMobileFullPage={isMobileFullPage}
    >
      {children}
    </StyledModalSection>
  );
};

export default ModalSection;
