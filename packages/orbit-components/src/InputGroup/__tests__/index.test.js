// @flow
import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import InputGroup from "..";
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
    expect(screen.getByText("help message")).toBeInTheDocument();
  });
  it("should render error message", () => {
    render(
      <InputGroup error="error message">
        <InputField />
      </InputGroup>,
    );
    expect(screen.getByText("error message")).toBeInTheDocument();
  });
  it("should remove labels, help and error messages from child inputs", () => {
    render(
      <InputGroup>
        <InputField label="Label" help="help message" />
        <InputField error="error message" />
      </InputGroup>,
    );
    expect(screen.queryByLabelText("Label")).not.toBeInTheDocument();
    expect(screen.queryByText("help message")).not.toBeInTheDocument();
    expect(screen.queryByText("error message")).not.toBeInTheDocument();
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
