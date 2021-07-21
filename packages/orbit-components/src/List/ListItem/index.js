// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import CircleSmall from "../../icons/CircleSmall";
import { rtlSpacing } from "../../utils/rtl";
import { StyledCarrierLogo } from "../../CarrierLogo";
import { SIZES, TYPES } from "../consts";
import { StyledText } from "../../Text";
import ListContext from "../ListContext";

import type { GetLineHeightToken, Props } from ".";

export const getLineHeightToken: GetLineHeightToken = ({ theme, size }) => {
  const lineHeightTokens = {
    [SIZES.SMALL]: theme.orbit.lineHeightTextSmall,
    [SIZES.NORMAL]: theme.orbit.lineHeightTextNormal,
    [SIZES.LARGE]: theme.orbit.lineHeightTextLarge,
  };
  return lineHeightTokens[size];
};

const getSizeTokenLabel = ({ theme, size }) => {
  const sizeTokens = {
    [SIZES.SMALL]: theme.orbit.fontSizeTextSmall,
    [SIZES.NORMAL]: theme.orbit.fontSizeTextSmall,
    [SIZES.LARGE]: theme.orbit.fontSizeTextNormal,
  };
  return sizeTokens[size];
};

const getIconSizeFromType = ({ theme, type }) => {
  const tokens = {
    [TYPES.PRIMARY]: css`
      height: ${theme.orbit.heightIconSmall};
      width: ${theme.orbit.widthIconSmall};
    `,
    [TYPES.SECONDARY]: css`
      height: ${theme.orbit.heightIconSmall};
      width: ${theme.orbit.widthIconSmall};
    `,
  };
  return tokens[type];
};

export const Item: any = styled(({ type, theme, ...props }) => <li {...props} />)`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  display: flex;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.orbit.spaceXXSmall};

  &:last-child,
  &:last-of-type {
    margin: 0;
  }

  ${StyledText} {
    line-height: inherit;
    font-size: inherit;
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Item.defaultProps = {
  theme: defaultTheme,
};

export const IconContainer: any = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceXSmall} 0 0`)};
  flex: 0 0 auto;
  height: ${({ theme, size }) => getLineHeightToken({ theme, size })};

  ${StyledCarrierLogo} {
    ${getIconSizeFromType};
    img {
      ${getIconSizeFromType};
    }
  }
  // Icons
  svg {
    ${getIconSizeFromType};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
IconContainer.defaultProps = {
  theme: defaultTheme,
};

const StyledLabel = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-weight: ${({ theme }) => theme.orbit.fontWeightNormal};
  color: ${({ theme }) => theme.orbit.colorTextSecondary};
  font-size: ${getSizeTokenLabel};
`;

const StyledSpan = styled.span`
  width: 100%;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledLabel.defaultProps = {
  theme: defaultTheme,
};

const ListItem = ({ label, children, icon = <CircleSmall />, dataTest }: Props): React.Node => {
  const { size, type } = React.useContext(ListContext);
  return (
    <Item data-test={dataTest} type={type}>
      <IconContainer type={type} size={size}>
        {icon}
      </IconContainer>
      <StyledSpan>
        {label && <StyledLabel size={size}>{label}</StyledLabel>}
        {children}
      </StyledSpan>
    </Item>
  );
};

export default ListItem;
