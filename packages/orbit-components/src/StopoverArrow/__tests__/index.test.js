// @flow
import * as React from "react";
import { screen, render } from "@testing-library/react";

import StopoverArrow from "..";
import STOPS from "../consts";

describe("StopoverArrow", () => {
  it("should have expected DOM output", () => {
    const dataTest = "test";
    const stops = STOPS.THREE;
    render(<StopoverArrow dataTest={dataTest} stops={stops} />);
    expect(screen.getByTitle(`Stopover arrow, ${stops} stops`)).toBeInTheDocument();
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
  });
});
