// @flow
import * as React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Drawer from "..";

jest.useFakeTimers("modern");

describe("Drawer", () => {
  it("should have expected DOM output", () => {
    render(
      <Drawer dataTest="test" shown>
        content
      </Drawer>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("content"));
  });
  it("should be able to toggle visibility", () => {
    const { rerender } = render(<Drawer shown={false}>content</Drawer>);
    expect(screen.getByText("content")).not.toBeVisible();
    rerender(<Drawer shown>content</Drawer>);
    expect(screen.getByText("content")).toBeVisible();
    rerender(<Drawer shown={false}>content</Drawer>);
    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(screen.getByText("content")).not.toBeVisible();
  });
  it("should trigger close handler when clicked on close button", () => {
    const onClose = jest.fn();
    render(
      <Drawer onClose={onClose} shown>
        content
      </Drawer>,
    );
    userEvent.click(screen.getByRole("button", { name: "Hide" }));
    expect(onClose).toHaveBeenCalled();
  });
  it("should trigger close handler when clicked on backdrop", () => {
    const onClose = jest.fn();
    render(
      <Drawer dataTest="container" onClose={onClose} shown>
        <div data-test="content" />
      </Drawer>,
    );
    userEvent.click(screen.getByTestId("content"));
    expect(onClose).not.toHaveBeenCalled();
    userEvent.click(screen.getByTestId("container"));
    expect(onClose).toHaveBeenCalled();
  });
});
