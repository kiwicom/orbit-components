// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import transparentColor from "@kiwicom/orbit-design-tokens/lib/js/transparentColor";

import defaultTheme from "../defaultTheme";
import InformationCircle from "../icons/InformationCircle";
import Check from "../icons/Check";
import AlertTriangle from "../icons/Alert";
import AlertCircle from "../icons/AlertCircle";
import Close from "../icons/Close";
import ButtonLink from "../ButtonLink";
import { StyledTextLink } from "../TextLink";
import { TYPE_OPTIONS, TOKENS, CLOSE_BUTTON_DATA_TEST } from "./consts";
import { rtlSpacing, right } from "../utils/rtl";
import getSpacingToken from "../common/getSpacingToken";
import { Item } from "../List/ListItem";
import { StyledText } from "../Text";
import useTranslate from "../hooks/useTranslate";
import { StyledHeading } from "../Heading";
import media from "../utils/mediaQuery";

import type { Props } from "./index";

type IconProps = {|
  icon: any,
  type: string,
  className: string,
|};

const getTypeToken = name => ({ theme, type }) => {
  const tokens = {
    [TOKENS.colorIconAlert]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDarker,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDarker,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDarker,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDarker,
    },
    [TOKENS.backgroundAlert]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueLight,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenLight,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeLight,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedLight,
    },
    [TOKENS.colorTextAlert]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDark,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDark,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDark,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDark,
    },
    // TODO: create token
    [TOKENS.colorTextLinkAlertHover]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDarkSecondary,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDarkSecondary,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDarkSecondary,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDarkTertiary,
    },
    // TODO: create token
    [TOKENS.colorTextLinkAlertFocus]: {
      [TYPE_OPTIONS.INFO]: transparentColor(theme.orbit.paletteBlueDarkSecondary, 10),
      [TYPE_OPTIONS.SUCCESS]: transparentColor(theme.orbit.paletteGreenDarkSecondary, 10),
      [TYPE_OPTIONS.WARNING]: transparentColor(theme.orbit.paletteOrangeDarkSecondary, 10),
      [TYPE_OPTIONS.CRITICAL]: transparentColor(theme.orbit.paletteRedDarkTertiary, 10),
    },
    [TOKENS.colorBorderAlert]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueLightSecondary,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenLightSecondary,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeLightSecondary,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedLightSecondary,
    },
  };
  return tokens[name][type];
};

const StyledIcon = styled(({ icon, type, className }: IconProps) => {
  // Icon should be boolean and TRUE
  if (typeof icon === "boolean" && icon) {
    if (type === TYPE_OPTIONS.INFO) {
      return <InformationCircle className={className} size="small" />;
    }
    if (type === TYPE_OPTIONS.SUCCESS) {
      return <Check className={className} size="small" />;
    }
    if (type === TYPE_OPTIONS.WARNING) {
      return <AlertTriangle className={className} size="small" />;
    }
    if (type === TYPE_OPTIONS.CRITICAL) {
      return <AlertCircle className={className} size="small" />;
    }
  }
  if (React.isValidElement(icon)) {
    return React.cloneElement(icon, { className, size: "small" });
  }

  return icon;
})``;

const StyledDiv = ({
  className,
  children,
  dataTest,
}: {|
  className: string,
  children: React.Node,
  dataTest: string,
|}) => (
  <div className={className} data-test={dataTest}>
    {children}
  </div>
);

const StyledAlert = styled(StyledDiv)`
  position: relative;
  display: flex;
  width: 100%;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusLarge};

  border: 1px solid ${getTypeToken(TOKENS.colorBorderAlert)};
  background: ${getTypeToken(TOKENS.backgroundAlert)};
  color: ${getTypeToken(TOKENS.colorTextAlert)};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightNormal};
  box-sizing: border-box;
  margin-bottom: ${getSpacingToken};

  padding: ${({ theme, closable }) =>
    closable
      ? rtlSpacing(
          `${theme.orbit.spaceThreeX} ${theme.orbit.spaceSixX} ${theme.orbit.spaceThreeX} ${theme.orbit.spaceThreeX}`,
        )
      : theme.orbit.spaceThreeX};

  ${media.tablet(css`
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
    padding: ${({ theme, closable }) =>
      closable
        ? rtlSpacing(
            `${theme.orbit.spaceFourX} ${theme.orbit.spaceEightX} ${theme.orbit.spaceFourX} ${theme.orbit.spaceFourX}`,
          )
        : theme.orbit.spaceFourX};
  `)}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledAlert.defaultProps = {
  theme: defaultTheme,
};

const IconContainer = styled(StyledDiv)`
  flex-shrink: 0;
  margin: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceTwoX} 0 0`)};
  color: ${getTypeToken(TOKENS.colorIconAlert)};
  display: ${({ inlineActions }) => inlineActions && "flex"};
  align-items: ${({ inlineActions }) => inlineActions && "center"};

  ${media.tablet(css`
    margin: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceThreeX} 0 0`)};

    ${StyledIcon} {
      width: ${({ theme }) => theme.orbit.iconMediumSize};
      height: ${({ theme }) => theme.orbit.iconMediumSize};
    }
  `)}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
