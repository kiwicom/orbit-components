// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import Slide from "..";

describe(`slide util`, () => {
  it("should has a11y", () => {
    render(
      <Slide maxHeight={20} expanded>
        Expanded content
      </Slide>,
    );

    expect(screen.getByText("Expanded content")).toHaveAttribute("aria-hidden", "false");
  });

  it("should: expand, collapse, expand", () => {
    jest.useFakeTimers();

    const { rerender } = render(
      <Slide maxHeight={20} expanded>
        Expanded content
      </Slide>,
    );
    expect(screen.getByText("Expanded content")).toHaveStyle("max-height: 20px");

    rerender(
      <Slide maxHeight={20} expanded={false}>
        Collapsed content
      </Slide>,
    );
    jest.runAllTimers();
    expect(screen.getByText("Collapsed content")).toHaveStyle("max-height: 0px");

    rerender(
      <Slide maxHeight={20} expanded>
        Expanded content
      </Slide>,
    );
    expect(screen.getByText("Expanded content")).toHaveStyle("max-height: 20px");
    jest.runAllTimers();
    expect(screen.getByText("Expanded content")).toHaveStyle({ maxHeight: undefined });
  });
});
