// @flow
import * as React from "react";
import { text, select, boolean } from "@storybook/addon-knobs";

import TYPE_OPTIONS from "./consts";
import * as Icons from "../icons";
import Card from "../Card";
import CardSection from "../Card/CardSection";
import Illustration from "../Illustration";
import Button from "../Button";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Loading from ".";

export default {
  title: "Loading",
};

export const Default = (): React.Node => <Loading />;

Default.story = {
  parameters: {
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const ButtonLoading = (): React.Node => <Button loading>Default button</Button>;

ButtonLoading.story = {
  name: "Button loading",

  parameters: {
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const CardLoading = (): React.Node => {
  const title = text("Title", "Card with title");
  const description = text("Description");
  const loading = boolean("Loading", true);
  const loadingText = text("Text", "Please wait, Card content is loading...");
  return (
    <Card loading={loading} icon={<Icons.Airplane />} title={title} description={description}>
      <Loading loading={loading} type="boxLoader" text={loadingText}>
        <CardSection>
          <Illustration name="EnjoyApp" size="medium" />
        </CardSection>
      </Loading>
    </Card>
  );
};

CardLoading.story = {
  name: "Card loading",

  parameters: {
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const InlineLoader = (): React.Node => {
  const loadingText = text("Text", "Please wait, content of the page is loading...");
  return <Loading type={TYPE_OPTIONS.INLINE_LOADER} text={loadingText} />;
};

InlineLoader.story = {
  name: "Inline loader",

  parameters: {
    info:
      "This configuration of this component is without any height, width or paddings. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = (): React.Node => {
  const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.PAGE_LOADER);
  const loadingText = text("Text", "Please wait, content of the page is loading...");
  const loading = boolean("Loading", true);
  const dataTest = text("dataTest", "test");

  return <Loading loading={loading} type={type} text={loadingText} dataTest={dataTest} />;
};

Playground.story = {
  parameters: {
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <Loading loading type="pageLoader" text="Please wait, content of the page is loading..." />
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
