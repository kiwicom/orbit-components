// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import List from "..";
import ListItem from "../ListItem";
import Check from "../../icons/Check";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

describe("List", () => {
  it("should have expteced DOM output", () => {
    const size = "small";
    const type = "secondary";
    const dataTest = "test";
    const content = "This contains a nice sentence";

    render(
      <List size={size} type={type} dataTest={dataTest} spaceAfter={SPACINGS_AFTER.NORMAL}>
        <ListItem icon={<Check color="success" />}>{content}</ListItem>
      </List>,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
    expect(screen.getByRole("list")).toHaveStyle({ marginBottom: "12px" });
  });
});
