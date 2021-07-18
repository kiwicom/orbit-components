// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { StyledTableRow } from "./TableRow";
import { StyledTableCell } from "./TableCell";
import { StyledTableBody } from "./TableBody";
import TYPE_OPTIONS from "./consts";
import defaultTheme from "../defaultTheme";

import type { Props } from "./index";

const StyledTableOuter = styled.div`
  max-width: 100%;
  width: 100%;
  position: relative;

  &::after,
  &::before {
    content: " ";
    display: ${({ showShadows }) => (showShadows ? "block" : "none")};
    position: absolute;
    width: 16px;
    height: 100%;
    top: 0;
    transition: opacity ${({ theme }) => theme.orbit.durationNormal} ease-in-out;
  }

  &::after {
    opacity: ${({ showRight }) => (showRight ? "1" : "0")};
    background-image: linear-gradient(to right, transparent, rgba(186, 199, 213, 23));
    right: 0;
  }

  &::before {
    opacity: ${({ showLeft }) => (showLeft ? "1" : "0")};
    left: 0;
    background-image: linear-gradient(to left, transparent, rgba(186, 199, 213, 23));
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTableOuter.defaultProps = {
  theme: defaultTheme,
};

const StyledTableInner = styled.div`
  width: 100%;
  ${({ showShadows }) =>
    showShadows &&
    css`
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    `};
`;

const StyledTable = styled.table`
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  white-space: nowrap;

  & ${StyledTableBody} > ${StyledTableRow} {
    background-color: ${({ theme }) => theme.orbit.paletteWhiteNormal};
    border-bottom: 1px solid ${({ theme }) => theme.orbit.paletteCloudNormal};
    transition: background-color ${({ theme }) => theme.orbit.durationFast} ease-in-out;

    ${({ striped, theme }) =>
      striped &&
      css`
        &:nth-of-type(even) {
          background-color: ${theme.orbit.paletteCloudLight};
        }
      `}

    &:last-child {
      border: 0;
    }
    &:hover {
      background-color: ${({ theme }) => theme.orbit.paletteCloudNormal};
    }
  }
  & ${StyledTableCell} {
    height: ${({ compact, theme }) => (compact ? theme.orbit.spaceEightX : theme.orbit.spaceTenX)};
    padding: ${({ theme, compact }) =>
      compact
        ? `6px ${theme.orbit.spaceThreeX}`
        : `10px ${theme.orbit.spaceThreeX}`}; /* TODO: remove 10px and 6px with new tokens */
    line-height: ${({ theme }) => theme.orbit.lineHeightNormal};
    color: ${({ type, theme }) => type === TYPE_OPTIONS.SECONDARY && theme.orbit.paletteInkLight};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTable.defaultProps = {
  theme: defaultTheme,
};

const Table = ({
  children,
  striped = true,
  compact = false,
  dataTest,
  type = TYPE_OPTIONS.PRIMARY,
}: Props): React.Node => {
  const [shadows, setShadows] = React.useState(false);
  const [right, setRight] = React.useState(false);
  const [left, setLeft] = React.useState(false);

  const outer: {| current: any | HTMLElement |} = React.useRef(null);
  const inner: {| current: any | HTMLElement |} = React.useRef(null);
  const table: {| current: any | HTMLElement |} = React.useRef(null);

  const handleScroll = () => {
    if (shadows && inner && table && outer) {
      setLeft(inner.current?.scrollLeft >= 5);
      setRight(
        inner.current?.scrollLeft + outer.current?.clientWidth <= table.current?.clientWidth,
      );
    }
  };

  const handleResize = React.useCallback(() => {
    if (table && outer) {
      const showShadows = table.current?.clientWidth > outer.current?.clientWidth;
      setShadows(showShadows);
      setRight(showShadows);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <StyledTableOuter
      ref={outer}
      showShadows={shadows}
      showLeft={left}
      showRight={right}
      data-test={dataTest}
    >
      <StyledTableInner ref={inner} onScroll={handleScroll} showShadows={shadows}>
        <StyledTable striped={striped} compact={compact} type={type} ref={table}>
          {children}
        </StyledTable>
      </StyledTableInner>
    </StyledTableOuter>
  );
};

export default Table;

export { default as TableHead } from "./TableHead";
export { default as TableBody } from "./TableBody";
export { default as TableFooter } from "./TableFooter";
export { default as TableRow } from "./TableRow";
export { default as TableCell } from "./TableCell";
