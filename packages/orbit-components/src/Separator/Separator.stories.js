// @flow
import * as React from "react";
import { select } from "@storybook/addon-knobs";

import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import Separator from ".";

export default {
  title: "Separator",
};

export const Default = (): React.Node => <Separator />;

Default.story = {
  parameters: {
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = (): React.Node => {
  const spaceAfter = select(
    "spaceAfter",
    [null, ...Object.values(SPACINGS_AFTER)],
    SPACINGS_AFTER.LARGEST,
  );
  return <Separator spaceAfter={spaceAfter} />;
};

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};
