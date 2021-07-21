// @flow

import * as React from "react";
import { text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Button from "../Button";
import Illustration from "../Illustration";
import { NAMES } from "../Illustration/consts";

import Dialog from ".";

export default {
  title: "Dialog",
};

export const Default = (): React.Node => {
  const title = text("title", "Log out");
  const description = text("description", "Are you sure you want to log out now?");
  const dataTest = text("dataTest", "test");
  return (
    <Dialog
      title={title}
      description={description}
      dataTest={dataTest}
      primaryAction={<Button type="critical">Log out</Button>}
    />
  );
};

Default.story = {
  parameters: {
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = (): React.Node => {
  const title = text("title", "Log out");
  const description = text("description", "Are you sure you want to log out now?");
  const illustration = select("illustration", NAMES, "NoNotification");
  const dataTest = text("dataTest", "test");
  return (
    <Dialog
      title={title}
      description={description}
      illustration={<Illustration name={illustration} size="small" />}
      dataTest={dataTest}
      onClose={action("onClose")}
      primaryAction={<Button type="critical">Log out</Button>}
      secondaryAction={<Button type="secondary">Cancel</Button>}
    />
  );
};

Playground.story = {
  parameters: {
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
  },
};
