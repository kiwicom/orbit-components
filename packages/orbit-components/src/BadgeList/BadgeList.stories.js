// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import Tooltip from "../Tooltip";
import TextLink from "../TextLink";
import TYPE_OPTIONS from "./consts";
import Text from "../Text";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import BadgeList, { BadgeListItem } from ".";

export default {
  title: "BadgeList",
};

export const Default = (): React.Node => {
  return (
    <BadgeList>
      <BadgeListItem icon={<Icons.AlertCircle />}>
        You&apos;re departing from a different place
      </BadgeListItem>
      <BadgeListItem icon={<Icons.BaggageCabin />}>
        You must collect and recheck your baggage
      </BadgeListItem>
    </BadgeList>
  );
};

export const Types = (): React.Node => {
  const component = type => (
    <BadgeListItem icon={<Icons.KiwicomGuarantee />} type={type}>
      <TextLink onClick={action("link clicked")} type="secondary">
        Transfer protected
      </TextLink>{" "}
      by the Kiwi.com Guarantee
    </BadgeListItem>
  );
  return (
    <BadgeList>
      {component(TYPE_OPTIONS.NEUTRAL)}
      {component(TYPE_OPTIONS.INFO)}
      {component(TYPE_OPTIONS.SUCCESS)}
      {component(TYPE_OPTIONS.WARNING)}
      {component(TYPE_OPTIONS.CRITICAL)}
    </BadgeList>
  );
};

export const Playground = (): React.Node => {
  const dataTest = text("dataTest", "test");
  const type = select("type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.NEUTRAL);
  return (
    <BadgeList dataTest={dataTest}>
      <BadgeListItem icon={<Icons.AlertCircle />} type={type}>
        You&apos;re departing from a different place
      </BadgeListItem>
      <BadgeListItem icon={<Icons.SelfTransfer />} type={type}>
        <Tooltip content="Additional information">
          <Text>Self transfer at Vienna</Text>
        </Tooltip>{" "}
        is your responsibility
      </BadgeListItem>
      <BadgeListItem icon={<Icons.KiwicomGuarantee />} type={type}>
        <TextLink onClick={action("link clicked")} type="secondary">
          Transfer protected
        </TextLink>{" "}
        by the Kiwi.com Guarantee
      </BadgeListItem>
    </BadgeList>
  );
};

Playground.story = {
  parameters: {
    info: "Here you can try BadgeList component with additional functionality.",
  },
};

export const RTL = (): React.Node => {
  return (
    <RenderInRtl>
      <BadgeList>
        <BadgeListItem icon={<Icons.AlertCircle />}>
          You&apos;re departing from a different place
        </BadgeListItem>
        <BadgeListItem icon={<Icons.SelfTransfer />}>
          <Tooltip content="Additional information">
            <Text>Self transfer at Vienna</Text>
          </Tooltip>{" "}
          is your responsibility
        </BadgeListItem>
        <BadgeListItem icon={<Icons.KiwicomGuarantee />}>
          <TextLink onClick={action("link clicked")} type="secondary">
            Transfer protected
          </TextLink>{" "}
          by the Kiwi.com Guarantee
        </BadgeListItem>
      </BadgeList>
    </RenderInRtl>
  );
};
