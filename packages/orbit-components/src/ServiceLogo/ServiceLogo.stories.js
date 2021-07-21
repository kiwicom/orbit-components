// @flow

import * as React from "react";
import { select, boolean, text } from "@storybook/addon-knobs";

import { NAME_OPTIONS, SIZE_OPTIONS } from "./consts";

import ServiceLogo from ".";

export default {
  title: "ServiceLogo",
};

export const Playground = (): React.Node => {
  const name = select("Type", Object.values(NAME_OPTIONS), NAME_OPTIONS.AIRHELP);
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
  const grayScale = boolean("GrayScale", false);
  const dataTest = text("dataTest", "test");

  return <ServiceLogo name={name} size={size} grayScale={grayScale} dataTest={dataTest} />;
};

Playground.story = {
  parameters: {
    info: "Some description about this type of component.",
  },
};
