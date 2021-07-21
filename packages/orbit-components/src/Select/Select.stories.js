// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { object, select, text, boolean } from "@storybook/addon-knobs";

import Airplane from "../icons/Airplane";
import SIZE_OPTIONS from "./consts";
import CountryFlag from "../CountryFlag";
import { CODES } from "../CountryFlag/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import Select from ".";

const objectOptions = [
  { value: 0, label: "Zero-th item" },
  { value: 1, label: "First item" },
  { value: 2, label: "Second item" },
  { value: 3, label: "Third item" },
];

export default {
  title: "Select",
};

export const Default = (): React.Node => (
  <Select options={objectOptions} onChange={action("onChange")} />
);

Default.story = {
  parameters: {
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const WithPrefix = (): React.Node => (
  <Select
    label="Select box (with prefix)"
    options={objectOptions}
    onChange={action("onChange")}
    prefix={<Airplane color="secondary" />}
  />
);

WithPrefix.story = {
  name: "With prefix",

  parameters: {
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const WithCountryFlagPrefix = (): React.Node => {
  const code = select("Code", Object.values(CODES), CODES.ANYWHERE);
  return (
    <Select
      label="Select box (with prefix)"
      options={objectOptions}
      onChange={action("onChange")}
      prefix={<CountryFlag code={code} />}
    />
  );
};

WithCountryFlagPrefix.story = {
  name: "With CountryFlag prefix",

  parameters: {
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const WithPlaceholder = (): React.Node => {
  const placeholder = text("Placeholder", "Select value from list");
  return (
    <Select
      label="Select box (with placeholder)"
      placeholder={placeholder}
      options={objectOptions}
      onChange={action("onChange")}
    />
  );
};

WithPlaceholder.story = {
  name: "With placeholder",

  parameters: {
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const WithSmallSize = (): React.Node => (
  <Select
    label="Select box (small size)"
    size="small"
    options={objectOptions}
    onChange={action("onChange")}
  />
);

WithSmallSize.story = {
  name: "With small size",

  parameters: {
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const WithHelpMessage = (): React.Node => (
  <Select
    label="Select box (with help text)"
    options={objectOptions}
    help="Most common choice is Booking cancellation"
    onChange={action("onChange")}
  />
);

WithHelpMessage.story = {
  name: "With help message",

  parameters: {
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const WithErrorMessage = (): React.Node => (
  <Select
    label="Select box (with error text)"
    options={objectOptions}
    error={<div>You need to select some value.</div>}
    onChange={action("onChange")}
  />
);

WithErrorMessage.story = {
  name: "With error message",

  parameters: {
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = (): React.Node => {
  const placeholder = text("Placeholder", "Select value from list");
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const disabled = boolean("Disabled", false);
  const name = text("Name", "name");
  const customValueText = text("customValueText", null);
  const option = object("Options", objectOptions);
  const value = select("Value", [undefined].concat(...objectOptions.map(opt => opt.value)));
  const dataTest = text("dataTest", "test");
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
  const id = text("ID", "select-id");
  const required = boolean("Required", false);
  const dataAttrs = object("dataAttrs", { "data-recording-ignore": true });

  return (
    <Select
      id={id}
      required={required}
      placeholder={placeholder}
      size={size}
      options={option}
      disabled={disabled}
      name={name}
      label={text("Label")}
      onChange={action("onChange")}
      onBlur={action("onBlur")}
      onFocus={action("onFocus")}
      dataTest={dataTest}
      value={value}
      customValueText={customValueText}
      spaceAfter={spaceAfter}
      dataAttrs={dataAttrs}
    />
  );
};

Playground.story = {
  parameters: {
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <Select placeholder="My placeholder" options={objectOptions} label="My label" />
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
