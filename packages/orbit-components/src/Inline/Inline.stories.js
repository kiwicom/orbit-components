// @flow
import * as React from "react";
import { text, select } from "@storybook/addon-knobs";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import { ALIGNS as ALIGN, JUSTIFY, SPACINGS as SPACING } from "../utils/layout/consts";

import Inline from ".";

const PlaceHolder = ({ height = 50 }) => {
  return <div style={{ width: "50px", height: `${height}px`, background: "grey" }} />;
};

const dataTest = "test";

const TestChildren = () => {
  return (
    <>
      <PlaceHolder />
      <PlaceHolder height={60} />
      <PlaceHolder height={70} />
      <PlaceHolder height={80} />
      <PlaceHolder height={90} />
      <PlaceHolder height={100} />
    </>
  );
};

export default {
  title: "Inline",
};

export const Default = (): React.Node => {
  const spacing = select("spacing", Object.values(SPACING), SPACING.XXXSMALL);
  return (
    <Inline spacing={spacing} dataTest={dataTest}>
      <TestChildren />
    </Inline>
  );
};

Default.story = {
  parameters: {
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = (): React.Node => {
  const as = text("As", "div");
  const align = select("align", Object.values(ALIGN), ALIGN.START);
  const justify = select("justify", Object.values(JUSTIFY), JUSTIFY.START);
  const spacing = select("spacing", Object.values(SPACING), SPACING.XXXSMALL);

  return (
    <Inline as={as} align={align} justify={justify} dataTest={dataTest} spacing={spacing}>
      <TestChildren />
    </Inline>
  );
};

Playground.story = {
  parameters: {
    info:
      "info: You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl = (): React.Node => {
  const spacing = select("spacing", Object.values(SPACING), SPACING.XXXSMALL);
  return (
    <RenderInRtl>
      <Inline spacing={spacing} dataTest={dataTest}>
        <TestChildren />
      </Inline>
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
