// @flow

import * as React from "react";
import { action } from "@storybook/addon-actions";
import { select, text, boolean } from "@storybook/addon-knobs";

import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Breadcrumbs, { BreadcrumbsItem } from ".";

export default {
  title: "Breadcrumbs",
};

export const Default = (): React.Node => (
  <Breadcrumbs onGoBack={action("onGoBack")}>
    <BreadcrumbsItem href="https://kiwi.com" onClick={action("clicked")}>
      Kiwi.com
    </BreadcrumbsItem>
    <BreadcrumbsItem href="#1" onClick={action("clicked")}>
      1. Level
    </BreadcrumbsItem>
    <BreadcrumbsItem onClick={action("clicked")}>2. Level</BreadcrumbsItem>
    <BreadcrumbsItem href="#3">3. Level</BreadcrumbsItem>
    <BreadcrumbsItem>4. Level</BreadcrumbsItem>
  </Breadcrumbs>
);

Default.story = {
  parameters: {
    info: "Some description about this type of component. ",
  },
};

export const Playground = (): React.Node => {
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
  const href = text("href", "https://kiwi.com");
  const withGoBack = boolean("onGoBack", true);
  const backHref = text("backHref", null);
  return (
    <Breadcrumbs
      backHref={backHref}
      onGoBack={withGoBack ? action("onGoBack") : undefined}
      spaceAfter={spaceAfter}
    >
      <BreadcrumbsItem id="rocket" href={href} onClick={action("clicked")}>
        Kiwi.com
      </BreadcrumbsItem>
      <BreadcrumbsItem id="rocket2" href={href} onClick={action("clicked")}>
        1. Level
      </BreadcrumbsItem>
      <BreadcrumbsItem id="rocket3" href={href} onClick={action("clicked")}>
        2. Level
      </BreadcrumbsItem>
      <BreadcrumbsItem id="rocket4" href={href} onClick={action("clicked")}>
        3. Level
      </BreadcrumbsItem>
      <BreadcrumbsItem id="rocket5" href={href} onClick={action("clicked")}>
        4. Level
      </BreadcrumbsItem>
    </Breadcrumbs>
  );
};

Playground.story = {
  parameters: {
    info: "Some description about this type of component. ",
  },
};

export const Rtl = (): React.Node => {
  const href = text("href", "https://kiwi.com");
  return (
    <RenderInRtl>
      <Breadcrumbs onGoBack={action("onGoBack")}>
        <BreadcrumbsItem id="rocket" href={href} onClick={action("clicked")}>
          Kiwi.com
        </BreadcrumbsItem>
        <BreadcrumbsItem id="rocket2" href={href} onClick={action("clicked")}>
          1. Level
        </BreadcrumbsItem>
        <BreadcrumbsItem id="rocket3" href={href} onClick={action("clicked")}>
          2. Level
        </BreadcrumbsItem>
        <BreadcrumbsItem id="rocket4" href={href} onClick={action("clicked")}>
          3. Level
        </BreadcrumbsItem>
        <BreadcrumbsItem id="rocket5" href={href} onClick={action("clicked")}>
          4. Level
        </BreadcrumbsItem>
      </Breadcrumbs>
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",
};

export const BackLink = (): React.Node => (
  <Breadcrumbs backHref="https://www.kiwi.com">{null}</Breadcrumbs>
);

BackLink.story = {
  name: "Back link",

  parameters: {
    info: "Render the back button as a link. ",
  },
};
