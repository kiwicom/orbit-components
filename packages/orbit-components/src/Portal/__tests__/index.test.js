// @flow strict
import * as React from "react";
import { screen, render } from "@testing-library/react";

import Portal from "..";

describe("Portal", () => {
  it("should render into portal", () => {
    const target = document.createElement("div");
    target.setAttribute("id", "portal");
    document.body?.appendChild(target);

    render(
      <Portal renderInto="portal">
        <p>Content</p>
      </Portal>,
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(document.getElementById("portal")).toBeInTheDocument();
    document.body?.removeChild(target);
  });
});
