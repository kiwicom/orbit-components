// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs";
import { FixedSizeList } from "react-window";

import { LABEL_ELEMENTS, LABEL_SIZES } from "./consts";
import Radio from "../Radio";
import Checkbox from "../Checkbox";

import ChoiceGroup from ".";

export default {
  title: "ChoiceGroup",
};

export const Default = (): React.Node => {
  const label = text("Label", "What was the reason for your cancellation?");
  return (
    <ChoiceGroup label={label} onChange={action("onChange")}>
      <Radio label="Reason one" value="one" />
      <Radio label="Reason two" value="two" />
      <Radio label="Reason three" value="three" />
    </ChoiceGroup>
  );
};

Default.story = {
  parameters: {
    info: "Playground of ChoiceGroup",
  },
};

export const Multiple = (): React.Node => {
  const label = text("Label", "What was the reason for your cancellation?");
  return (
    <ChoiceGroup label={label} onChange={action("onChange")}>
      <Checkbox label="Reason one" value="one" />
      <Checkbox label="Reason two" value="two" />
      <Checkbox label="Reason three" value="three" />
    </ChoiceGroup>
  );
};

Multiple.story = {
  parameters: {
    info: "Playground of ChoiceGroup",
  },
};

export const Filter = (): React.Node => {
  const label = text("Label", "What was the reason for your cancellation?");
  const onlySelectionText = text("onlySelectionText", "Only");
  return (
    <ChoiceGroup
      label={label}
      filter
      onChange={action("onChange")}
      onOnlySelection={action("onOnlySelection")}
      onlySelectionText={onlySelectionText}
    >
      <Checkbox label="Reason one" value="one" disabled />
      <Checkbox label="Reason two" value="two" />
      <Checkbox label="Reason three" value="three" />
    </ChoiceGroup>
  );
};

Filter.story = {
  parameters: {
    info: "Playground of ChoiceGroup",
  },
};

export const WithError = (): React.Node => {
  const label = text("Label", "Label");
  const error = text("Error", "Error message (explain how to solve it)");

  return (
    <ChoiceGroup label={label} error={error} onChange={action("onChange")}>
      <Radio label="Reason one" value="one" />
      <Radio label="Reason two" value="two" />
      <Radio label="Reason three" value="three" />
    </ChoiceGroup>
  );
};

WithError.story = {
  name: "With error",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const RenderProp = (): React.Node => {
  const boxShadowSize = "3px";
  return (
    <ChoiceGroup label="What was the reason for your cancellation?" onChange={action("onChange")}>
      {({ Container, Item, spacing }) => (
        <FixedSizeList
          outerElementType={({ style, ...props }) => (
            <div
              style={{
                // account for extra padding
                top: `-${boxShadowSize}`,
                left: `-${boxShadowSize}`,
                ...style,
              }}
              {...props}
            />
          )}
          innerElementType={Container}
          height={150}
          itemCount={500}
          // computed height + top padding + spacing between items
          itemSize={20 + parseInt(spacing, 10)}
        >
          {({ style, index }) => (
            <div
              style={{
                // don't cut focus box shadow
                paddingTop: boxShadowSize,
                paddingLeft: boxShadowSize,
                ...style,
              }}
            >
              <Item>
                <Radio label={`Option ${index}`} value={index} />
              </Item>
            </div>
          )}
        </FixedSizeList>
      )}
    </ChoiceGroup>
  );
};

RenderProp.story = {
  name: "Render prop",
  parameters: {
    info: "A virtual list, demonstrating a use case for passing function as children",
  },
};

export const Playground = (): React.Node => {
  const dataTest = text("dataTest", "test");
  const label = text("Label", "What was the reason for your cancellation?");
  const labelSize = select("labelSize", Object.values(LABEL_SIZES), LABEL_SIZES.NORMAL);
  const labelAs = select("labelAs", Object.values(LABEL_ELEMENTS), LABEL_ELEMENTS.H4);
  const error = text("error", "Something is wrong");
  const filter = boolean("Filter", false);
  return (
    <ChoiceGroup
      dataTest={dataTest}
      label={label}
      labelSize={labelSize}
      labelAs={labelAs}
      error={error}
      filter={filter}
      onOnlySelection={action("onOnlySelection")}
      onChange={action("onChange")}
    >
      <Radio label="Reason one" value="one" />
      <Radio label="Reason two" value="two" />
      <Radio label="Reason three" value="three" />
    </ChoiceGroup>
  );
};

Playground.story = {
  parameters: {
    info: "Playground of ChoiceGroup",
  },
};
