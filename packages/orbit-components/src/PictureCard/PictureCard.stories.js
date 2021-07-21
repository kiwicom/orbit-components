// @flow

import * as React from "react";
import { text, object, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Button from "../Button";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import PictureCard from ".";

const image = object("image", {
  original: "385x320",
  code: "moscow_ru",
  name: "moscow_ru",
  placeholder: "385x320",
});

const imageWithoutPlaceholder = object("imageWithout", {
  original: "385x320",
  code: "moscow_ru",
  name: "moscow_ru",
});

const imageWithSrc = object("imageWith", {
  src: "//images.kiwi.com/photos/385x320/moscow_ru.jpg",
  name: "moscow_ru",
});

export default {
  title: "PictureCard",
};

export const Default = (): React.Node => {
  const title = text("title", "Moscow");
  const subTitle = text("title", "Prague");
  const label = text("title", "Family fun");
  const width = text("title", "328px");
  return (
    <PictureCard
      title={title}
      subTitle={subTitle}
      label={label}
      image={image}
      width={width}
      onClick={action("onClick")}
    >
      from 2,563 Kč
    </PictureCard>
  );
};

Default.story = {
  parameters: {
    info:
      "PictureCard is a component which is used on the landing page and also on the search page.",
  },
};

export const WithActions = (): React.Node => {
  const tabIndex = text("TabIndex", "0");
  const title = text("title", "Moscow");
  const subTitle = text("title", "Prague");
  const label = text("title", "Family fun");
  const width = text("title", "328px");
  return (
    <PictureCard
      title={title}
      subTitle={subTitle}
      tabIndex={tabIndex}
      label={label}
      href="#"
      width={width}
      actions={<Button type="secondary">Action</Button>}
      image={image}
      onClick={action("onClick")}
    >
      from 2,563 Kč
    </PictureCard>
  );
};

WithActions.story = {
  name: "with Actions",

  parameters: {
    info:
      "PictureCard is a component which is used on the landing page and also on the search page.",
  },
};

export const Plain = (): React.Node => {
  const width = text("title", "100%");
  const height = text("height", "150px");

  return <PictureCard width={width} height={height} image={image} />;
};

Plain.story = {
  parameters: {
    info:
      "PictureCard is a component which is used on the landing page and also on the search page.",
  },
};

export const PlainWithoutPlaceHolderForSsr = (): React.Node => {
  return <PictureCard image={imageWithoutPlaceholder} />;
};

PlainWithoutPlaceHolderForSsr.story = {
  name: "Plain without place holder (for SSR)",

  parameters: {
    info:
      "PictureCard is a component which is used on the landing page and also on the search page.",
  },
};

export const PlainWithAnSrcDefinedInsteadOfACode = (): React.Node => {
  return <PictureCard image={imageWithSrc} />;
};

PlainWithAnSrcDefinedInsteadOfACode.story = {
  name: "Plain with an src defined instead of a code",

  parameters: {
    info:
      "PictureCard is a component which is used on the landing page and also on the search page.",
  },
};

export const Playground = (): React.Node => {
  const title = text("title", "Moscow");
  const dataTest = text("dataTest", "test");
  const height = text("height", "300px");
  const width = text("width", "400px");
  const subTitle = text("subTitle", "Prague");
  const children = text("children", "5,563 Kč");
  const tabIndex = text("TabIndex", "0");
  const actions = boolean("actions", false);
  const external = boolean("external", false);
  const href = text("href", "");
  const label = text("label", "Family fun");

  return (
    <PictureCard
      dataTest={dataTest}
      subTitle={subTitle}
      title={title}
      image={image}
      href={href}
      label={label}
      external={external}
      actions={actions ? <Button type="secondary">Action</Button> : null}
      height={height}
      width={width}
      onClick={action("onClick")}
      tabIndex={tabIndex}
    >
      {children}
    </PictureCard>
  );
};

Playground.story = {
  parameters: {
    info:
      "PictureCard is a component which is used on the landing page and also on the search page.",
  },
};

export const Rtl = (): React.Node => {
  const title = text("title", "Paris");
  const dataTest = text("dataTest", "test");
  const height = text("height", "300px");
  const subTitle = text("subTitle", "Prague");
  const children = text("children", "5,563 Kč");
  const tabIndex = text("TabIndex", "0");
  const actions = boolean("actions", false);
  const external = boolean("external", false);
  const href = text("href", "");
  const label = text("label", "Family fun");

  return (
    <RenderInRtl>
      <PictureCard
        dataTest={dataTest}
        subTitle={subTitle}
        title={title}
        image={image}
        href={href}
        label={label}
        external={external}
        actions={actions ? <Button>Action</Button> : null}
        height={height}
        onClick={action("onClick")}
        tabIndex={tabIndex}
      >
        {children}
      </PictureCard>
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of PictureCard in RTL setup.",
  },
};
