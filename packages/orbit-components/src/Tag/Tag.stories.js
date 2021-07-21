// @flow

import * as React from "react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SIZES } from "./consts";

import Tag from ".";

export default {
  title: "Tag",
};

export const Default = (): React.Node => {
  const content = text("Content", "Brno");

  return <Tag onClick={action("onClick")}>{content}</Tag>;
};

Default.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Nonactionable = (): React.Node => {
  const content = text("Content", "Brno");

  return <Tag>{content}</Tag>;
};

Nonactionable.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Playground = (): React.Node => {
  const content = text("Content", "Transport");
  const size = select("size", Object.values(SIZES), SIZES.NORMAL);
  const selected = boolean("selected", true);
  const dataTest = text("dataTest", "test");

  return (
    <Tag
      size={size}
      selected={selected}
      onClick={action("onClick")}
      onRemove={action("onRemove")}
      dataTest={dataTest}
    >
      {content}
    </Tag>
  );
};

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <Tag onRemove={action("onRemove")}>Transport</Tag>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
