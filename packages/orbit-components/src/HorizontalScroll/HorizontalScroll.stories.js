// @flow
import * as React from "react";
import { select, number } from "@storybook/addon-knobs";

import Box from "../Box";
import Text from "../Text";

import HorizontalScroll from ".";

export default {
  title: "HorizontalScroll",
};

export const Default = (): React.Node => {
  return (
    <HorizontalScroll>
      {Array(...Array(10)).map((_, key) => (
        <Box
          // eslint-disable-next-line react/no-array-index-key
          key={key}
          display="flex"
          justify="center"
          minWidth="150px"
          background="cloudDark"
          height="full"
        >
          <Text size="large" weight="bold" as="div">
            <div
              style={{
                height: "50px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {key}
            </div>
          </Text>
        </Box>
      ))}
    </HorizontalScroll>
  );
};

export const withScrollSnap = (): React.Node => {
  const scrollSnapAlign = select("scrollSnapAlign", ["none", "start", "end", "center"], "start");
  const scrollSnap = select(
    "scrollSnapType",
    ["none", "inline", "mandatory", "proximity"],
    "mandatory",
  );
  const scrollPadding = number("scrollPadding", 0);

  return (
    <HorizontalScroll scrollSnap={scrollSnap} scrollPadding={scrollPadding}>
      {Array(...Array(10)).map((_, key) => (
        <div
          style={{
            scrollSnapAlign,
            width: "150px",
            display: "flex",
            justifyContent: "center",
            height: "50px",
            background: "#ccc",
          }}
        >
          <Text size="large" weight="bold" as="div">
            <div
              style={{
                height: "50px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {key}
            </div>
          </Text>
        </div>
      ))}
    </HorizontalScroll>
  );
};
