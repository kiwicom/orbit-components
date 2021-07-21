// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { select, text, boolean } from "@storybook/addon-knobs";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import * as Icons from "../icons";

import Switch from ".";

const getIcons = (name, defaultIcon) => select(name, [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

export default {
  title: "Switch",
};

export const Default = (): React.Node => {
  const checked = boolean("checked", true);
  return <Switch onChange={action("onChange")} checked={checked} />;
};

Default.story = {
  name: "Default Switch",
};

export const CustomIcon = (): React.Node => {
  const checked = boolean("checked", true);
  const Icon = getIcon(getIcons("icon", "Lock"));
  return <Switch onChange={action("onChange")} checked={checked} icon={Icon && <Icon />} />;
};

CustomIcon.story = {
  name: "Custom icon",
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Playground = (): React.Node => {
  const checked = boolean("checked", false);
  const dataTest = text("dataTest", null);
  const Icon = getIcon(getIcons("icon", null));
  const disabled = boolean("disabled", false);

  return (
    <Switch
      onChange={action("onChange")}
      checked={checked}
      disabled={disabled}
      dataTest={dataTest}
      icon={Icon && <Icon />}
    />
  );
};

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl = (): React.Node => {
  const checked = boolean("checked", true);
  return (
    <RenderInRtl>
      <Switch onChange={action("onChange")} checked={checked} />
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
