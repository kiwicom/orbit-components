// @flow

import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select, number } from "@storybook/addon-knobs";

import { SIZE_OPTIONS, RESIZE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import Textarea from ".";

export default {
  title: "Textarea",
};

export const Default = (): React.Node => {
  const label = text("Label", "Label");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");

  return (
    <Textarea label={label} placeholder={placeholder} onChange={action("change")} value={value} />
  );
};

Default.story = {
  parameters: {
    info: "Some description about this type of textarea in general.",
  },
};

export const SmallSize = (): React.Node => {
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");

  return (
    <Textarea size="small" placeholder={placeholder} onChange={action("change")} value={value} />
  );
};

SmallSize.story = {
  name: "Small size",

  parameters: {
    info: "Some description about this type of textarea in general.",
  },
};

export const WithLabel = (): React.Node => {
  const label = text("Label", "Label");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");

  return (
    <Textarea label={label} placeholder={placeholder} onChange={action("change")} value={value} />
  );
};

WithLabel.story = {
  name: "With label",

  parameters: {
    info: "Some description about this type of textarea in general.",
  },
};

export const WithHelp = (): React.Node => {
  const value = text("Value", "Something");
  const placeholder = text("Placeholder", "Placeholder");
  const help = text("Help", "Everything is fine.");

  return (
    <Textarea placeholder={placeholder} help={help} onChange={action("change")} value={value} />
  );
};

WithHelp.story = {
  name: "With help",

  parameters: {
    info: "Some description about this type of textarea in general.",
  },
};

export const WithError = (): React.Node => {
  const value = text("Value", "Something");
  const placeholder = text("Placeholder", "Placeholder");
  const error = text("Error", "Something went wrong.");

  return (
    <Textarea placeholder={placeholder} error={error} onChange={action("change")} value={value} />
  );
};

WithError.story = {
  name: "With error",

  parameters: {
    info: "Some description about this type of textarea in general.",
  },
};

export const Playground = (): React.Node => {
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.SMALL);
  const label = text("Label", "Label");
  const value = text("Value", "");
  const fullHeight = boolean("fullHeight", true);
  const placeholder = text("Placeholder", "Placeholder");
  const help = text("Help", undefined);
  const error = text("Error", "Something went wrong.");
  const disabled = boolean("Disabled", false);
  const resize = select("resize", Object.values(RESIZE_OPTIONS), RESIZE_OPTIONS.VERTICAL);
  const maxLength = number("maxLength", undefined);
  const dataTest = text("dataTest", "test");
  const rows = number("rows", 3);
  const required = boolean("required", false);
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);

  return (
    <Textarea
      size={size}
      label={label}
      value={value}
      fullHeight={fullHeight}
      placeholder={placeholder}
      help={help}
      error={error}
      rows={rows}
      required={required}
      disabled={disabled}
      maxLength={maxLength}
      resize={resize}
      onChange={action("change")}
      onFocus={action("focus")}
      onBlur={action("blur")}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
    />
  );
};

Playground.story = {
  parameters: {
    info: "Some description about this type of textarea in general.",
  },
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <Textarea placeholder="My placeholder" value="Content of the Textarea" />
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
