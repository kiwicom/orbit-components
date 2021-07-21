// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
import { rtlSpacing } from "../../utils/rtl";

import type { Props } from ".";

export const StyledBadge: any = styled(({ className, children, dataTest, ariaLabel }) => (
  <div className={className} data-test={dataTest} aria-label={ariaLabel}>
    {children}
  </div>
))`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  display: inline-flex;
  flex: 0 0 auto;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  min-height: ${({ theme }) => theme.orbit.heightBadge};
  line-height: 14px;
  font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
  font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
  background: ${({ background }) => background};
  color: ${({ foregroundColor }) => foregroundColor};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusBadge};
  padding: ${({ theme }) => theme.orbit.paddingBadge};
  border: ${({ borderColor }) => borderColor && `1px solid ${borderColor}`};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledBadge.defaultProps = {
  theme: defaultTheme,
};

const IconContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-shrink: 0;
  margin: ${({ theme, hasContent }) => hasContent && rtlSpacing(theme.orbit.marginBadgeIcon)};

  svg {
    height: ${({ theme }) => theme.orbit.widthIconSmall};
    width: ${({ theme }) => theme.orbit.heightIconSmall};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
IconContainer.defaultProps = {
  theme: defaultTheme,
};

const StyledBadgeContent = styled.div`
  padding: 5px 0;
  line-height: 1;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledBadgeContent.defaultProps = {
  theme: defaultTheme,
};

const BadgePrimitive = (props: Props): React.Node => {
  const { icon, children, ariaLabel, dataTest, background, foregroundColor, borderColor } = props;

  return (
    <StyledBadge
      background={background}
      foregroundColor={foregroundColor}
      dataTest={dataTest}
      ariaLabel={ariaLabel}
      borderColor={borderColor}
    >
      {icon && <IconContainer hasContent={!!children}>{icon}</IconContainer>}
      <StyledBadgeContent>{children}</StyledBadgeContent>
    </StyledBadge>
  );
};

export default BadgePrimitive;
