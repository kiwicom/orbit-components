// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import Seat from "..";
import { SIZE_OPTIONS, TYPES } from "../consts";

const tokens = {
  [SIZE_OPTIONS.SMALL]: "20px",
  [SIZE_OPTIONS.MEDIUM]: "40px",
};

describe("Seat", () => {
  const dataTest = "test";
  it("should have expected DOM output", () => {
    render(<Seat type={TYPES.UNAVAILABLE} size={SIZE_OPTIONS.SMALL} dataTest={dataTest} />);
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
  });

  it.each(Object.values(SIZE_OPTIONS))("it should have size %s", size => {
    render(<Seat size={size} dataTest="kek" />);
    expect(screen.getByTestId("kek")).toHaveStyle({ width: tokens[size], height: tokens[size] });
  });
});
