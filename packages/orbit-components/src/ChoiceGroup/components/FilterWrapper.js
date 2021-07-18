// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import type { FilterWrapperType } from "./FilterWrapper.js.flow";
import defaultTheme from "../../defaultTheme";
import ButtonLink from "../../ButtonLink";

const StyledOnlyButton = styled.div``;

const hoverAndFocus = () => css`
  background-color: ${({ theme }) => theme.orbit.paletteBlueLight};

  ${StyledOnlyButton} {
    visibility: visible;
    opacity: 1;
  }
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  padding-left: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.orbit.formBoxSmallHeight};
  ${StyledOnlyButton} {
    visibility: hidden;
    opacity: 0;
  }

  ${({ disabled }) =>
    !disabled &&
    css`
      /* NOTE: Combined selector &:hover, &:focus-within is not usable here as it renders incorrectly in IE and EDGE */
      &:hover {
        ${hoverAndFocus}
      }
      &:focus-within {
        ${hoverAndFocus}
      }
    `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledContentWrapper.defaultProps = {
  theme: defaultTheme,
};

const FilterWrapper: FilterWrapperType = ({
  child,
  children,
  onOnlySelection,
  onlySelectionText,
}) => {
  const { value, label, disabled } = child.props;
  return (
    <StyledContentWrapper disabled={disabled}>
      {children}
      {onOnlySelection && !disabled && (
        <StyledOnlyButton>
          <ButtonLink
            type="secondary"
            size="small"
            onClick={ev => {
              onOnlySelection(ev, { value, label });
            }}
          >
            {onlySelectionText}
          </ButtonLink>
        </StyledOnlyButton>
      )}
    </StyledContentWrapper>
  );
};

export default FilterWrapper;
