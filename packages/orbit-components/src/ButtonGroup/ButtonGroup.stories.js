// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import Button from "../Button";
import ButtonLink from "../ButtonLink";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import ButtonGroup from ".";

export default {
  title: "ButtonGroup",
};

export const WithButtons = (): React.Node => {
  const dataTest = text("dataTest", "test");
  return (
    <ButtonGroup dataTest={dataTest}>
      <Button iconLeft={<Icons.Airplane />}>Button</Button>
      <Button iconLeft={<Icons.ChevronDown />} title="Show more" />
    </ButtonGroup>
  );
};

WithButtons.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const WithButtonLinks = (): React.Node => {
  const dataTest = text("dataTest", "test");
  return (
    <ButtonGroup dataTest={dataTest}>
      <ButtonLink type="secondary" iconLeft={<Icons.Airplane />}>
        Button
      </ButtonLink>
      <ButtonLink type="secondary" iconLeft={<Icons.ChevronDown />} title="Show more" />
    </ButtonGroup>
  );
};

WithButtonLinks.story = {
  name: "With ButtonLinks",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <ButtonGroup>
      <Button iconLeft={<Icons.Airplane />}>Button</Button>
      <Button iconLeft={<Icons.ChevronDown />} title="Show more" />
    </ButtonGroup>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
