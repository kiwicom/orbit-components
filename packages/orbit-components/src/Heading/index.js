// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import { ELEMENT_OPTIONS, TYPE_OPTIONS, TOKENS } from "./consts";
import getSpacingToken from "../common/getSpacingToken";

import type { GetHeadingToken, Props } from "./index";

export const getHeadingToken: GetHeadingToken = name => ({ theme, type }) => {
  const tokens = {
    [TOKENS.weightHeading]: {
      [TYPE_OPTIONS.DISPLAY]: theme.orbit.headingDisplayFontWeight,
      [TYPE_OPTIONS.DISPLAYSUBTITLE]: theme.orbit.headingDisplaySubtitleFontWeight,
      [TYPE_OPTIONS.TITLE1]: theme.orbit.headingTitle1FontWeight,
      [TYPE_OPTIONS.TITLE2]: theme.orbit.headingTitle2FontWeight,
      [TYPE_OPTIONS.TITLE3]: theme.orbit.headingTitle3FontWeight,
      [TYPE_OPTIONS.TITLE4]: theme.orbit.headingTitle4FontWeight,
      [TYPE_OPTIONS.TITLE5]: theme.orbit.headingTitle5FontWeight,
    },
    [TOKENS.sizeHeading]: {
      [TYPE_OPTIONS.DISPLAY]: theme.orbit.headingDisplayFontSize,
      [TYPE_OPTIONS.DISPLAYSUBTITLE]: theme.orbit.headingDisplaySubtitleFontSize,
      [TYPE_OPTIONS.TITLE1]: theme.orbit.headingTitle1FontSize,
      [TYPE_OPTIONS.TITLE2]: theme.orbit.headingTitle2FontSize,
      [TYPE_OPTIONS.TITLE3]: theme.orbit.headingTitle3FontSize,
      [TYPE_OPTIONS.TITLE4]: theme.orbit.headingTitle4FontSize,
      [TYPE_OPTIONS.TITLE5]: theme.orbit.headingTitle5FontSize,
    },
    [TOKENS.lineHeight]: {
      [TYPE_OPTIONS.DISPLAY]: theme.orbit.headingDisplayLineHeight,
      [TYPE_OPTIONS.DISPLAYSUBTITLE]: theme.orbit.headingDisplaySubtitleLineHeight,
      [TYPE_OPTIONS.TITLE1]: theme.orbit.headingTitle1LineHeight,
      [TYPE_OPTIONS.TITLE2]: theme.orbit.headingTitle2LineHeight,
      [TYPE_OPTIONS.TITLE3]: theme.orbit.headingTitle3LineHeight,
      [TYPE_OPTIONS.TITLE4]: theme.orbit.headingTitle4LineHeight,
      [TYPE_OPTIONS.TITLE5]: theme.orbit.headingTitle5LineHeight,
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
    inverted ? theme.orbit.headingForegroundInverted : theme.orbit.headingForeground};
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
