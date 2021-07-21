// @flow
import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Sticky from "..";

describe("Sticky", () => {
  it("it should have expected DOM output", () => {
    render(<Sticky dataTest="test">children</Sticky>);
    expect(screen.getByText("children")).toBeInTheDocument();
    expect(screen.getByTestId("test").firstChild).toHaveStyle({ position: "relative", top: "0" });
    // $FlowFixMe
    fireEvent.scroll(document, { target: { scrollY: 150 } });
    expect(screen.getByTestId("test").firstChild).toHaveStyle({ position: "fixed", top: "0px" });
  });
});
