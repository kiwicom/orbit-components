// @flow
import * as React from "react";
import { text, boolean, select } from "@storybook/addon-knobs";

import {
  TYPE_OPTIONS,
  SIZE_OPTIONS,
  WEIGHT_OPTIONS,
  ALIGN_OPTIONS,
  ELEMENT_OPTIONS,
} from "./consts";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Text from ".";

const customText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas dui dolor, ut vestibulum nisi sodales et. Suspendisse molestie felis sit amet dui viverra volutpat sed sit amet lacus. Quisque sapien dolor, blandit ut sodales id, dictum sit amet purus. Nulla facilisi. Nulla eleifend, sem sed fermentum feugiat, eros ligula semper nulla, sit amet semper purus risus nec lorem.";

export default {
  title: "Text",
};

export const PrimaryText = (): React.Node => {
  const children = text("Text", customText);

  return <Text>{children}</Text>;
};

PrimaryText.story = {
  name: "Primary text",

  parameters: {
    info:
      "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const SecondaryText = (): React.Node => {
  const children = text("Text", customText);

  return <Text type="secondary">{children}</Text>;
};

SecondaryText.story = {
  name: "Secondary text",

  parameters: {
    info:
      "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const StatusText = (): React.Element<"div"> => {
  const children = text("Text", customText);

  return (
    <div>
      <Text type="info">{children}</Text>
      <Text type="success">{children}</Text>
      <Text type="warning">{children}</Text>
      <Text type="critical">{children}</Text>
    </div>
  );
};

StatusText.story = {
  name: "Status text",

  parameters: {
    info:
      "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const LinkInText = (): React.Node => (
  <Text>
    {customText} <a href="http://kiwi.com">Kiwi.com</a>
  </Text>
);

LinkInText.story = {
  name: "Link in text",

  parameters: {
    info:
      "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const WhiteText = (): React.Element<"div"> => {
  const children = text("Text", customText);

  return (
    <div style={{ backgroundColor: "#46515e", padding: "20px" }}>
      <Text type="white">{children}</Text>
    </div>
  );
};

WhiteText.story = {
  name: "White text",

  parameters: {
    info:
      "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = (): React.Node => {
  const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.PRIMARY);
  const as = select("As", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.P);
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const weight = select("Weight", Object.values(WEIGHT_OPTIONS), WEIGHT_OPTIONS.NORMAL);
  const align = select("Align", Object.values(ALIGN_OPTIONS), ALIGN_OPTIONS.LEFT);
  const uppercase = boolean("Uppercase", false);
  const italic = boolean("Italic", false);
  const children = text("Text", customText);
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
  const dataTest = text("dataTest", "test");
  const id = text("id", "ID");

  return (
    <Text
      id={id}
      type={type}
      as={as}
      size={size}
      weight={weight}
      align={align}
      uppercase={uppercase}
      italic={italic}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
    >
      {children}
    </Text>
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
    <Text align="left">Lorem ipsum dolor sit amet</Text>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
