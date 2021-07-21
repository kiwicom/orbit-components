// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import Coupon from "..";

describe("Coupon", () => {
  it("should have expected DOM output", () => {
    render(<Coupon dataTest="test">code</Coupon>);
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("code")).toBeInTheDocument();
  });
});
