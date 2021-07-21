// @flow

import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

import DestinationHeader from ".";

export default {
  title: "DestinationHeader",
};

export const Playground = (): React.Node => {
  const image = text("image", "dubai_ae");
  const destinationName = text("destinationName", "Dubai");
  const dataTest = text("dataTest", "test");
  return (
    <DestinationHeader
      image={image}
      destinationName={destinationName}
      goBack={action("goBack")}
      dataTest={dataTest}
    />
  );
};

Playground.story = {
  parameters: {
    info:
      "DestinationHeader is a component providing better visual recognition of city you have chosen. It is placed on the result page and users can easily get back to the serch page by clicking on the back button",
  },
};
