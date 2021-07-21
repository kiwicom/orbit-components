// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import Heading from "..";
import { ELEMENT_OPTIONS, TYPE_OPTIONS } from "../consts";

describe("Heading", () => {
  it("should have expected DOM output", () => {
    render(
      <Heading
        as={ELEMENT_OPTIONS.H2}
        type={TYPE_OPTIONS.TITLE1}
        inverted={false}
        dataTest="test"
        id="id"
      >
        My lovely heading
      </Heading>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    const heading = screen.getByRole("heading", { name: "My lovely heading" });
    expect(heading.tagName.toLowerCase()).toBe("h2");
    expect(heading).toHaveAttribute("id", "id");
  });
});
