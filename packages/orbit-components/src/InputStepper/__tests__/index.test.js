// @flow
import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import InputStepper from "..";
import defaultTheme from "../../defaultTheme";

describe("InputSteppe", () => {
  it("should have expected DOM output", () => {
    const { container } = render(
      <InputStepper
        size="normal"
        label="Label"
        defaultValue={1}
        step={2}
        name="name"
        disabled
        maxValue={100}
        minValue={1}
        tabIndex="-1"
        readOnly
        required
        titleIncrement="Add"
        titleDecrement="Remove"
        dataTest="test"
        spaceAfter="normal"
      />,
    );
    const input = screen.getByRole("spinbutton", { name: /Label/ });
    expect(input).toHaveAttribute("name", "name");
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute("max", "100");
    expect(input).toHaveAttribute("min", "1");
    expect(input).toHaveAttribute("tabindex", "-1");
    expect(input).toHaveAttribute("readonly");
    expect(screen.getByText(/\*/)).toBeInTheDocument();
    expect(screen.getByLabelText("Add")).toBeInTheDocument();
    expect(screen.getByLabelText("Remove")).toBeInTheDocument();
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle({ marginBottom: defaultTheme.orbit.spaceSmall });
  });
  it("should render help message", () => {
    render(<InputStepper help="help message" />);
    expect(screen.getByText("help message")).toBeInTheDocument();
  });
  it("should render error message", () => {
    render(<InputStepper error="error message" />);
    expect(screen.getByText("error message")).toBeInTheDocument();
  });
  it("should not be able to change value by typing", () => {
    const onChange = jest.fn();
    render(<InputStepper onChange={onChange} />);
    const input = screen.getByRole("spinbutton");
    userEvent.type(input, "5");
    expect(input).toHaveValue(0);
    expect(onChange).not.toHaveBeenCalled();
  });
  it.each([["increment"], ["decrement"]])(
    "should be able to change the value with buttons: %s",
    label => {
      const onChange = jest.fn();
      render(
        <InputStepper titleIncrement="increment" titleDecrement="decrement" onChange={onChange} />,
      );
      userEvent.click(screen.getByLabelText(label));
      expect(screen.getByRole("spinbutton")).toHaveValue(label === "increment" ? 1 : -1);
      expect(onChange).toHaveBeenCalled();
    },
  );
  it("should trigger focus and blur event handlers", () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    render(<InputStepper onFocus={onFocus} onBlur={onBlur} />);
    const input = screen.getByRole("spinbutton");
    fireEvent.focus(input);
    expect(onFocus).toHaveBeenCalled();
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
  });
  it("should not work if disabled", () => {
    const onChange = jest.fn();
    render(<InputStepper disabled onChange={onChange} />);
    userEvent.click(screen.getByLabelText("Increment value"));
    userEvent.click(screen.getByLabelText("Decrement value"));
    expect(onChange).not.toHaveBeenCalled();
  });
});
