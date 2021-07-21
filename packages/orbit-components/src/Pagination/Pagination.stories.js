// @flow

import * as React from "react";
import { action } from "@storybook/addon-actions";
import { number, text, boolean, select } from "@storybook/addon-knobs";

import { SIZES } from "./consts";

import Pagination from ".";

export default {
  title: "Pagination",
};

export const Default = (): React.Node => {
  const pageCount = number("pageCount", 6);

  return <Pagination pageCount={pageCount} onPageChange={action("onPageChange")} />;
};

export const WithALotOfPages = (): React.Node => {
  const selectedPage = number("selectedPage", 44);
  const pageCount = number("pageCount", 100);

  return (
    <Pagination
      pageCount={pageCount}
      selectedPage={selectedPage}
      onPageChange={action("onPageChange")}
    />
  );
};

WithALotOfPages.story = {
  name: "With a lot of pages",
};

export const SmallSize = (): React.Node => {
  const size = select("size", Object.values(SIZES), SIZES.SMALL);
  const pageCount = number("pageCount", 100);

  return <Pagination pageCount={pageCount} size={size} onPageChange={action("onPageChange")} />;
};

SmallSize.story = {
  name: "Small size",
};

export const Playground = (): React.Node => {
  const dataTest = text("dataTest", "test");
  const pageCount = number("pageCount", 6);
  const selectedPage = number("selectedPage", 2);
  const hideLabels = boolean("hideLabels", false);
  const size = select("size", Object.values(SIZES), SIZES.NORMAL);

  return (
    <Pagination
      dataTest={dataTest}
      pageCount={pageCount}
      selectedPage={selectedPage}
      onPageChange={action("onPageChange")}
      hideLabels={hideLabels}
      size={size}
    />
  );
};
