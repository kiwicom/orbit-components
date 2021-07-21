// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";
import Heading, { StyledHeading } from "../../../Heading";
import Text from "../../../Text";
import { rtlSpacing } from "../../../utils/rtl";
import media from "../../../utils/mediaQuery";

import type { Props } from ".";

export const StyledCardHeader: any = styled.div`
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.orbit.spaceMedium};
  box-sizing: border-box;
  color: ${({ theme }) => theme.orbit.colorHeading};

  ${media.desktop(css`
    padding: ${({ theme }) => theme.orbit.spaceLarge};
  `)}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCardHeader.defaultProps = {
  theme: defaultTheme,
};

const StyledHeadingWrapper = styled.div`
  display: flex;
  align-items: center;

  ${StyledHeading} {
    width: 100%;
  }
`;

const StyledSubTitle = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.orbit.spaceXXSmall};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledSubTitle.defaultProps = {
  theme: defaultTheme,
};

const StyledIcon = styled.div`
  color: ${({ theme }) => theme.orbit.colorHeading};
  display: flex;
  align-items: center;
  margin: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceSmall} 0 0`)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledIcon.defaultProps = {
  theme: defaultTheme,
};

const CardHeader = ({
  icon,
  title,
  subTitle,
  actions,
  dataTest,
  dataA11ySection,
}: Props): React.Node => (
  <StyledCardHeader data-test={dataTest}>
    <StyledHeadingWrapper>
      {icon && <StyledIcon>{icon}</StyledIcon>}
      <Heading type="title3" as="h2" dataA11ySection={dataA11ySection}>
        {title}
      </Heading>
      {actions}
    </StyledHeadingWrapper>
    {subTitle && (
      <StyledSubTitle>
        <Text>{subTitle}</Text>
      </StyledSubTitle>
    )}
  </StyledCardHeader>
);
CardHeader.displayName = "CardHeader";
export default CardHeader;
