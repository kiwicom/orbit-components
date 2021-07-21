// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "../../Button";
import Tooltip from "..";

jest.mock("../../hooks/useMediaQuery", () => {
  return () => {
    return {
      isLargeMobile: false,
    };
  };
});

describe("Tooltip mobile", () => {
  it("it should not propagate onClick event when closing the tooltip using the close button", () => {
    const content = "Write some message to the user";
    const onClick = jest.fn();
    render(
      <Button onClick={onClick}>
        <Tooltip content={content} stopPropagation>
          kek
        </Tooltip>
      </Button>,
    );

    // Open the tooltip
    userEvent.click(screen.getByText("kek"));
    // Close the tooltip
    userEvent.click(screen.getByText("Close"));

    expect(onClick).not.toHaveBeenCalled();
  });
});
