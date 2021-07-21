// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, number, boolean } from "@storybook/addon-knobs";

import BaggageStepper from ".";

export default {
  title: "BaggageStepper",
};

export const Default = (): React.Node => {
  const titleIncrement = text("Title increment", "Add a passenger");
  const titleDecrement = text("Title decrement", "Remove a passenger");

  return (
    <BaggageStepper
      titleIncrement={titleIncrement}
      titleDecrement={titleDecrement}
      onChange={action("onChange")}
    />
  );
};

Default.story = {
  parameters: {
    info: "Some description about this type of BaggageStepper in general.",
  },
};

export const Playground = (): React.Node => {
  const min = number("minValue", 1);
  const max = number("maxValue", 10);
  const step = number("step", 2);
  const defaultValue = number("defaultValue", 4);
  const name = text("Name", "name");
  const disabled = boolean("disabled", false);
  const selected = boolean("selected", false);
  const dataTest = text("dataTest", "test");
  const titleIncrement = text("Title increment", "Add a passenger");
  const titleDecrement = text("Title decrement", "Remove a passenger");
  return (
    <BaggageStepper
      defaultValue={defaultValue}
      step={step}
      name={name}
      maxValue={max}
      minValue={min}
      selected={selected}
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
    info: "Here you can try BaggageStepper component with additional functionality.",
  },
};
