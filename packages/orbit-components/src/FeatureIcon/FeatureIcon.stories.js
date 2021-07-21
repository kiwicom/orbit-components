// @flow

import * as React from "react";
import { select, text } from "@storybook/addon-knobs";

import { NAME_OPTIONS } from "./consts";

import FeatureIcon from ".";

export default {
  title: "FeatureIcon",
};

export const Playground = (): React.Node => {
  const name = select("Type", Object.values(NAME_OPTIONS), NAME_OPTIONS.TICKETFLEXI);
  const dataTest = text("dataTest", "test");
  return <FeatureIcon name={name} dataTest={dataTest} />;
};

Playground.story = {
  parameters: {
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
  },
};
