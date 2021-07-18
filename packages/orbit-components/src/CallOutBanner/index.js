// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import mq from "../utils/mediaQuery";
import defaultTheme from "../defaultTheme";
import Heading from "../Heading";
import Stack from "../Stack";
import Text from "../Text";

import type { Props } from "./index";

const StyledCallOutBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${({ theme }) => theme.orbit.paletteWhiteNormal};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusSmall};
  padding: ${({ theme }) => theme.orbit.spaceFourX};
  ${({ onClick }) =>
    onClick
      ? css`
          box-shadow: ${({ theme }) => theme.orbit.elevationActionBoxShadow};
          transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;
          cursor: pointer;
          :focus,
          :active,
          :hover {
            box-shadow: ${({ theme }) => theme.orbit.elevationActionActiveBoxShadow};
            outline: none;
          }
          border: 1px solid transparent;
        `
      : css`
          border: 1px solid ${({ theme }) => theme.orbit.paletteCloudNormal};
        `};
  ${mq.largeMobile(css`
    flex-direction: row;
    padding: ${({ theme }) => theme.orbit.spaceSixX};
  `)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCallOutBanner.defaultProps = {
  theme: defaultTheme,
};

const StyledIllustration = styled.div`
  padding-bottom: ${({ theme }) => theme.orbit.spaceFourX};
  ${mq.largeMobile(css`
    padding-right: ${({ theme }) => theme.orbit.spaceSixX};
    padding-bottom: 0;
  `)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledIllustration.defaultProps = {
  theme: defaultTheme,
};

const CallOutBanner = ({
  children,
  illustration,
  actions,
  title,
  onClick,
  tabIndex,
  description,
  dataTest,
}: Props): React.Node => (
  <StyledCallOutBanner
    onClick={onClick}
    tabIndex={(onClick || tabIndex) && (tabIndex || 0)}
    data-test={dataTest}
  >
    {illustration && <StyledIllustration>{illustration}</StyledIllustration>}
    <Stack spacing="medium">
      <Stack spacing="XSmall">
        <Stack spacing="XXSmall">
          {title && <Heading type="title3">{title}</Heading>}
          {description && <Text>{description}</Text>}
        </Stack>
        {children}
      </Stack>
      {actions}
    </Stack>
  </StyledCallOutBanner>
);

export default CallOutBanner;
