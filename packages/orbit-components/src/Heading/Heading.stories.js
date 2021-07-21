// @flow
import * as React from "react";
import { text, select, boolean } from "@storybook/addon-knobs";

import { ELEMENT_OPTIONS, TYPE_OPTIONS } from "./consts";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Heading from ".";

export default {
  title: "Heading",
};

export const Default = (): React.Node => {
  const customTitle = text("Title", "Orbit design system");
  return <Heading>{customTitle}</Heading>;
};

Default.story = {
  parameters: {
    info:
      "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const TitleDisplay = (): React.Node => {
  const customTitle = text("Title", "Orbit design system");
  const as = select("as", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H1);
  return (
    <Heading type="display" as={as}>
      {customTitle}
    </Heading>
  );
};

TitleDisplay.story = {
  parameters: {
    info:
      "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const TitleDisplaySubtitle = (): React.Node => {
  const customTitle = text("Title", "Orbit design system");
  const as = select("as", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H1);
  return (
    <Heading type="displaySubtitle" as={as}>
      {customTitle}
    </Heading>
  );
};

TitleDisplaySubtitle.story = {
  name: "Title displaySubtitle",

  parameters: {
    info:
      "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Title1 = (): React.Node => {
  const customTitle = text("Title", "Orbit design system");
  const as = select("as", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H1);
  return (
    <Heading type="title1" as={as}>
      {customTitle}
    </Heading>
  );
};

Title1.story = {
  parameters: {
    info:
      "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Title2 = (): React.Node => {
  const customTitle = text("Title", "Orbit design system");
  const as = select("as", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H2);
  return (
    <Heading type="title2" as={as}>
      {customTitle}
    </Heading>
  );
};

Title2.story = {
  parameters: {
    info:
      "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Title3 = (): React.Node => {
  const customTitle = text("Title", "Orbit design system");
  const as = select("as", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H3);
  return (
    <Heading type="title3" as={as}>
      {customTitle}
    </Heading>
  );
};

Title3.story = {
  parameters: {
    info:
      "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Title4 = (): React.Node => {
  const customTitle = text("Title", "Orbit design system");
  const as = select("as", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H4);
  return (
    <Heading type="title4" as={as}>
      {customTitle}
    </Heading>
  );
};

Title4.story = {
  parameters: {
    info:
      "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Title5 = (): React.Node => {
  const customTitle = text("Title", "Orbit design system");
  const as = select("as", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H5);
  return (
    <Heading type="title5" as={as}>
      {customTitle}
    </Heading>
  );
};

Title5.story = {
  parameters: {
    info:
      "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const InvertedHeading = (): React.Element<"div"> => {
  const as = select("as", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H1);
  const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.DISPLAY);
  const inverted = boolean("Inverted", true);
  const customTitle = text("Title", "Orbit design system");

  return (
    <div style={{ padding: 20, backgroundColor: "#46515E" }}>
      <Heading type={type} as={as} inverted={inverted}>
        {customTitle}
      </Heading>
    </div>
  );
};

InvertedHeading.story = {
  name: "Inverted heading",

  parameters: {
    info:
      "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = (): React.Node => {
  const as = select("as", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H2);
  const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.DISPLAY);
  const dataTest = text("dataTest", "test");
  const id = text("ID", "ID-OF-A-ELEMENT");
  const customTitle = text("Title", "Orbit design system");
  const dataA11ySection = text("dataA11ySection", "ID-OF-SECTION");
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
  return (
    <Heading
      id={id}
      as={as}
      dataA11ySection={dataA11ySection}
      type={type}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
    >
      {customTitle}
    </Heading>
  );
};

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Accessibility = (): React.Node => {
  const dataA11ySection = text("dataA11ySection", "ID-OF-SECTION");
  const customTitle = text("Title", "Orbit design system");
  return <Heading dataA11ySection={dataA11ySection}>{customTitle}</Heading>;
};

Accessibility.story = {
  parameters: {
    info: "This is a preview of component accessibility props",
  },
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <Heading type="display">Orbit design system</Heading>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
