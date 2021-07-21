// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import Heading from "../Heading";
import Checkbox, { Label } from "../Checkbox";
import Text from "../Text";
import defaultTheme from "../defaultTheme";
import { getSize } from "../Icon";
import { right } from "../utils/rtl";
import handleKeyDown from "../utils/handleKeyDown";

import type { Props } from ".";

const StyledListChoiceIcon = styled.div`
  display: flex;
  align-self: flex-start;
  flex: 0 0 auto;
  margin-${right}: ${({ theme }) => theme.orbit.spaceSmall};
  height: ${({ theme }) => theme.orbit.lineHeightTextNormal};

  svg {
    align-self: center;
    width: ${getSize("small")};
    height: ${getSize("small")};
    color: ${({ theme }) => theme.orbit.colorIconPrimary};
    transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledListChoiceIcon.defaultProps = {
  theme: defaultTheme,
};

const StyledListChoice = styled(({ disabled, theme, ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: ${({ theme }) => `${theme.orbit.spaceSmall} ${theme.orbit.spaceMedium}`};
  border-bottom: 1px solid ${({ theme }) => theme.orbit.paletteCloudNormal};
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  transition: background-color 0.15s ease-in-out;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:last-child {
    border: none;
  }

  &:focus,
  &:hover {
    outline: none;
    ${({ disabled, theme }) =>
      !disabled &&
      css`
        background-color: ${theme.orbit.paletteCloudLight};
        ${StyledListChoiceIcon} svg {
          color: ${theme.orbit.colorIconPrimary};
        }
      `};
  }

  ${Label} {
    width: auto;
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledListChoice.defaultProps = {
  theme: defaultTheme,
};

const StyledListChoiceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-${right}: ${({ theme }) => theme.orbit.spaceSmall};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledListChoiceContent.defaultProps = {
  theme: defaultTheme,
};

const ListChoice = ({
  dataTest,
  icon,
  title,
  description,
  selectable,
  onClick,
  selected,
  disabled,
}: Props): React.Node => {
  const conditionalProps = {
    ...(selectable ? { "aria-checked": selected } : null),
  };

  return (
    <StyledListChoice
      onClick={!disabled ? onClick : null}
      data-test={dataTest}
      onKeyDown={!disabled ? handleKeyDown(onClick) : null}
      tabIndex={disabled ? "-1" : "0"}
      disabled={disabled}
      aria-disabled={disabled}
      role={selectable ? "checkbox" : "button"}
      {...conditionalProps}
    >
      {icon && <StyledListChoiceIcon>{icon}</StyledListChoiceIcon>}
      <StyledListChoiceContent>
        <Heading type="title4">{title}</Heading>
        {description && (
          <Text type="secondary" size="small">
            {description}
          </Text>
        )}
      </StyledListChoiceContent>
      {selectable && <Checkbox checked={selected} readOnly disabled={disabled} tabIndex="-1" />}
    </StyledListChoice>
  );
};

export default ListChoice;
