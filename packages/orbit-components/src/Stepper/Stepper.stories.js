// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, number, boolean } from "@storybook/addon-knobs";

import StatelessStepper from "./StepperStateless";

import Stepper from ".";

export default {
  title: "Stepper",
};

export const Default = (): React.Node => {
  const titleIncrement = text("Title increment", "Add a passenger");
  const titleDecrement = text("Title decrement", "Remove a passenger");

  return (
    <Stepper
      titleIncrement={titleIncrement}
      titleDecrement={titleDecrement}
      onChange={action("onChange")}
    />
  );
};

Default.story = {
  parameters: {
    info: "Some description about this type of Stepper in general.",
  },
};

export const Stateless = (): React.Node => {
  const min = number("minValue", 1);
  const max = number("maxValue", 10);
  const value = text("value", "2 adults");
  const name = text("Name", "name");
  const disabled = boolean("disabled", false);
  const dataTest = text("dataTest", "test");
  const disabledIncrement = boolean("Disabled Increment", false);
  const disabledDecrement = boolean("Disabled Decrement", false);
  const titleIncrement = text("Title increment", "Add a passenger");
  const titleDecrement = text("Title decrement", "Remove a passenger");
  return (
    <StatelessStepper
      dataTest={dataTest}
      value={value}
      name={name}
      maxValue={max}
      minValue={min}
      disabled={disabled}
      disabledIncrement={disabledIncrement}
      disabledDecrement={disabledDecrement}
      titleIncrement={titleIncrement}
      titleDecrement={titleDecrement}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      onChange={action("onChange")}
      onKeyDown={action("onKeyDown")}
      onIncrement={action("onIncrement")}
      onDecrement={action("onDecrement")}
    />
  );
};

Stateless.story = {
  parameters: {
    info: "Here you can try StatelessStepper component with additional functionality.",
  },
};

export const Playground = (): React.Node => {
  const min = number("minValue", 1);
  const max = number("maxValue", 10);
  const step = number("step", 2);
  const defaultValue = number("defaultValue", 4);
  const name = text("Name", "name");
  const disabled = boolean("disabled", false);
  const dataTest = text("dataTest", "test");
  const titleIncrement = text("Title increment", "Add a passenger");
  const titleDecrement = text("Title decrement", "Remove a passenger");
  return (
    <Stepper
      defaultValue={defaultValue}
      step={step}
      name={name}
      maxValue={max}
      minValue={min}
      disabled={disabled}
      dataTest={dataTest}
      titleIncrement={titleIncrement}
      titleDecrement={titleDecrement}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
    />
  );
};

Playground.story = {
  parameters: {
    info: "Here you can try Stepper component with additional functionality.",
  },
};
