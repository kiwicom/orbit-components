// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import defaultTheme from "../../defaultTheme";
import { TYPE_AS } from "../consts";
import Table from "..";
import TableHead from "../TableHead";
import TableRow from "../TableRow";
import TableBody from "../TableBody";
import TableCell from "../TableCell";
import TableFooter from "../TableFooter";

describe("Table", () => {
  it("should have expected DOM Output", () => {
    const compact = true;
    const children = "Lorem ipsum dolor sit amet";
    const dataTest = "test";
    const type = "primary";
    const striped = true;

    render(
      <Table striped={striped} type={type} compact={compact} dataTest={dataTest}>
        <TableHead dataTest="table-head">
          <TableRow dataTest="table-row">
            <TableCell dataTest="table-cell" scope="col" as={TYPE_AS.TH}>
              kek
            </TableCell>
            <TableCell>{children}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody dataTest="table-body">
          <TableRow>
            <TableCell>{children}</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter dataTest="table-footer">
          <TableRow>
            <TableCell>{children}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>,
    );

    expect(screen.getByTestId("table-cell")).toHaveAttribute("scope", "col");
    expect(screen.getByRole("columnheader")).toBeInTheDocument();
    expect(screen.getByTestId("table-footer")).toBeInTheDocument();
    expect(screen.getByTestId("table-cell")).toBeInTheDocument();
    expect(screen.getByTestId("table-row")).toBeInTheDocument();
    expect(screen.getByTestId("table-body")).toBeInTheDocument();
    expect(screen.getByText("kek")).toHaveStyle({ height: defaultTheme.orbit.spaceXLarge });
  });
});
