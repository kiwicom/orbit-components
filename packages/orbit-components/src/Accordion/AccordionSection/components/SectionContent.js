// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";
import type { Globals } from "../../../common/common.js.flow";

const Wrapper = styled.div`
  padding: ${({ theme }) => `0 ${theme.orbit.spaceSixX} ${theme.orbit.spaceSixX}`};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Wrapper.defaultProps = {
  theme: defaultTheme,
};

type Props = {|
  children: React.Node,
  ...Globals,
|};

const AccordionSectionContent = ({ children, dataTest }: Props): React.Node => (
  <Wrapper data-test={dataTest && `${dataTest}Content`}>{children}</Wrapper>
);

export default AccordionSectionContent;
