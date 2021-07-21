// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

import Text from "../Text";
import TextLink from "../TextLink";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Stack from "../Stack";
import Tooltip from "../Tooltip";
import Airplane from "../icons/Airplane";

import Radio from ".";

export default {
  title: "Radio",
};

export const Default = (): React.Node => {
  const label = text("Label", "Label");
  const checked = boolean("Checked", false);
  return <Radio label={label} checked={checked} onChange={action("changed")} />;
};

Default.story = {
  parameters: {
    info: "Radio needs only label and onChange by default.",
  },
};

export const WithHelp = (): React.Node => {
  const label = text("Label", "Label");
  const value = text("Value", "value");
  const info = text("Info", "Additional information about this choice");
  return <Radio label={label} value={value} info={info} onChange={action("changed")} />;
};

WithHelp.story = {
  name: "With help",

  parameters: {
    info: "Additionally you can add info to this component.",
  },
};

export const WithError = (): React.Node => {
  const label = text("Label", "Label");
  const hasError = boolean("hasError", true);
  const checked = boolean("checked", false);
  return <Radio label={label} hasError={hasError} checked={checked} onChange={action("changed")} />;
};

WithError.story = {
  name: "With error",

  parameters: {
    info:
      "Show there is an error with the hasError prop. Only displays when checked and disabled are false.",
  },
};

export const WithTextLinkInLabel = (): React.Node => {
  const checked = boolean("checked", true);
  return (
    <Radio
      label={
        <Text>
          Lorem ipsum dolor sit&nbsp;
          <TextLink>amet</TextLink>.
        </Text>
      }
      checked={checked}
      value="value"
      onChange={action("changed")}
    />
  );
};

WithTextLinkInLabel.story = {
  name: "With TextLink in label",

  parameters: {
    info: "Additionally you can add info to this component.",
  },
};

export const WithTooltip = (): React.Node => {
  return (
    <Radio
      label="Direct"
      value="one"
      disabled
      tooltip={
        <Tooltip
          content="There are no results available with this option"
          preferredPosition="top"
        />
      }
    />
  );
};

WithTooltip.story = {
  parameters: {
    info: "Additionally you can add tooltip to this component.",
  },
};

export const WithStackAndIcon = (): React.Node => {
  const label = text("Label", "Label");
  const value = text("Value", "value");
  const info = text("Info", "Additional information to this choice");
  return (
    <Radio
      label={
        <Stack align="center">
          <Text size="small">{label}</Text>
          <Tooltip content="Tooltip content">
            <Airplane size="small" />
          </Tooltip>
        </Stack>
      }
      value={value}
      info={info}
      onChange={action("changed")}
    />
  );
};

WithStackAndIcon.story = {
  name: "With stack and icon",

  parameters: {
    info: "Additionally you can add info to this component.",
  },
};

export const Playground = (): React.Node => {
  const label = text("Label", "Label");
  const value = text("Value", "value");
  const checked = boolean("Checked", true);
  const disabled = boolean("Disabled", false);
  const hasError = boolean("hasError", false);
  const info = text("Info", "Additional information for this choice");
  const name = text("Name", "name");
  const dataTest = text("dataTest", "test");

  return (
    <Radio
      label={label}
      value={value}
      checked={checked}
      disabled={disabled}
      hasError={hasError}
      name={name}
      info={info}
      dataTest={dataTest}
      onChange={action("changed")}
    />
  );
};

Playground.story = {
  parameters: {
    info: "Playground of Radio",
  },
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <Radio
      label={
        <Text>
          Lorem ipsum dolor sit&nbsp;
          <TextLink>amet</TextLink>.
        </Text>
      }
      checked
      value="value"
      onChange={action("changed")}
    />
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
