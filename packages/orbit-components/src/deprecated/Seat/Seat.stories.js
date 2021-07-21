// @flow

import * as React from "react";
import { select, text } from "@storybook/addon-knobs";

import { SIZE_OPTIONS } from "./consts";
import Stack from "../../Stack";

import Seat from ".";

export default {
  title: "Seat",
};

export const Default = (): React.Node => {
  return <Seat />;
};

Default.story = {
  parameters: {
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = (): React.Node => {
  const dataTest = text("dataTest", "test");
  const size = select("Size", Object.values(SIZE_OPTIONS), "medium");
  return (
    <Stack direction="row">
      <Seat size={size} dataTest={dataTest} />
      <Seat size={size} type="legroom" dataTest={dataTest} />
      <Seat size={size} type="unavailable" dataTest={dataTest} />
      <Seat size={size} type="selected" dataTest={dataTest} />
    </Stack>
  );
};

Playground.story = {
  parameters: {
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
  },
};
