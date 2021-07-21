// @flow

import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CheckBox from "..";

describe("CheckBox", () => {
  it("default", () => {
    const onChange = jest.fn();
    render(
      <CheckBox
        label="Checkbox"
        onChange={onChange}
        value="option"
        dataTest="test"
        name="name"
        tabIndex="-1"
      />,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    const checkbox = screen.getByRole("checkbox", { name: "Checkbox" });
    expect(checkbox).toHaveAttribute("value", "option");
    expect(checkbox).toHaveAttribute("name", "name");
    expect(checkbox).toHaveAttribute("tabIndex", "-1");
    userEvent.click(checkbox);
    expect(onChange).toHaveBeenCalled();
  });
});
