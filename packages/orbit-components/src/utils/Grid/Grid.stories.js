// @flow
import * as React from "react";
import styled from "styled-components";
import { text, boolean, number, object, select } from "@storybook/addon-knobs";

import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

import Grid from ".";

const CustomDiv = styled.div`
  background: rgba(0, 169, 145, 0.2);
`;

export default {
  title: "Grid",
};

export const Playground = (): React.Node => {
  const inline = boolean("inline", false);
  const maxWidth = text("maxWidth", "1440px");
  const width = text("width", "100%");
  const columns = text("columns", undefined);
  const rows = text("rows", "repeat(8, 40px)");
  const gap = text("gap", null);
  const columnGap = text("columnGap", null);
  const rowGap = text("rowGap", "10px");
  const as = text("as", "div");
  const dataTest = text("dataTest", "test");
  const divsCount = number("divsCount", 8);
  const mediumMobile = object("mediumMobile", {
    rowGap: "0",
  });
  const largeMobile = object("largeMobile", {
    columns: "repeat(4, 1fr)",
    rows: "repeat(2, 40px)",
    gap: "20px",
  });
  const tablet = object("tablet", {
    columnGap: "40px",
  });
  const desktop = object("desktop", {
    columns: "repeat(2, minmax(100px, 1fr))",
    rows: "repeat(4, 40px)",
    gap: "40px",
  });
  const largeDesktop = object("largeDesktop", {
    columns: "repeat(8, minmax(10px, 1fr))",
    rows: "40px",
  });
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER));
  return (
    <Grid
      inline={inline}
      spaceAfter={spaceAfter}
      maxWidth={maxWidth}
      width={width}
      columns={columns}
      rows={rows}
      gap={gap}
      columnGap={columnGap}
      rowGap={rowGap}
      as={as}
      dataTest={dataTest}
      mediumMobile={mediumMobile}
      largeMobile={largeMobile}
      tablet={tablet}
      desktop={desktop}
      largeDesktop={largeDesktop}
    >
      {Array(...Array(divsCount)).map((_, key) => (
        // eslint-disable-next-line
        <CustomDiv key={key} />
      ))}
    </Grid>
  );
};
