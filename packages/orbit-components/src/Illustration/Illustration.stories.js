// @flow

import * as React from "react";
import { select, text } from "@storybook/addon-knobs";

import { NAMES } from "./consts";
import { SIZE_OPTIONS } from "../primitives/IllustrationPrimitive/consts";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import IllustrationPrimitiveList from "../primitives/IllustrationPrimitive/IllustrationPrimitiveList";

import Illustration from ".";

export default {
  title: "Illustration",
};

export const Playground = (): React.Node => {
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
  const name = select("Name", Object.values(NAMES), "Accommodation");
  const dataTest = text("dataTest", "test");
  const alt = text("alt", null);
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
  return (
    <Illustration size={size} name={name} dataTest={dataTest} spaceAfter={spaceAfter} alt={alt} />
  );
};

Playground.story = {
  parameters: {
    info: "Explore our new set of illustrations for Kiwi.com.",
  },
};

export const ListOfAllIllustrations = (): React.Node => {
  return <IllustrationPrimitiveList nameOfComponent="Illustration" images={NAMES} />;
};

ListOfAllIllustrations.story = {
  name: "List of all Illustrations",

  parameters: {
    info: "Explore our new set of illustrations for Kiwi.com.",
  },
};
