// @flow
import * as React from "react";
import { text, select } from "@storybook/addon-knobs";

import { TYPE_OPTIONS } from "../Badge/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import * as Icons from "../icons";

import NotificationBadge from ".";

const getIcons = defaultIcon => select("Icon", [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

export default {
  title: "NotificationBadge",
};

export const Default = (): React.Node => {
  const content = text("Content", "10");
  const Icon = getIcon(getIcons(null));
  return <NotificationBadge icon={Icon && <Icon />}>{content}</NotificationBadge>;
};

Default.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Neutral = (): React.Node => {
  const content = text("Content", "10");
  return <NotificationBadge type={TYPE_OPTIONS.NEUTRAL}>{content}</NotificationBadge>;
};

Neutral.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Info = (): React.Node => {
  const content = text("Content", "10");
  return <NotificationBadge type={TYPE_OPTIONS.INFO}>{content}</NotificationBadge>;
};

Info.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const InfoInverted = (): React.Node => {
  const content = text("Content", "10");
  return <NotificationBadge type={TYPE_OPTIONS.INFO_INVERTED}>{content}</NotificationBadge>;
};

InfoInverted.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Success = (): React.Node => {
  const content = text("Content", "10");
  return <NotificationBadge type={TYPE_OPTIONS.SUCCESS}>{content}</NotificationBadge>;
};

Success.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Warning = (): React.Node => {
  const content = text("Content", "10");
  return <NotificationBadge type={TYPE_OPTIONS.WARNING}>{content}</NotificationBadge>;
};

Warning.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Critical = (): React.Node => {
  const content = text("Content", "10");
  return <NotificationBadge type={TYPE_OPTIONS.CRITICAL}>{content}</NotificationBadge>;
};

Critical.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const CriticalInverted = (): React.Node => {
  const content = text("Content", "10");
  return <NotificationBadge type={TYPE_OPTIONS.CRITICAL_INVERTED}>{content}</NotificationBadge>;
};

CriticalInverted.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Dark = (): React.Node => {
  const content = text("Content", "10");
  return <NotificationBadge type={TYPE_OPTIONS.DARK}>{content}</NotificationBadge>;
};

Dark.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const White = (): React.Element<"div"> => {
  const content = text("Content", "10");
  return (
    <div style={{ backgroundColor: "#46515e", padding: "10px" }}>
      <NotificationBadge type={TYPE_OPTIONS.WHITE}>{content}</NotificationBadge>
    </div>
  );
};

White.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Playground = (): React.Node => {
  const content = text("Content", "10");
  const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.INFO);
  const dataTest = text("dataTest", "test");
  const ariaLabel = text("ariaLabel", "additional information for screen readers");
  const Icon = getIcon(getIcons("Airplane"));

  return (
    <NotificationBadge
      type={type}
      dataTest={dataTest}
      ariaLabel={ariaLabel}
      icon={Icon && <Icon />}
    >
      {content}
    </NotificationBadge>
  );
};

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Accessibility = (): React.Node => {
  const content = text("Content", "10");
  const ariaLabel = text("ariaLabel", "additional information for screen readers");

  return (
    <NotificationBadge type="info" ariaLabel={ariaLabel}>
      {content}
    </NotificationBadge>
  );
};

Accessibility.story = {
  parameters: {
    info: "This is a preview of component accessibility props",
  },
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <NotificationBadge type="info">10</NotificationBadge>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
