// @flow
import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import InputGroup from "../index";
import InputField from "../../InputField";
import defaultTheme from "../../defaultTheme";

describe("InputGroup", () => {
  it("should render label", () => {
    render(
      <InputGroup label="Label">
        <InputField />
      </InputGroup>,
    );
    expect(screen.getByRole("group", { name: "Label" })).toBeInTheDocument();
  });
  it("should pass dataTest to data-test", () => {
    render(
      <InputGroup dataTest="test">
        <InputField />
      </InputGroup>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });
  it("should add margin using spaceAfter", () => {
    render(
      <InputGroup spaceAfter="normal">
        <InputField />
      </InputGroup>,
    );
    expect(screen.getByRole("group")).toHaveStyle({ marginBottom: defaultTheme.orbit.spaceSmall });
  });
  it("should render help message", () => {
    render(
      <InputGroup help="help message">
        <InputField />
      </InputGroup>,
    );

    const input = screen.getByRole("textbox");
    fireEvent.focus(input);
    expect(screen.getByText("help message")).toBeInTheDocument();
  });
  it("should render error message", () => {
    render(
      <InputGroup error="error message">
        <InputField />
      </InputGroup>,
    );

    const input = screen.getByRole("textbox");
    fireEvent.focus(input);
    expect(screen.getByText("error message")).toBeInTheDocument();
  });

  it("should pass event handlers to child inputs", () => {
    const onChange = jest.fn();
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    render(
      <InputGroup onChange={onChange} onFocus={onFocus} onBlur={onBlur}>
        <InputField />
      </InputGroup>,
    );
    const input = screen.getByRole("textbox");
    userEvent.type(input, "text");
    expect(onChange).toHaveBeenCalled();
    expect(onFocus).toHaveBeenCalled();
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
  });
});
