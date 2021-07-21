// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

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

import type { Props } from ".";

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
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundAlertInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundAlertSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundAlertWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundAlertCritical,
    },
    [TOKENS.colorTextAlert]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextAlertInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextAlertSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextAlertWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextAlertCritical,
    },
    // TODO: create token
    [TOKENS.colorTextLinkAlertHover]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDarkHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDarkHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDarkHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDarkActive,
    },
    // TODO: create token
    [TOKENS.colorTextLinkAlertFocus]: {
      [TYPE_OPTIONS.INFO]: convertHexToRgba(theme.orbit.paletteBlueDarkHover, 10),
      [TYPE_OPTIONS.SUCCESS]: convertHexToRgba(theme.orbit.paletteGreenDarkHover, 10),
      [TYPE_OPTIONS.WARNING]: convertHexToRgba(theme.orbit.paletteOrangeDarkHover, 10),
      [TYPE_OPTIONS.CRITICAL]: convertHexToRgba(theme.orbit.paletteRedDarkActive, 10),
    },
    [TOKENS.colorBorderAlert]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueLightHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenLightHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeLightHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedLightHover,
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
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightTextNormal};
  box-sizing: border-box;
  margin-bottom: ${getSpacingToken};

  padding: ${({ theme, closable }) =>
    closable
      ? rtlSpacing(
          `${theme.orbit.spaceSmall} ${theme.orbit.spaceLarge} ${theme.orbit.spaceSmall} ${theme.orbit.spaceSmall}`,
        )
      : theme.orbit.spaceSmall};

  ${media.tablet(css`
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
    padding: ${({ theme, closable }) =>
      closable
        ? rtlSpacing(
            `${theme.orbit.paddingAlert} ${theme.orbit.spaceXLarge} ${theme.orbit.paddingAlert} ${theme.orbit.paddingAlert}`,
          )
        : theme.orbit.paddingAlert};
  `)}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledAlert.defaultProps = {
  theme: defaultTheme,
};

const IconContainer = styled(StyledDiv)`
  flex-shrink: 0;
  margin: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceXSmall} 0 0`)};
  color: ${getTypeToken(TOKENS.colorIconAlert)};
  display: ${({ inlineActions }) => inlineActions && "flex"};
  align-items: ${({ inlineActions }) => inlineActions && "center"};

  ${media.tablet(css`
    margin: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceSmall} 0 0`)};

    ${StyledIcon} {
      width: ${({ theme }) => theme.orbit.widthIconMedium};
      height: ${({ theme }) => theme.orbit.heightIconMedium};
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
    hasChildren && (inlineActions ? "0" : theme.orbit.spaceXXSmall)};
  font-weight: ${({ theme }) => theme.orbit.fontWeightBold};
  line-height: ${({ theme }) => theme.orbit.lineHeightHeading};
  min-height: ${({ theme }) => theme.orbit.heightIconMedium};
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
  margin-top: ${({ hasChildren, theme }) => !hasChildren && `-${theme.orbit.widthIconSmall}`};
  ${right}: 0;
  margin-${right}: ${({ hasChildren, theme }) => !hasChildren && theme.orbit.spaceXSmall};
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
