// @flow

import * as React from "react";
import { render, screen } from "@testing-library/react";

import Badge from "..";
import Sightseeing from "../../icons/Sightseeing";

describe("Badge", () => {
  const content = "badge";
  const type = "info";
  const dataTest = "test";
  const icon = <Sightseeing ariaLabel="sightseeing" />;
  const ariaLabel = content;

  beforeEach(() => {
    render(
      <Badge icon={icon} type={type} dataTest={dataTest} ariaLabel={ariaLabel}>
        {content}
      </Badge>,
    );
  });

  it("should have passed props", () => {
    const style = getComputedStyle(screen.getByTestId(dataTest));
    expect(style.border).toMatchInlineSnapshot(`"1px solid #d0e9fb"`);
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByLabelText(ariaLabel)).toBeInTheDocument();
    expect(screen.getByLabelText("sightseeing")).toBeInTheDocument();
  });
  it("should contain a content", () => {
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
