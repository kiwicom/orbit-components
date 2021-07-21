// @flow

import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ButtonMobileStore from "..";
import { TYPE_OPTIONS } from "../consts";

describe("ButtonMobileStore", () => {
  it("default", () => {
    const onClick = jest.fn();
    render(
      <ButtonMobileStore onClick={onClick} dataTest="test" type={TYPE_OPTIONS.APPSTORE} href="#" />,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "#");
    expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(link).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
    expect(link).toHaveAttribute("target", "_blank");
    userEvent.click(link);
    expect(onClick).toHaveBeenCalled();
  });
});
