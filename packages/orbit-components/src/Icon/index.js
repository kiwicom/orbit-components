// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { ICON_SIZES, ICON_COLORS } from "./consts";
import defaultTheme from "../defaultTheme";

import type { GetSize, FactoryProps } from ".";

export const getSize: GetSize = size => ({ theme }) => {
  const tokens = {
    [ICON_SIZES.SMALL]: theme.orbit.widthIconSmall,
    [ICON_SIZES.MEDIUM]: theme.orbit.widthIconMedium,
    [ICON_SIZES.LARGE]: theme.orbit.widthIconLarge,
  };
  return tokens[size] || tokens[ICON_SIZES.MEDIUM];
};

const getColor = () => ({ theme, color }) => {
  const tokens = {
    [ICON_COLORS.PRIMARY]: theme.orbit.colorIconPrimary,
    [ICON_COLORS.SECONDARY]: theme.orbit.colorIconSecondary,
    [ICON_COLORS.TERTIARY]: theme.orbit.colorIconTertiary,
    [ICON_COLORS.INFO]: theme.orbit.colorIconInfo,
    [ICON_COLORS.SUCCESS]: theme.orbit.colorIconSuccess,
    [ICON_COLORS.WARNING]: theme.orbit.colorIconWarning,
    [ICON_COLORS.CRITICAL]: theme.orbit.colorIconCritical,
  };
  return tokens[color];
};

const reverse = ({ reverseOnRtl, theme }) =>
  reverseOnRtl &&
  theme.rtl &&
  css`
    transform: scale(-1, 1);
  `;

const StyledIcon = styled(({ className, viewBox, dataTest, children, ariaHidden, ariaLabel }) => (
  <svg
    className={className}
    viewBox={viewBox}
    data-test={dataTest}
    preserveAspectRatio="xMidYMid meet"
    aria-hidden={ariaHidden ? "true" : undefined}
    aria-label={ariaLabel}
  >
    {children}
  </svg>
))`
  width: ${({ size }) => getSize(size)};
  height: ${({ size }) => getSize(size)};
  flex-shrink: 0; // prevent shrinking when used in flex-box
  vertical-align: middle;
  fill: currentColor;
  color: ${({ color, customColor }) => customColor || (color && getColor())};
  ${reverse};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledIcon.defaultProps = {
  theme: defaultTheme,
};

const OrbitIcon = (props: FactoryProps): React.Node => {
  const {
    size,
    color,
    customColor,
    className,
    children,
    viewBox,
    dataTest,
    ariaHidden,
    reverseOnRtl,
    ariaLabel,
  } = props;
  return (
    <StyledIcon
      viewBox={viewBox}
      size={size}
      className={className}
      dataTest={dataTest}
      customColor={customColor}
      color={color}
      ariaHidden={ariaHidden}
      reverseOnRtl={reverseOnRtl}
      ariaLabel={ariaLabel}
    >
      {children}
    </StyledIcon>
  );
};

OrbitIcon.defaultProps = {
  size: ICON_SIZES.MEDIUM,
};

export default OrbitIcon;
