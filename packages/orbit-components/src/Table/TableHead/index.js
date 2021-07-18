// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
import { StyledTableCell } from "../TableCell/index";

import type { Props } from ".";

const StyledTableHead = styled(({ children, className, dataTest }) => (
  <thead className={className} data-test={dataTest}>
    {children}
  </thead>
))`
  border-bottom: 1px solid ${({ theme }) => theme.orbit.paletteInkLighter};
  width: 100%;
  white-space: nowrap;
  ${StyledTableCell} {
    font-weight: ${({ theme }) => theme.orbit.fontWeightBold};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTableHead.defaultProps = {
  theme: defaultTheme,
};
const TableHead = ({ children, dataTest }: Props): React.Node => (
  <StyledTableHead dataTest={dataTest}>{children}</StyledTableHead>
);

export default TableHead;
