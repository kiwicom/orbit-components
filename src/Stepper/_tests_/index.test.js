// @flow
import * as React from "react";
import { shallow } from "enzyme";

import StepperStateless from "../StepperStateless";

describe("Stepper", () => {
  const defaultValue = 1;
  const name = "name";
  const disabled = false;
  const maxValue = 100;
  const minValue = 1;
  const dataTest = "test";
  const onChange = jest.fn();
  const onFocus = jest.fn();
  const onBlur = jest.fn();

  const statelessCompoennt = shallow(
    <StepperStateless
      value={defaultValue}
      name={name}
      maxValue={maxValue}
      minValue={minValue}
      disabled={disabled}
      dataTest={dataTest}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      titleIncrement="Add"
      titleDecrement="Remove"
    />,
  );
  const input = statelessCompoennt.find("StepperStateless__StyledStepperInput");

  it("should contain an input", () => {
    expect(input.exists()).toBe(true);
  });
  it("should render props", () => {
    expect(parseFloat(input.render().prop("value"))).toBe(defaultValue);
    expect(input.render().prop("attribs").name).toBe(name);
    expect(parseFloat(input.render().prop("max"))).toBe(maxValue);
    expect(parseFloat(input.render().prop("min"))).toBe(minValue);
    expect(input.render().prop("disabled")).toBe(disabled);
    expect(
      statelessCompoennt
        .find("StepperStateless__StyledStepper")
        .render()
        .prop("data-test"),
    ).toBe(dataTest);
  });

  it("should execute onFocus method", () => {
    input.simulate("focus");
    expect(onFocus).toHaveBeenCalled();
  });
  it("should execute onBlur method", () => {
    input.simulate("focus");
    input.simulate("blur");
    expect(onBlur).toHaveBeenCalled();
  });
});
