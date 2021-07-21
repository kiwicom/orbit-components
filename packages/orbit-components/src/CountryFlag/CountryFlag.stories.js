// @flow

import * as React from "react";
import { text, select } from "@storybook/addon-knobs";

import { CODES, SIZES } from "./consts";

import CountryFlag from ".";

export default {
  title: "CountryFlag",
};

export const Default = (): React.Node => {
  const code = text("Code", CODES.ANYWHERE);

  return <CountryFlag code={code} />;
};

Default.story = {
  parameters: {
    info:
      "Country flag displays one flag of selected country. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = (): React.Node => {
  const code = text("Code", CODES.ANYWHERE);
  const name = text("Name", "Country");
  const size = select("Size", Object.values(SIZES), SIZES.SMALL);
  const dataTest = text("dataTest", "test");
  return <CountryFlag code={code} name={name} dataTest={dataTest} size={size} />;
};

Playground.story = {
  parameters: {
    info:
      "Country flag displays one flag of selected country. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};
