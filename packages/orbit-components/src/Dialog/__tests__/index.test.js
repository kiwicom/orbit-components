// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import Dialog from "..";
import Button from "../../Button";

describe("Dialog", () => {
  it("should have expected DOM output", () => {
    render(
      <Dialog
        dataTest="test"
        title="Logging out"
        description="Are you sure you want to log out now?"
        primaryAction={<Button type="critical">Log out</Button>}
        secondaryAction={<Button type="secondary">Close</Button>}
      />,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("Logging out")).toBeInTheDocument();
    expect(screen.getByText("Are you sure you want to log out now?")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Log out" }));
    expect(screen.getByRole("button", { name: "Close" }));
  });
});
