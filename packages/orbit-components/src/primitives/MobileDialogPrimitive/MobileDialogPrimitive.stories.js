// @flow
import * as React from "react";
import { text, boolean } from "@storybook/addon-knobs";

import Button from "../../Button";

import TooltipPrimitive from ".";

export default {
  title: "MobileDialogPrimtive",
};

export const Playground = (): React.Node => {
  const content = text("content", "Write your text here.");
  const dataTest = text("dataTest", "test");
  const tabIndex = text("TabIndex", "0");
  const enabled = boolean("enabled", true);
  const stopPropagation = boolean("enabled", true);
  const removeUnderlinedText = boolean("removeUnderlinedText", false);

  return (
    <TooltipPrimitive
      content={content}
      dataTest={dataTest}
      tabIndex={tabIndex}
      enabled={enabled}
      stopPropagation={stopPropagation}
      removeUnderlinedText={removeUnderlinedText}
    >
      <Button>Open Mobile Dialog</Button>
    </TooltipPrimitive>
  );
};

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};
