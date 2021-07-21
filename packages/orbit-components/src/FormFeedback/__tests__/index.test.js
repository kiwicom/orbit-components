// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import FormFeedback from "..";

describe("FormFeedback", () => {
  it("should assign data-test", () => {
    render(<FormFeedback help="help message" dataTest="test" />);
    expect(screen.getByTestId("test"));
  });

  it("should render given error message", () => {
    render(<FormFeedback error="error message" />);
    expect(screen.getByText("error message")).toBeInTheDocument();
  });

  it("should render given help message", () => {
    render(<FormFeedback help="help message" />);
    expect(screen.getByText("help message")).toBeInTheDocument();
  });

  it("should prioritize rendering error message over help message", () => {
    render(<FormFeedback error="error message" help="help message" />);
    expect(screen.getByText("error message")).toBeInTheDocument();
    expect(screen.queryByText("help message")).not.toBeInTheDocument();
  });
});
