// @flow

import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import ListChoice from ".";

const getIcons = (name, defaultIcon) => select(name, [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

export default {
  title: "ListChoice",
};

export const Default = (): React.Node => {
  const title = text("title", "Choice Title");
  const description = text("description", "Further description");
  const Icon = getIcon(getIcons("icon", "Accommodation"));

  return (
    <ListChoice
      title={title}
      description={description}
      icon={Icon && <Icon />}
      onClick={action("onClick")}
    />
  );
};

Default.story = {
  parameters: {
    info: "Some description about this type of ListChoice in general.",
  },
};

export const MultipleChoices = (): React.Node => (
  <>
    <ListChoice
      title="Choice Title"
      description="Further description"
      selectable
      icon={<Icons.Accommodation />}
      onClick={action("onClick")}
    />
    <ListChoice
      title="Choice Title"
      description="Further description"
      selectable
      selected
      disabled
      icon={<Icons.Accommodation />}
      onClick={action("onClick")}
    />
    <ListChoice
      title="Choice Title"
      description="Further description"
      selectable
      icon={<Icons.Accommodation />}
      onClick={action("onClick")}
    />
  </>
);

MultipleChoices.story = {
  name: "Multiple choices",

  parameters: {
    info: "Some description about this type of ListChoice in general.",
  },
};

export const Playground = (): React.Node => {
  const title = text("title", "Choice Title");
  const description = text("description", "Further description");
  const selectable = boolean("selectable", true);
  const selected = boolean("selected", false);
  const disabled = boolean("disabled", false);
  const Icon = getIcon(getIcons("icon", "Accommodation"));
  const dataTest = text("dataTest", "test");

  return (
    <ListChoice
      title={title}
      description={description}
      selectable={selectable}
      selected={selected}
      disabled={disabled}
      icon={Icon && <Icon />}
      onClick={action("onClick")}
      dataTest={dataTest}
    />
  );
};

Playground.story = {
  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <>
      <ListChoice
        title="Choice Title"
        description="Further description"
        selectable
        icon={<Icons.Accommodation />}
        onClick={action("onClick")}
      />
      <ListChoice
        title="Choice Title"
        description="Further description"
        selectable
        selected
        disabled
        icon={<Icons.Accommodation />}
        onClick={action("onClick")}
      />
      <ListChoice
        title="Choice Title"
        description="Further description"
        selectable
        icon={<Icons.Accommodation />}
        onClick={action("onClick")}
      />
    </>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "Some description about this type of ListChoice.",
  },
};
