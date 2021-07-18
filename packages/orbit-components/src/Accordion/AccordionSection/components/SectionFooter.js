// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";
import type { Globals } from "../../../common/common.js.flow";

const Wrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.orbit.spaceSixX};
  background-color: ${({ theme }) => theme.orbit.paletteWhiteNormal};
  position: sticky;
  bottom: 0;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.orbit.elevationActionActiveBoxShadow};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Wrapper.defaultProps = {
  theme: defaultTheme,
};

type Props = {|
  children: React.Node,
  ...Globals,
|};

const AccordionSectionFooter = ({ children, dataTest }: Props): React.Node => (
  <Wrapper data-test={dataTest && `${dataTest}Footer`}>{children}</Wrapper>
);

export default AccordionSectionFooter;
