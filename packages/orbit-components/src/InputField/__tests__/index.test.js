// @flow
import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import InputField from "..";
import ButtonLink from "../../ButtonLink";
import TextLink from "../../TextLink";
import Visibility from "../../icons/Visibility";
import Search from "../../icons/Search";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";
import { INPUTMODE } from "../consts";
import defaultTheme from "../../defaultTheme";

describe("InputField", () => {
  it("should have expected DOM output", () => {
    const ref = React.createRef();
    const { container } = render(
      <InputField
        ref={ref}
        id="id"
        size="normal"
        type="text"
        name="name"
        label="Label"
        value="value"
        placeholder="placeholder"
        minLength={1}
        maxLength={10}
        dataTest="test"
        tabIndex="-1"
        readOnly
        autoComplete="off"
        spaceAfter={SPACINGS_AFTER.NORMAL}
        inputMode={INPUTMODE.NUMERIC}
        prefix={<Search dataTest="prefix" />}
        suffix={<ButtonLink dataTest="suffix" type="primary" compact iconLeft={<Visibility />} />}
        help={
          <div data-test="help">
            Did you mean <TextLink>something</TextLink>?
          </div>
        }
        dataAttrs={{
          "data-recording-ignore": true,
        }}
      />,
    );
    const input = screen.getByRole("textbox", { name: /Label/ });
    expect(ref.current).toEqual(input);
    expect(input).toHaveAttribute("name", "name");
    expect(input).toHaveAttribute("value", "value");
    expect(input).toHaveAttribute("placeholder", "placeholder");
    expect(input).toHaveAttribute("minlength", "1");
    expect(input).toHaveAttribute("maxlength", "10");
    expect(input).toHaveAttribute("inputmode", INPUTMODE.NUMERIC);
    expect(input).toHaveAttribute("autocomplete", "off");
    expect(input).toHaveAttribute("readonly");
    expect(input).toHaveAttribute("tabindex", "-1");
    expect(input).toHaveAttribute("data-recording-ignore");
    expect(input).toHaveAttribute("id", "id");
    expect(input).toHaveAttribute("data-state", "ok");
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByTestId("prefix")).toBeInTheDocument();
    expect(screen.getByTestId("suffix")).toBeInTheDocument();
    expect(screen.getByTestId("help")).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle({ marginBottom: defaultTheme.orbit.spaceSmall });
  });

  it("should trigger given event handlers", () => {
    const onChange = jest.fn();
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const onSelect = jest.fn();
    const onMouseUp = jest.fn();
    const onMouseDown = jest.fn();
    const onKeyDown = jest.fn();
    const onKeyUp = jest.fn();
    render(
      <InputField
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSelect={onSelect}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      />,
    );
    const input = screen.getByRole("textbox");
    userEvent.type(input, "Hello world!");
    expect(onFocus).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalled();
    expect(onMouseDown).toHaveBeenCalled();
    expect(onMouseUp).toHaveBeenCalled();
    expect(onMouseUp).toHaveBeenCalled();
    expect(onKeyDown).toHaveBeenCalled();
    expect(onKeyUp).toHaveBeenCalled();
    fireEvent.select(input);
    expect(onSelect).toHaveBeenCalled();
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
  });

  describe("compact", () => {
    it("should render label", () => {
      render(<InputField label="Label" readOnly inlineLabel />);
      expect(screen.getByText("Label")).toBeInTheDocument();
    });
  });

  describe("required", () => {
    it("should render asterisk", () => {
      render(<InputField label="Label" readOnly required />);
      expect(screen.getByText(/\*/)).toBeInTheDocument();
    });
  });

  describe("number with error and help", () => {
    it("should have expected DOM output", () => {
      render(
        <InputField
          type="number"
          minValue={1}
          maxValue={5}
          readOnly
          help={<div data-test="help">Everything is fine.</div>}
          error={<div data-test="error">Something went wrong.</div>}
        />,
      );
      const input = screen.getByRole("spinbutton");
      expect(input).toHaveAttribute("min", "1");
      expect(input).toHaveAttribute("max", "5");
      expect(input).toHaveAttribute("data-state", "error");
      expect(screen.queryByTestId("help")).not.toBeInTheDocument();
      expect(screen.getByTestId("error")).toBeInTheDocument();
    });
  });
});
