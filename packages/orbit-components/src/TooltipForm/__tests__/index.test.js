// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import TooltipForm from "..";

describe("TooltipForm", () => {
  it("should have error", () => {
    render(<TooltipForm tooltipShown error={<div data-test="error">error</div>} />);
    expect(screen.getByTestId("error")).toBeInTheDocument();
  });

  it("should have help", () => {
    render(<TooltipForm tooltipShown help={<div data-test="help">help</div>} />);
    expect(screen.getByTestId("help")).toBeInTheDocument();
  });
});
