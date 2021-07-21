// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

import ChoiceGroup from "../ChoiceGroup";
import Checkbox from "../Checkbox";
import Slider from "../Slider";
import Stack from "../Stack";
import TextLink from "../TextLink";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Collapse from ".";

export default {
  title: "Collapse",
};

export const Default = (): React.Node => {
  const label = text("label", "Duration");
  return (
    <Collapse label={label}>
      <Slider
        label="Max travel time"
        valueDescription="00:00 - 24:00"
        defaultValue={[1, 12]}
        histogramData={[
          11,
          25,
          37,
          5,
          21,
          27,
          24,
          33,
          16,
          21,
          22,
          2,
          11,
          25,
          37,
          5,
          21,
          27,
          24,
          33,
          16,
          21,
          22,
          2,
        ]}
        minValue={1}
        maxValue={24}
      />
    </Collapse>
  );
};

Default.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const OpenedByDefault = (): React.Node => {
  const label = text("label", "Duration");
  return (
    <Collapse label={label} initialExpanded>
      <Slider
        label="Max travel time"
        valueDescription="00:00 - 24:00"
        defaultValue={[1, 12]}
        histogramData={[
          11,
          25,
          37,
          5,
          21,
          27,
          24,
          33,
          16,
          21,
          22,
          2,
          11,
          25,
          37,
          5,
          21,
          27,
          24,
          33,
          16,
          21,
          22,
          2,
        ]}
        minValue={1}
        maxValue={24}
      />
    </Collapse>
  );
};

OpenedByDefault.story = {
  name: "Opened by default",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const WithActions = (): React.Node => {
  const label = text("label", "Transportation");
  return (
    <Collapse
      label={label}
      actions={
        <TextLink type="secondary" size="small" onClick={action("clear")}>
          Clear
        </TextLink>
      }
    >
      <ChoiceGroup filter onChange={action("onChange")} onOnlySelection={action("onOnlySelection")}>
        <Checkbox label="Flight" value="one" />
        <Checkbox label="Bus" value="two" />
        <Checkbox label="Train" value="three" />
      </ChoiceGroup>
    </Collapse>
  );
};

WithActions.story = {
  name: "With actions",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const MultipleCollapses = (): React.Node => {
  const label = text("label", "Transportation");
  return (
    <Stack spacing="none">
      <Collapse label={label}>
        <ChoiceGroup
          filter
          onChange={action("onChange")}
          onOnlySelection={action("onOnlySelection")}
        >
          <Checkbox label="Flight" value="one" />
          <Checkbox label="Bus" value="two" />
          <Checkbox label="Train" value="three" />
        </ChoiceGroup>
      </Collapse>
      <Collapse label={label} initialExpanded>
        <ChoiceGroup
          filter
          onChange={action("onChange")}
          onOnlySelection={action("onOnlySelection")}
        >
          <Checkbox label="Flight" value="one" />
          <Checkbox label="Bus" value="two" />
          <Checkbox label="Train" value="three" />
        </ChoiceGroup>
      </Collapse>
      <Collapse label={label}>
        <ChoiceGroup
          filter
          onChange={action("onChange")}
          onOnlySelection={action("onOnlySelection")}
        >
          <Checkbox label="Flight" value="one" />
          <Checkbox label="Bus" value="two" />
          <Checkbox label="Train" value="three" />
        </ChoiceGroup>
      </Collapse>
    </Stack>
  );
};

MultipleCollapses.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Uncontrolled = (): React.Node => {
  const label = text("label", "Duration");
  const expanded = boolean("expanded", true);
  return (
    <Collapse label={label} expanded={expanded} onClick={action("onClick")}>
      <Slider
        label="Max travel time"
        valueDescription="00:00 - 24:00"
        defaultValue={[1, 12]}
        minValue={1}
        maxValue={24}
      />
    </Collapse>
  );
};

Uncontrolled.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl = (): React.Node => {
  const label = text("label", "Transportation");
  return (
    <RenderInRtl>
      <Collapse
        label={label}
        actions={
          <TextLink type="secondary" size="small" onClick={action("clear")}>
            Clear
          </TextLink>
        }
      >
        <ChoiceGroup
          filter
          onChange={action("onChange")}
          onOnlySelection={action("onOnlySelection")}
        >
          <Checkbox label="Flight" value="one" />
          <Checkbox label="Bus" value="two" />
          <Checkbox label="Train" value="three" />
        </ChoiceGroup>
      </Collapse>
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};
