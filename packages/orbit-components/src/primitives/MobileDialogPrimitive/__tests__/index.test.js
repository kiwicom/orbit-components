// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MobileDialog from "..";

jest.mock("../../../utils/randomID", () => name => name);

let dialogs: HTMLElement;

beforeAll(() => {
  dialogs = document.createElement("div");
  dialogs.setAttribute("id", "dialogs");
  document.body?.appendChild(dialogs);
});

afterAll(() => {
  document.body?.removeChild(dialogs);
});

describe("MobileDialogPrimitive", () => {
  it("should have expected DOM output", () => {
    render(
      // eslint-disable-next-line jsx-a11y/tabindex-no-positive
      <MobileDialog tabIndex="1" dataTest="test" content="My text link">
        children
      </MobileDialog>,
    );
    const children = screen.getByText("children");
    expect(children).toHaveAttribute("tabindex", "1");
    userEvent.click(children);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("My text link")).toBeInTheDocument();
  });
});
