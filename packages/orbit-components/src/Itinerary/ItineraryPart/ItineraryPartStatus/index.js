// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { left } from "../../../utils/rtl";
import Alert from "../../../icons/Alert";
import Warning from "../../../icons/AlertCircle";
import Text from "../../../Text";
import Stack from "../../../Stack";
import defaultTheme from "../../../defaultTheme";
import type { ThemeProps } from "../../../defaultTheme";
import { STATUSES } from "./consts";
import type { Statuses } from "..";

import type { Props } from ".";

const resolveColor = (status: Statuses, isHeader?: boolean) => ({ theme }: ThemeProps) => {
  const border = {
    [STATUSES.WARNING]: theme.orbit.colorTextWarning,
    [STATUSES.CRITICAL]: theme.orbit.colorTextCritical,
  };

  const header = {
    [STATUSES.WARNING]: theme.orbit.paletteOrangeLightHover,
    [STATUSES.CRITICAL]: theme.orbit.paletteRedLightHover,
  };

  if (isHeader) return header[status];

  return border[status];
};

const StyledWrapper = styled.div`
  ${({ theme, type }) => css`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;
    border-radius: ${theme.orbit.borderRadiusLarge};
    border-${left}: ${theme.orbit.borderRadiusNormal} solid ${type && resolveColor(type)};
    box-shadow: ${theme.orbit.boxShadowFixed};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledStatusHeader = styled.div`
  ${({ theme, type }) => css`
    display: flex;
    padding: 0 ${theme.orbit.spaceXSmall};
    align-items: center;
    height: 32px;
    border-radius: ${theme.orbit.borderRadiusNormal} ${theme.orbit.borderRadiusLarge} 0 0;
    background: ${type && resolveColor(type, true)};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledStatusHeader.defaultProps = {
  theme: defaultTheme,
};

const StyledChildrenWrapper = styled.div`
  padding: ${({ theme }) => theme.orbit.spaceMedium} 0;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledChildrenWrapper.defaultProps = {
  theme: defaultTheme,
};

// calculatedOffset + paddings
const StyledStatusText = styled.div`
  z-index: 2;
  margin-${left}: ${({ offset, theme }) =>
  offset ? offset + parseInt(theme.orbit.spaceXSmall, 10) * 2 : "76"}px;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledStatusText.defaultProps = {
  theme: defaultTheme,
};

const ItineraryPartStatus = ({ type, label, children, offset }: Props): React.Node => {
  return (
    <StyledWrapper type={type}>
      <StyledStatusHeader type={type}>
        {/* TODO: replace icons with octagon */}
        <StyledStatusText offset={offset}>
          <Stack inline spacing="small" align="center">
            {type === "critical" ? (
              <Alert size="small" color="critical" />
            ) : (
              <Warning size="small" color="warning" />
            )}
            {label && <Text type={type}>{label}</Text>}
          </Stack>
        </StyledStatusText>
      </StyledStatusHeader>
      <StyledChildrenWrapper>{children}</StyledChildrenWrapper>
    </StyledWrapper>
  );
};

export default ItineraryPartStatus;
