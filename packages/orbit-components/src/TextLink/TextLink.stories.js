// @flow

import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";
import { TYPE_OPTIONS as TEXT_TYPES } from "../Text/consts";
import * as Icons from "../icons";
import Text from "../Text";
import Box from "../Box";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import TextLink from ".";

const validate = rel => (rel !== undefined && rel !== "" ? rel : undefined);

const getIcons = (name, defaultIcon) => select(name, [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

export default {
  title: "TextLink",
};

export const PrimaryLink = (): React.Node => {
  const href = text("Href", "https://kiwi.com");
  const external = boolean("External", false);
  const children = text("children", "Primary link");

  return (
    <TextLink external={external} onClick={action("clicked")} href={href} type="primary">
      {children}
    </TextLink>
  );
};

PrimaryLink.story = {
  name: "Primary link",

  parameters: {
    info:
      "Text links are used in paragraphs when part of the text needs to be actionable. It inherits the visual style of the parent paragraph. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const SecondaryLink = (): React.Node => {
  const href = text("Href", "https://kiwi.com");
  const external = boolean("External", false);
  const children = text("children", "Secondary link");

  return (
    <TextLink external={external} onClick={action("clicked")} href={href} type="secondary">
      {children}
    </TextLink>
  );
};

SecondaryLink.story = {
  name: "Secondary link",

  parameters: {
    info:
      "Text links are used in paragraphs when part of the text needs to be actionable. It inherits the visual style of the parent paragraph. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const LinkWithLeftIcon = (): React.Node => {
  const href = text("Href", "https://kiwi.com");
  const children = text("children", "TextLink with icon");
  const Icon = getIcon(getIcons("iconLeft", "ChevronLeft"));

  return (
    <TextLink onClick={action("clicked")} href={href} iconLeft={Icon && <Icon />} standAlone>
      {children}
    </TextLink>
  );
};

LinkWithLeftIcon.story = {
  name: "Link with left icon",

  parameters: {
    info:
      "Text links are used in paragraphs when part of the text needs to be actionable. It inherits the visual style of the parent paragraph. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const LinkWithRightIcon = (): React.Node => {
  const href = text("Href", "https://kiwi.com");
  const children = text("children", "TextLink with icon");
  const Icon = getIcon(getIcons("iconRight", "ChevronRight"));

  return (
    <TextLink onClick={action("clicked")} href={href} iconRight={Icon && <Icon />}>
      {children}
    </TextLink>
  );
};

LinkWithRightIcon.story = {
  name: "Link with right icon",

  parameters: {
    info:
      "Text links are used in paragraphs when part of the text needs to be actionable. It inherits the visual style of the parent paragraph. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = (): React.Node => {
  const href = text("Href", "https://kiwi.com");
  const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.SECONDARY);
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.SMALL);
  const external = boolean("External", true);
  const children = text("Text", "Custom link");
  const rel = text("Rel", undefined);
  const IconRight = getIcon(getIcons("iconRight", "ChevronRight"));
  const IconLeft = getIcon(getIcons("iconLeft", null));
  const dataTest = text("dataTest", "test");
  const tabIndex = text("tabIndex", "");
  const stopPropagation = boolean("stopPropagation", false);
  const standAlone = boolean("standAlone", false);
  const noUnderline = boolean("noUnderline", false);
  return (
    <Box
      padding="small"
      borderRadius="normal"
      background={type === TYPE_OPTIONS.WHITE ? "inkLight" : "cloudNormal"}
    >
      <TextLink
        external={external}
        onClick={action("clicked")}
        href={href}
        type={type}
        size={size}
        rel={validate(rel)}
        iconRight={IconRight && <IconRight />}
        iconLeft={IconLeft && <IconLeft />}
        dataTest={dataTest}
        tabIndex={tabIndex}
        stopPropagation={stopPropagation}
        standAlone={standAlone}
        noUnderline={noUnderline}
      >
        {children}
      </TextLink>
    </Box>
  );
};

export const TextLinkInText = (): React.Node => {
  const type = select("type", Object.values(TEXT_TYPES), TEXT_TYPES.CRITICAL);
  return (
    <Text type={type}>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dapibus fermentum ipsum. Duis
      ante orci, molestie vitae vehicula venenatis, tincidunt ac pede.{" "}
      <TextLink onClick={action("onClick")} type={type}>
        Etiam dui sem
      </TextLink>
      , fermentum vitae, sagittis id, malesuada in, quam. Vivamus luctus egestas leo. Integer
      imperdiet lectus quis justo. Duis condimentum augue id magna semper rutrum. Quisque porta. Sed
      elit dui, pellentesque a, faucibus vel, interdum nec, diam.
    </Text>
  );
};

TextLinkInText.story = {
  name: "TextLink inside paragraph",
  parameters: {
    info:
      "It inherits the visual style of the parent paragraph. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Accessibility = (): React.Node => {
  const children = text("children", "Primary link");
  const title = text("title", "Clarify purpose of a link for screen readers");

  return (
    <TextLink title={title} onClick={action("clicked")} type="primary">
      {children}
    </TextLink>
  );
};

Accessibility.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <TextLink onClick={action("clicked")} href="#" iconRight={<Icons.ChevronRight />}>
      Link
    </TextLink>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
