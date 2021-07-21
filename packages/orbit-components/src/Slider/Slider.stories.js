// @flow
import * as React from "react";
import { array, text, number, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";

import Slider from ".";

export default {
  title: "Slider",
};

export const Default = (): React.Node => {
  const label = text("label", "Depart from Prague");
  const valueDescription = text("valueDescription", "01:00 PM – 11:59 PM");
  const minValue = number("minValue", 1);
  const maxValue = number("maxValue", 100);
  const dataTest = text("dataTest", "01:00 PM – 11:59 PM");
  return (
    <Slider
      onChange={action("onChange")}
      label={label}
      valueDescription={valueDescription}
      dataTest={dataTest}
      minValue={minValue}
      maxValue={maxValue}
    />
  );
};

Default.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const SliderWithHistogram = (): React.Element<"div"> => {
  const label = text("label", "Depart from Prague");
  const valueDescription = text("valueDescription", "01:00 PM – 11:59 PM");
  const defaultValue = number("defaultValue", 12);
  const minValue = number("minValue", 1);
  const maxValue = number("maxValue", 24);
  const histogramData = array("histogramData", [
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
  ]);
  const histogramDescription = text("histogramDescription", "20 of 133 flights");
  return (
    <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
      <Slider
        onChange={action("onChange")}
        label={label}
        valueDescription={valueDescription}
        histogramDescription={histogramDescription}
        defaultValue={defaultValue}
        maxValue={maxValue}
        minValue={minValue}
        histogramData={histogramData}
      />
    </div>
  );
};

SliderWithHistogram.story = {
  name: "Slider with Histogram",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const RangeSlider = (): React.Node => {
  const label = text("label", "Depart from Prague");
  const valueDescription = text("valueDescription", "01:00 PM – 11:59 PM");
  const defaultValue = array("defaultValue", [1, 5]);
  const minValue = number("minValue", 1);
  const maxValue = number("maxValue", 24);
  const step = number("step", 1);
  return (
    <Slider
      onChange={action("onChange")}
      label={label}
      valueDescription={valueDescription}
      defaultValue={defaultValue}
      minValue={minValue}
      maxValue={maxValue}
      step={step}
    />
  );
};

RangeSlider.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const RangeSliderWithHistogram = (): React.Element<"div"> => {
  const label = text("label", "Depart from Prague");
  const valueDescription = text("valueDescription", "01:00 PM – 11:59 PM");
  const defaultValue = array("defaultValue", [0, 24]);
  const minValue = number("minValue", 0);
  const maxValue = number("maxValue", 48);
  const step = number("step", 2);
  const histogramData = array("histogramData", [
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
    11,
  ]);
  const histogramDescription = text("histogramDescription", "20 of 133 flights");
  return (
    <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
      <Slider
        onChange={action("onChange")}
        label={label}
        valueDescription={valueDescription}
        histogramDescription={histogramDescription}
        defaultValue={defaultValue}
        histogramData={histogramData}
        minValue={minValue}
        maxValue={maxValue}
        step={step}
      />
    </div>
  );
};

RangeSliderWithHistogram.story = {
  name: "Range Slider with Histogram",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const SliderWithLoadingHistogram = (): React.Element<"div"> => {
  const histogramDescription = text("histogramDescription", "20 of 133 flights");
  const histogramLoading = boolean("histogramLoading", true);
  const histogramLoadingText = text("histogramLoadingText", "Loading connection data...");

  return (
    <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
      <Slider
        onChange={action("onChange")}
        label="Depart from Prague"
        valueDescription="01:00 PM – 11:59 PM"
        histogramDescription={histogramDescription}
        defaultValue={5}
        histogramLoading={histogramLoading}
        histogramLoadingText={histogramLoadingText}
        minValue={1}
        maxValue={24}
      />
    </div>
  );
};

SliderWithLoadingHistogram.story = {
  name: "Slider with loading Histogram",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const RangeSliderWithLoadingHistogram = (): React.Element<"div"> => {
  const histogramDescription = text("histogramDescription", "20 of 133 flights");
  const histogramLoading = boolean("histogramLoading", true);
  const histogramLoadingText = text("histogramLoadingText", "Loading connection data...");

  return (
    <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
      <Slider
        onChange={action("onChange")}
        label="Depart from Prague"
        valueDescription="01:00 PM – 11:59 PM"
        histogramDescription={histogramDescription}
        defaultValue={[1, 10]}
        histogramLoading={histogramLoading}
        histogramLoadingText={histogramLoadingText}
        minValue={1}
        maxValue={24}
      />
    </div>
  );
};

RangeSliderWithLoadingHistogram.story = {
  name: "Range Slider with loading Histogram",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const SliderPlayground = (): React.Element<"div"> => {
  const ariaLabel = text("ariaLabel", "Label of handle");
  const ariaValueText = text("ariaValueText", "Text alternative of actual value");
  const dataTest = text("dataTest", "test");
  const defaultValue = number("defaultValue", 12);
  const label = text("label", "Depart from Prague");
  const maxValue = number("maxValue", 24);
  const minValue = number("minValue", 1);
  const step = number("step", 1);
  const valueDescription = text("valueDescription", "From midnight to 12:00 pm");
  return (
    <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
      <Slider
        ariaLabel={ariaLabel}
        ariaValueText={ariaValueText}
        dataTest={dataTest}
        defaultValue={defaultValue}
        label={label}
        maxValue={maxValue}
        minValue={minValue}
        step={step}
        onChange={action("onChange")}
        onChangeBefore={action("onChangeBefore")}
        onChangeAfter={action("onChangeAfter")}
        valueDescription={valueDescription}
      />
    </div>
  );
};

SliderPlayground.story = {
  name: "Slider playground",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const RangeSliderPlayground = (): React.Element<"div"> => {
  const ariaLabel = array("ariaLabel", ["First handle", "Second handle"]);
  const ariaValueText = text("ariaValueText", "Text alternative of actual value");
  const dataTest = text("dataTest", "test");
  const defaultValue = number("defaultValue", [1, 12]);
  const histogramData = array("histogramData", [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
  ]);
  const histogramDescription = text("histogramDescription", "28 of 90 flights");
  const histogramLoading = boolean("histogramLoading", false);
  const histogramLoadingText = text("histogramLoadingText", undefined);
  const label = text("label", "Depart from Prague");
  const maxValue = number("maxValue", 24);
  const minValue = number("minValue", 1);
  const step = number("step", 1);
  const valueDescription = text("valueDescription", "From midnight to 12:00 pm");
  return (
    <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
      <Slider
        ariaLabel={ariaLabel}
        ariaValueText={ariaValueText}
        dataTest={dataTest}
        defaultValue={defaultValue}
        histogramData={histogramData}
        histogramDescription={histogramDescription}
        histogramLoading={histogramLoading}
        histogramLoadingText={histogramLoadingText}
        label={label}
        maxValue={maxValue}
        minValue={minValue}
        step={step}
        onChange={action("onChange")}
        onChangeBefore={action("onChangeBefore")}
        onChangeAfter={action("onChangeAfter")}
        valueDescription={valueDescription}
      />
    </div>
  );
};

RangeSliderPlayground.story = {
  name: "Range Slider playground",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const RtlDefaultSlider = (): React.Node => {
  return (
    <RenderInRtl>
      <Slider
        onChange={action("onChange")}
        label="Depart from Prague"
        valueDescription="01:00 PM – 11:59 PM"
        defaultValue={50}
      />
    </RenderInRtl>
  );
};

RtlDefaultSlider.story = {
  name: "RTL default Slider",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const RtlSliderWithHistogram = (): React.Node => {
  return (
    <RenderInRtl>
      <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
        <Slider
          onChange={action("onChange")}
          label="Depart from Prague"
          valueDescription="01:00 PM – 11:59 PM"
          histogramDescription="20 of 133 flights"
          defaultValue={1}
          maxValue={24}
          minValue={1}
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
        />
      </div>
    </RenderInRtl>
  );
};

RtlSliderWithHistogram.story = {
  name: "RTL Slider with Histogram",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const RtlRangeSliderWithHistogram = (): React.Node => {
  return (
    <RenderInRtl>
      <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
        <Slider
          onChange={action("onChange")}
          label="Depart from Prague"
          valueDescription="01:00 PM – 11:59 PM"
          histogramDescription="20 of 133 flights"
          defaultValue={[1, 24]}
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
      </div>
    </RenderInRtl>
  );
};

RtlRangeSliderWithHistogram.story = {
  name: "RTL Range Slider with Histogram",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const RtlSliderWithLoadingHistogram = (): React.Node => {
  const histogramDescription = text("histogramDescription", "20 of 133 flights");
  const histogramLoading = boolean("histogramLoading", true);
  const histogramLoadingText = text("histogramLoadingText", "Loading connection data...");

  return (
    <RenderInRtl>
      <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
        <Slider
          onChange={action("onChange")}
          label="Depart from Prague"
          valueDescription="01:00 PM – 11:59 PM"
          histogramDescription={histogramDescription}
          defaultValue={5}
          histogramLoading={histogramLoading}
          histogramLoadingText={histogramLoadingText}
          minValue={1}
          maxValue={24}
        />
      </div>
    </RenderInRtl>
  );
};

RtlSliderWithLoadingHistogram.story = {
  name: "RTL Slider with loading Histogram",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};
