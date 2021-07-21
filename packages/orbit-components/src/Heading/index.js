// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import { ELEMENT_OPTIONS, TYPE_OPTIONS, TOKENS } from "./consts";
import getSpacingToken from "../common/getSpacingToken";

import type { GetHeadingToken, Props } from ".";

export const getHeadingToken: GetHeadingToken = name => ({ theme, type }) => {
  const tokens = {
    [TOKENS.weightHeading]: {
      [TYPE_OPTIONS.DISPLAY]: theme.orbit.fontWeightHeadingDisplay,
      [TYPE_OPTIONS.DISPLAYSUBTITLE]: theme.orbit.fontWeightHeadingDisplaySubtitle,
      [TYPE_OPTIONS.TITLE1]: theme.orbit.fontWeightHeadingTitle1,
      [TYPE_OPTIONS.TITLE2]: theme.orbit.fontWeightHeadingTitle2,
      [TYPE_OPTIONS.TITLE3]: theme.orbit.fontWeightHeadingTitle3,
      [TYPE_OPTIONS.TITLE4]: theme.orbit.fontWeightHeadingTitle4,
      [TYPE_OPTIONS.TITLE5]: theme.orbit.fontWeightHeadingTitle5,
    },
    [TOKENS.sizeHeading]: {
      [TYPE_OPTIONS.DISPLAY]: theme.orbit.fontSizeHeadingDisplay,
      [TYPE_OPTIONS.DISPLAYSUBTITLE]: theme.orbit.fontSizeHeadingDisplaySubtitle,
      [TYPE_OPTIONS.TITLE1]: theme.orbit.fontSizeHeadingTitle1,
      [TYPE_OPTIONS.TITLE2]: theme.orbit.fontSizeHeadingTitle2,
      [TYPE_OPTIONS.TITLE3]: theme.orbit.fontSizeHeadingTitle3,
      [TYPE_OPTIONS.TITLE4]: theme.orbit.fontSizeHeadingTitle4,
      [TYPE_OPTIONS.TITLE5]: theme.orbit.fontSizeHeadingTitle5,
    },
    [TOKENS.lineHeight]: {
      [TYPE_OPTIONS.DISPLAY]: theme.orbit.lineHeightHeadingDisplay,
      [TYPE_OPTIONS.DISPLAYSUBTITLE]: theme.orbit.lineHeightHeadingDisplaySubtitle,
      [TYPE_OPTIONS.TITLE1]: theme.orbit.lineHeightHeadingTitle1,
      [TYPE_OPTIONS.TITLE2]: theme.orbit.lineHeightHeadingTitle2,
      [TYPE_OPTIONS.TITLE3]: theme.orbit.lineHeightHeadingTitle3,
      [TYPE_OPTIONS.TITLE4]: theme.orbit.lineHeightHeadingTitle4,
      [TYPE_OPTIONS.TITLE5]: theme.orbit.lineHeightHeadingTitle5,
    },
  };

  return tokens[name][type];
};

export const StyledHeading: any = styled(
  ({ element: Component, className, children, dataTest, dataA11ySection, id }) => (
    <Component
      className={className}
      data-test={dataTest}
      data-a11y-section={dataA11ySection}
      id={id}
    >
      {children}
    </Component>
  ),
)`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${getHeadingToken(TOKENS.sizeHeading)};
  font-weight: ${getHeadingToken(TOKENS.weightHeading)};
  color: ${({ theme, inverted }) =>
    inverted ? theme.orbit.colorHeadingInverted : theme.orbit.colorHeading};
  line-height: ${getHeadingToken(TOKENS.lineHeight)};
  text-transform: ${({ type }) => type === TYPE_OPTIONS.TITLE5 && "uppercase"};
  margin: 0;
  margin-bottom: ${getSpacingToken};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledHeading.defaultProps = {
  theme: defaultTheme,
};

const Heading = ({
  children,
  type = TYPE_OPTIONS.TITLE1,
  as = ELEMENT_OPTIONS.DIV,
  dataTest,
  inverted = false,
  spaceAfter,
  dataA11ySection,
  id,
}: Props): React.Node => (
  <StyledHeading
    id={id}
    type={type}
    element={as}
    inverted={inverted}
    dataTest={dataTest}
    spaceAfter={spaceAfter}
    dataA11ySection={dataA11ySection}
  >
    {children}
  </StyledHeading>
);

export default Heading;
