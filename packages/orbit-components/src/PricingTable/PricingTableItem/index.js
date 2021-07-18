// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import Stack from "../../Stack";
import Text, { StyledText } from "../../Text";
import Radio from "../../Radio";
import Badge from "../../Badge";
import { StyledBadge } from "../../primitives/BadgePrimitive";
import media from "../../utils/mediaQuery";
import type { Props } from "./index.js.flow";
import STATES from "./consts";
import { IconContainer, Item as ListItem } from "../../List/ListItem";
import { rtlSpacing } from "../../utils/rtl";
import PricingTableContext from "../PricingTableContext";
import useMediaQuery from "../../hooks/useMediaQuery";

const getBoxShadow = state => ({ theme, active, hasError }) => {
  const getActive = shadow => {
    if (hasError) return `${shadow}, inset 0 0 0 1px ${theme.orbit.formElementBorderColorError}`;
    if (active) return `${shadow}, inset 0 0 0 2px ${theme.orbit.paletteBlueNormal}`;
    return shadow;
  };
  if (state === STATES.HOVER) {
    return getActive(theme.orbit.elevationActionActiveBoxShadow);
  }
  return getActive(theme.orbit.elevationActionBoxShadow);
};

const StyledPricingTableItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  max-width: 33%;
  position: relative;
  background: ${({ theme }) => theme.orbit.paletteWhiteNormal};
  box-shadow: ${getBoxShadow()};
  transition: ${({ theme }) => theme.orbit.durationNormal};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal}; /* TODO: Add token */
  padding: ${({ theme }) => theme.orbit.spaceFourX}; /* TODO: Add token */
  cursor: pointer;

  &:hover {
    box-shadow: ${getBoxShadow(STATES.HOVER)};
  }

  ${({ basis }) =>
    basis &&
    css`
      flex-basis: ${basis};
    `}

  ${({ featureIcon }) =>
    featureIcon &&
    css`
      ${media.desktop(css`
        padding-top: ${({ theme }) => theme.orbit.spaceSixX}; /* TODO: Add token */
        padding-bottom: ${({ theme }) => theme.orbit.spaceSixX}; /* TODO: Add token */
      `)}
    `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledPricingTableItem.defaultProps = {
  theme: defaultTheme,
};

const StyledBadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  text-align: center;
`;

const StyledBadgeWrapperContent = styled.div`
  /*
    This is a bit ugly and unnecessarily complex,
    but due how IE works with flex and absolute positioning
    it has to be like this.
  */
  position: absolute;
  bottom: calc(100% + 3px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  left: 0;
  right: 0;
  ${StyledBadge} {
    align-self: center;
    max-width: 100%;
    word-break: break-all;
  }

  ${media.desktop(css`
    bottom: calc(100% + ${({ hasIcon }) => (hasIcon ? "11px" : "5px")});
  `)}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledBadgeWrapperContent.defaultProps = {
  theme: defaultTheme,
};

const Item = styled.div``;

const DesktopRadio = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
DesktopRadio.defaultProps = {
  theme: defaultTheme,
};

const Spacer = styled.div`
  margin-top: ${({ theme }) => theme.orbit.spaceThreeX};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Spacer.defaultProps = {
  theme: defaultTheme,
};

/*
  This causes rewrite of a list so list is ussable in in PricingTable, this is not at all elegant solution.
*/
export const StyledListWrapper: any = styled.div`
  ${({ theme }) =>
    css`
      width: 100%;
      ${ListItem} {
        border-bottom: 1px solid ${theme.orbit.paletteCloudDark};
        padding: ${theme.orbit.spaceThreeX};
        align-items: center;

        &,
        ${StyledText} {
          font-weight: ${theme.orbit.fontWeightMedium};
        }

        :last-child {
          border-bottom: none;
        }

        ${media.tablet(css`
          padding: ${theme.orbit.spaceTwoX};
        `)}
      }

      ${IconContainer} {
        margin: ${rtlSpacing(`${theme.orbit.spaceOneX} ${theme.orbit.spaceTwoX} 0 0`)};
        height: ${theme.heightIconLarge};

        svg {
          height: ${theme.orbit.iconMediumSize};
          width: ${theme.orbit.iconMediumSize};
        }
      }
    `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledListWrapper.defaultProps = {
  theme: defaultTheme,
};

const PricingTableItem = ({
  dataTest,
  name,
  price,
  priceBadge,
  featureIcon,
  badge,
  action,
  active = false,
  children,
  onClick,
  compact,
  mobileDescription,
}: Props): React.Node => {
  const onClickHandler = () => {
    if (onClick) {
      onClick();
    }
  };
  const { isDesktop } = useMediaQuery();
  const trueCompact = typeof compact !== "undefined" ? compact : !isDesktop;
  const context = React.useContext(PricingTableContext);

  return (
    <>
      {context.isContent ? (
        <>
          {mobileDescription && (
            <Text weight="bold" size="normal">
              {mobileDescription}
            </Text>
          )}
          {children && children}
          {action && action}
        </>
      ) : (
        <StyledPricingTableItem
          onClick={onClickHandler}
          basis={context.basis}
          featureIcon={!!featureIcon}
          active={active}
          data-test={dataTest}
          hasError={context.hasError}
          desktopRadio={context.desktopRadio}
        >
          {!featureIcon && context.desktopRadio && !trueCompact && <Spacer />}
          {context.desktopRadio && !trueCompact && (
            <DesktopRadio>
              <Radio checked={active} onChange={onClickHandler} hasError={context.hasError} />
            </DesktopRadio>
          )}
          {badge && (
            <StyledBadgeWrapper>
              <StyledBadgeWrapperContent hasIcon={!!featureIcon}>
                {typeof badge === "string" ? <Badge type="infoInverted">{badge}</Badge> : badge}
              </StyledBadgeWrapperContent>
            </StyledBadgeWrapper>
          )}
          <Stack flex direction="column" spacing="XSmall" desktop={{ spacing: "medium" }}>
            {featureIcon && (
              <Stack justify="center" grow={false}>
                {featureIcon}
              </Stack>
            )}
            <Stack justify="between" direction="column">
              <Stack
                spacing="XXSmall"
                direction="column"
                flex
                align="stretch"
                desktop={{ grow: false }}
              >
                {name && (
                  <Text type="primary" align="center" weight={featureIcon ? "normal" : "bold"}>
                    {name}
                  </Text>
                )}
                {price && (
                  <Text size="large" weight="bold" type="primary" align="center">
                    {price}
                  </Text>
                )}
                {priceBadge && (
                  <Stack justify="center" align="end" desktop={{ grow: false }}>
                    {priceBadge}
                  </Stack>
                )}
              </Stack>
              {trueCompact ? (
                <Stack justify="center" align="center" grow={false}>
                  <Item>
                    <Radio checked={active} onChange={onClickHandler} hasError={context.hasError} />
                  </Item>
                </Stack>
              ) : (
                <Stack justify="between" direction="column">
                  <StyledListWrapper>{children && children}</StyledListWrapper>
                  {action && (
                    <Stack justify="center" grow={false}>
                      {action}
                    </Stack>
                  )}
                </Stack>
              )}
            </Stack>
          </Stack>
        </StyledPricingTableItem>
      )}
    </>
  );
};

export default PricingTableItem;