IconContainer.defaultProps = {
  theme: defaultTheme,
};

const ContentWrapper = styled(StyledDiv)`
  flex: 1; // IE wrapping fix
  display: flex;
  flex-direction: ${({ title, inlineActions }) => title && (inlineActions ? "row" : "column")};
  align-items: ${({ title }) => !title && "center"};
  justify-content: ${({ inlineActions }) => inlineActions && "space-between"};
`;

const Title = styled(StyledDiv)`
  color: ${getTypeToken(TOKENS.colorIconAlert)};
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme, hasChildren, inlineActions }) =>
    hasChildren && (inlineActions ? "0" : theme.orbit.spaceOneX)};
  font-weight: ${({ theme }) => theme.orbit.fontWeightBold};
  line-height: 1.2;
  min-height: ${({ theme }) => theme.orbit.iconMediumSize};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Title.defaultProps = {
  theme: defaultTheme,
};

const Content = styled(StyledDiv)`
  display: block;
  width: ${({ inlineActions }) => !inlineActions && "100%"};

  & a,
  & ${StyledTextLink} {
    color: ${getTypeToken(TOKENS.colorTextAlert)};
    font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
    transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
    &:hover,
    &:focus,
    &:active {
      color: ${getTypeToken(TOKENS.colorTextLinkAlertHover)};
    }
  }
  & ${Item}, ${StyledText}, ${StyledHeading} {
    color: ${getTypeToken(TOKENS.colorTextAlert)};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Content.defaultProps = {
  theme: defaultTheme,
};

const CloseContainer = styled(StyledDiv)`
  position: absolute;
  top: ${({ hasChildren }) => (hasChildren ? 0 : "50%")};
  margin-top: ${({ hasChildren, theme }) => !hasChildren && `-${theme.orbit.iconExtraSmallSize}`};
  ${right}: 0;
  margin-${right}: ${({ hasChildren, theme }) => !hasChildren && theme.orbit.spaceTwoX};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
CloseContainer.defaultProps = {
  theme: defaultTheme,
};

const AlertCloseButton = ({ hasChildren, dataTest, onClick, icon }) => {
  const translate = useTranslate();
  return (
    <CloseContainer hasChildren={hasChildren}>
      <ButtonLink
        dataTest={dataTest}
        onClick={onClick}
        size="small"
        iconLeft={icon}
        type="secondary"
        title={translate("button_close")}
      />
    </CloseContainer>
  );
};

const Alert = (props: Props): React.Node => {
  const {
    type = TYPE_OPTIONS.INFO,
    title,
    icon,
    closable,
    onClose = () => {},
    children,
    dataTest,
    spaceAfter,
    inlineActions = false,
  } = props;
  return (
    <StyledAlert
      type={type}
      icon={icon}
      closable={closable}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
    >
      {icon && (
        <IconContainer type={type} inlineActions={inlineActions}>
          <StyledIcon type={type} icon={icon} />
        </IconContainer>
      )}
      <ContentWrapper title={title} inlineActions={inlineActions}>
        {title && (
          <Title type={type} hasChildren={children} inlineActions={inlineActions}>
            {title}
          </Title>
        )}
        {children && !inlineActions && (
          <Content title={title} type={type}>
            {children}
          </Content>
        )}
        {inlineActions && (
          <Content title={title} type={type} inlineActions={inlineActions}>
            {inlineActions}
          </Content>
        )}
      </ContentWrapper>
      {closable && (
        <AlertCloseButton
          hasChildren={children}
          dataTest={CLOSE_BUTTON_DATA_TEST}
          onClick={onClose}
          icon={<Close size="small" color={type} />}
        />
      )}
    </StyledAlert>
  );
};

export { default as AlertButton } from "./AlertButton";

export default Alert;
