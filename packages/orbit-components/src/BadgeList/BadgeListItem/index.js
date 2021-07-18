// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import Text, { StyledText } from "../../Text";
import TYPE_OPTIONS from "../consts";
import defaultTheme from "../../defaultTheme";
import { ICON_COLORS } from "../../Icon/consts";
import { StyledTooltipChildren } from "../../primitives/TooltipPrimitive";
import { right } from "../../utils/rtl";

import type { Props } from "./index";

const getBackground = ({ theme, $type }) => {
  const tokens = {
    [TYPE_OPTIONS.NEUTRAL]: theme.orbit.paletteCloudLight,
    [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueLight,
    [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenLight,
    [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeLight,
    [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedLight,
  };
  return tokens[$type];
};

const getIconColor = type => {
  if (type === TYPE_OPTIONS.NEUTRAL) return ICON_COLORS.SECONDARY;
  return type;
};

const StyledBadgeListItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    & + & {
      margin-top: ${theme.orbit.spaceOneX};
    }
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledBadgeListItem.defaultProps = {
  theme: defaultTheme,
};

const StyledVerticalBadge = styled.div`
  ${({ theme }) => css`
    background: ${getBackground};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-${right}: ${theme.orbit.spaceTwoX};
    flex-shrink: 0;
    height: ${theme.orbit.iconMediumSize};
    width: ${theme.orbit.iconMediumSize};
    border-radius: ${theme.orbit.borderRadiusCircle};
    svg {
      height: ${theme.orbit.iconExtraSmallSize};
      width: ${theme.orbit.iconExtraSmallSize};
    }
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledVerticalBadge.defaultProps = {
  theme: defaultTheme,
};

const StyledVerticalBadgeContent = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    &,
    ${StyledText} {
      font-size: ${theme.orbit.fontSizeSmall};
      line-height: ${theme.orbit.lineHeightSmall};
    }

    ${StyledTooltipChildren} ${StyledText} {
      font-weight: ${theme.orbit.fontWeightMedium};
    }
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledVerticalBadgeContent.defaultProps = {
  theme: defaultTheme,
};

const BadgeListItem = ({
  icon,
  type = TYPE_OPTIONS.NEUTRAL,
  dataTest,
  children,
}: Props): React.Node => {
  return (
    <StyledBadgeListItem data-test={dataTest}>
      <StyledVerticalBadge $type={type} aria-hidden>
        {React.isValidElement(icon) && React.cloneElement(icon, { color: getIconColor(type) })}
      </StyledVerticalBadge>
      <StyledVerticalBadgeContent>
        <Text type="secondary" size="small" as="span">
          {children}
        </Text>
      </StyledVerticalBadgeContent>
    </StyledBadgeListItem>
  );
};

export default BadgeListItem;
