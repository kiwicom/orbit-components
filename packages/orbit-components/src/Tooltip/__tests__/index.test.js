// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import Tooltip from "..";

jest.mock("../../hooks/useMediaQuery", () => {
  return () => {
    return {
      isLargeMobile: true,
    };
  };
});

describe("Tooltip", () => {
  it("it should render Tooltip", () => {
    const content = "Write some message to the user";

    render(<Tooltip content={content}>kek</Tooltip>);

    expect(screen.getByText("kek")).toBeInTheDocument();
  });
});
