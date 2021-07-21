// @flow

import * as React from "react";
import { render, screen } from "@testing-library/react";

import Histogram from "..";

describe("Histogram", () => {
  it("should have four columns", () => {
    const data = [11, 25, 37, 2];
    render(<Histogram data={data} value={2} min={1} step={1} />);
    expect(screen.getByRole("presentation").childElementCount).toBe(4);
  });
});
