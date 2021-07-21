// @flow

import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

import Text from "../Text";
import TextLink from "../TextLink";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Tooltip from "../Tooltip";

import Checkbox from ".";

export default {
  title: "CheckBox",
};

export const Default = (): React.Node => {
  const label = text("Label", "Label");
  const checked = boolean("Checked", false);
  return <Checkbox label={label} checked={checked} onChange={action("changed")} />;
};

Default.story = {
  parameters: {
    info: "Checkbox needs only label and onChange by default.",
  },
};

export const WithHelp = (): React.Node => {
  const label = text("Label", "Label");
  const value = text("Value", "value");
  const info = text("Info", "Additional information about this choice");
  return <Checkbox label={label} value={value} info={info} onChange={action("changed")} />;
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
  return (
    <Checkbox label={label} hasError={hasError} checked={checked} onChange={action("changed")} />
  );
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
    <Checkbox
      label={
        <Text>
          I instruct Kiwi.com to cancel this booking under the herein specified conditions and to
          process a refund in accordance with Kiwi.com&rsquo;&nbsp;
          <TextLink stopPropagation href="https://kiwi.com" external>
            Terms and Conditions
          </TextLink>
          .
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
    <Checkbox
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

export const Playground = (): React.Node => {
  const label = text("Label", "Label");
  const value = text("Value", "value");
  const checked = boolean("Checked", true);
  const disabled = boolean("Disabled", false);
  const hasError = boolean("hasError", false);
  const readOnly = boolean("readOnly", false);
  const info = text("Info", "Additional information for this choice");
  const dataTest = text("dataTest", "test");
  const name = text("name", "name");
  return (
    <Checkbox
      label={label}
      value={value}
      checked={checked}
      disabled={disabled}
      name={name}
      hasError={hasError}
      dataTest={dataTest}
      info={info}
      readOnly={readOnly}
      onChange={!readOnly ? action("changed") : undefined}
    />
  );
};

Playground.story = {
  parameters: {
    info: "Playground of Checkbox",
  },
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <Checkbox
      label={
        <Text>
          I instruct Kiwi.com to cancel this booking under the herein specified conditions and to
          process a refund in accordance with Kiwi.com&rsquo;&nbsp;
          <TextLink>Terms and Conditions</TextLink>.
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
