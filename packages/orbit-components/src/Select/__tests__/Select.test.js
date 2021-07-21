// @flow

import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Select from "..";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

describe("Select", () => {
  it("should have expected DOM output", () => {
    const placeholder = "Default placeholder";
    const dataTest = "test";
    const label = "label";
    const tabIndex = "-1";
    const name = "name";
    const id = "test-id";
    const onBlur = jest.fn();
    const onFocus = jest.fn();
    const onChange = jest.fn();
    const objectOptions = [
      { value: "1", label: "One" },
      { value: "2", label: "Two" },
      { value: "3", label: "Three" },
      { value: "4", label: "Four" },
      { value: "hidden-five", label: "Hidden Five" },
      { disabled: true, value: "disabled-six", label: "Disabled Six" },
    ];
    const spaceAfter = SPACINGS_AFTER.NORMAL;
    const dataAttrs = {
      "data-recording-ignore": true,
    };

    render(
      <Select
        id={id}
        label={label}
        value="1"
        name={name}
        placeholder={placeholder}
        options={objectOptions}
        onChange={onChange}
        tabIndex={tabIndex}
        dataTest={dataTest}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly
        spaceAfter={spaceAfter}
        dataAttrs={dataAttrs}
      />,
    );

    const select: any = screen.getByRole("combobox");

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(select).toHaveAttribute("id", id);
    expect(select).toHaveAttribute("readonly");
    expect(select).toHaveAttribute("tabindex", "-1");
    expect(select).toHaveAttribute("data-state", "ok");
    expect(select).toHaveAttribute("data-recording-ignore");
    expect(select).toHaveAttribute("name", name);
    expect(screen.getByLabelText(label)).toBeInTheDocument();
    expect(screen.getByText(placeholder)).toBeInTheDocument();

    userEvent.selectOptions(select, screen.getByText("One"));
    expect(onChange).toHaveBeenCalled();
    userEvent.tab(select);
    expect(onFocus).toHaveBeenCalled();
    fireEvent.blur(select);
    expect(onBlur).toHaveBeenCalled();
  });

  it("should have custom value text", () => {
    render(<Select customValueText="blin" readOnly options={[{ value: "1", label: "One" }]} />);
    expect(screen.getByText("blin")).toBeInTheDocument();
  });

  it("should be disabled", () => {
    render(<Select options={[{ value: "1", label: "One" }]} readOnly disabled />);
    expect(screen.getByRole("combobox")).toBeDisabled();
  });
});
