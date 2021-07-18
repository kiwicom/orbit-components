// @flow
import * as React from "react";
import styled from "styled-components";

import Button from "../../../Button";
import defaultTheme from "../../../defaultTheme";
import transition from "../../../utils/transition";
import type { Globals } from "../../../common/common.js.flow";

const Wrapper = styled.div`
  display: flex;
  padding: ${({ theme, noPadding }) => !noPadding && theme.orbit.spaceSixX};
  background-color: ${({ theme }) => theme.orbit.paletteWhiteNormal};
  align-items: center;
  min-height: ${({ expanded }) => (expanded ? "19px" : "44px")};
  transition: ${transition(["min-height"], "fast", "ease-in-out")};
`;

const HeaderContent = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

const HeaderActions = styled.div`
  display: flex;
  margin-left: ${({ theme }) => theme.orbit.spaceSixX};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Wrapper.defaultProps = {
  theme: defaultTheme,
};

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
HeaderActions.defaultProps = {
  theme: defaultTheme,
};

type Props = {|
  children: React.Node,
  expanded: boolean,
  expandable: boolean,
  onExpand?: () => void | Promise<any>,
  actions?: React.Node,
  ...Globals,
|};

const AccordionSectionHeader = ({
  children,
  actions,
  expanded,
  onExpand,
  expandable,
  dataTest,
}: Props): React.Node => (
  <Wrapper expanded={expanded} data-test={dataTest && `${dataTest}Header`}>
    <HeaderContent>{children}</HeaderContent>
    {!expanded && (
      <HeaderActions>
        {expandable &&
          (actions || (
            <Button onClick={onExpand} type="secondary">
              Open
            </Button>
          ))}
      </HeaderActions>
    )}
  </Wrapper>
);

export default AccordionSectionHeader;
