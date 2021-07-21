// @flow
import * as React from "react";
import { screen, render, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Tooltip from "../../Tooltip";
import Popover from "..";
import Button from "../../Button";
import Stack from "../../Stack";

jest.mock("../../hooks/useMediaQuery", () => {
  return () => {
    return {
      isTablet: false,
    };
  };
});

describe("Popover", () => {
  it("should have expected DOM output", () => {
    const content = "Message for a user";
    const position = "bottom";
    const onOpen = jest.fn();
    const onClose = jest.fn();
    const dataTest = "test";

    render(
      <Popover
        preferredPosition={position}
        dataTest={dataTest}
        content={content}
        onOpen={onOpen}
        onClose={onClose}
      >
        <Button>Open</Button>
      </Popover>,
    );

    const openButton = screen.getByRole("button", { name: "Open" });
    userEvent.click(openButton);
    expect(onOpen).toHaveBeenCalled();
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    const closeButton = screen.getByRole("button", { name: "Close" });
    userEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });

  it("should have actions", () => {
    const actions = (
      <Stack direction="row" justify="between">
        <Button type="secondary" size="small">
          Cancel
        </Button>
      </Stack>
    );

    render(
      <Popover actions={actions} content="kek" opened>
        bur
      </Popover>,
    );
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
  });

  it("should have no padding", () => {
    render(
      <Popover noPadding opened dataTest="test" content="kek">
        bur
      </Popover>,
    );
    expect(screen.getByText("kek").closest("div")).toHaveStyle({ padding: "0" });
  });

  it("should have offset", () => {
    render(
      <Popover opened offset={{ top: 10, left: 20 }} content="kek">
        <Button type="secondary" size="small">
          Cancel
        </Button>
      </Popover>,
    );

    // default is 4px
    expect(screen.getByRole("tooltip")).toHaveStyle({ top: "10" });
  });

  it("with tooltip", async () => {
    render(
      <Popover dataTest="popover" content={<Tooltip content="Content">Tooltip</Tooltip>}>
        <Button>Open popover</Button>
      </Popover>,
    );
    userEvent.click(screen.getByRole("button"));
    const overlay = (await screen.findByTestId("popover")).previousElementSibling;
    expect(overlay).toBeInTheDocument();
    if (overlay) userEvent.click(overlay);
    await waitForElementToBeRemoved(screen.queryByTestId("popover"));
  });
});
