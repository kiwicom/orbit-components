// @flow
import * as React from "react";
import { text, select, object } from "@storybook/addon-knobs";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import { WIDTH_AND_HEIGHT } from "./consts";

import Box from ".";

const DEFAULT_COLOR = "blueDark";

const DISPLAY = {
  NONE: "none",
  FLEX: "flex",
  "INLINE-FLEX": "inline-flex",
  BLOCK: "block",
  INLINE: "inline",
  "INLINE-BLOCK": "inline-block",
};

const WRAP = [0, 1];

const DIRECTION = {
  ROW: "row",
  COLUMN: "column",
  "ROW-REVERSE": "row-reverse",
  "COLUMN-REVERSE": "column-reverse",
};

const SHRINK = [0, 1];

const GROW = [0, 1];

const POSITION = { ABSOLUTE: "absolute", RELATIVE: "relative", FIXED: "fixed" };

const ALIGN = { START: "start", END: "end", CENTER: "center", STRETCH: "stretch" };

const JUSTIFY = {
  CENTER: "center",
  START: "start",
  END: "end",
  BETWEEN: "between",
  AROUND: "around",
};

const TEXT_ALIGN = { LEFT: "left", RIGHT: "right", CENTER: "center" };

const ELEVATION = { ACTION: "action", FIXED: "fixed", RAISED: "raised", OVERLAY: "overlay" };

const BORDER_RADIUS = {
  SMALL: "small",
  NORMAL: "normal",
  LARGE: "large",
  RADIUSCIRCLE: "circle",
};

const OVERFLOW = { AUTO: "auto", HIDDEN: "hidden", SCROLL: "scroll", VISIBLE: "visible" };

const COLORS = [
  "productLight",
  "productLightHover",
  "productLightActive",
  "productNormal",
  "productNormalHover",
  "productNormalActive",
  "productDark",
  "productDarkHover",
  "productDarkActive",
  "productDarker",
  "white",
  "whiteHover",
  "whiteActive",
  "cloudLight",
  "cloudLightHover",
  "cloudLightActive",
  "cloudNormal",
  "cloudNormalHover",
  "cloudNormalActive",
  "cloudDark",
  "inkLighter",
  "inkLighterHover",
  "inkLighterActive",
  "inkLight",
  "inkLightHover",
  "inkLightActive",
  "inkNormal",
  "inkNormalHover",
  "inkNormalActive",
  "orangeLight",
  "orangeLightHover",
  "orangeLightActive",
  "orangeNormal",
  "orangeNormalHover",
  "orangeNormalActive",
  "orangeDark",
  "orangeDarkHover",
  "orangeDarkActive",
  "orangeDarker",
  "redLight",
  "redLightHover",
  "redLightActive",
  "redNormal",
  "redNormalHover",
  "redNormalActive",
  "redDark",
  "redDarkHover",
  "redDarkActive",
  "redDarker",
  "greenLight",
  "greenLightHover",
  "greenLightActive",
  "greenNormal",
  "greenNormalHover",
  "greenNormalActive",
  "greenDark",
  "greenDarkHover",
  "greenDarkActive",
  "greenDarker",
  "blueLight",
  "blueLightHover",
  "blueLightActive",
  "blueNormal",
  "blueNormalHover",
  "blueNormalActive",
  "blueDark",
  "blueDarkHover",
  "blueDarkActive",
  "blueDarker",
  "socialFacebook",
  "socialFacebookHover",
  "socialFacebookActive",
];

const SPACINGS = [
  "none",
  "XXXSmall",
  "XXSmall",
  "XSmall",
  "small",
  "medium",
  "large",
  "XLarge",
  "XXLarge",
  "XXXLarge",
];

export default {
  title: "Box",
};

export const Default = (): React.Node => {
  const children = text("Children", "Default box");
  const as = text("As", "span");
  return <Box as={as}>{children}</Box>;
};

Default.story = {
  parameters: {
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Overflow = (): React.Node => {
  const overflow = select("overflow", Object.values(OVERFLOW), OVERFLOW.AUTO);

  return (
    <Box
      background={DEFAULT_COLOR}
      overflow={overflow}
      color="cloudLight"
      padding="large"
      maxWidth="300px"
    >
      Text
    </Box>
  );
};

export const TextAlign = (): React.Node => {
  const textAlign = select("textAlign", Object.values(TEXT_ALIGN), TEXT_ALIGN.CENTER);

  return (
    <Box
      background={DEFAULT_COLOR}
      textAlign={textAlign}
      color="cloudLight"
      padding="large"
      maxWidth="300px"
    >
      Text
    </Box>
  );
};

TextAlign.story = {
  name: "TextAlign",
};

export const Positions = (): React.Node => {
  const position = select("position", Object.values(POSITION), POSITION.RELATIVE);
  const top = text("top", "");
  const left = text("left", "");
  const right = text("right", "");
  const bottom = text("bottom", "");

  return (
    <Box
      background={DEFAULT_COLOR}
      height="full"
      maxHeight="100px"
      maxWidth="100px"
      width="full"
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      position={position}
    >
      <div
        style={{
          height: "50px",
        }}
      />
    </Box>
  );
};

export const PaddingMargin = (): React.Node => {
  const margin = select("margin", SPACINGS, SPACINGS[0]);
  const padding = select("padding", SPACINGS, SPACINGS[0]);

  return (
    <Box background={DEFAULT_COLOR} maxWidth="300px" margin={margin} padding={padding}>
      <div
        style={{
          height: "50px",
        }}
      />
    </Box>
  );
};

PaddingMargin.story = {
  name: "Padding & Margin",
};

export const BorderRadius = (): React.Node => {
  const radius = select("borderRadius", Object.values(BORDER_RADIUS), BORDER_RADIUS.NORMAL);

  return (
    <Box background={DEFAULT_COLOR} maxWidth="150px" borderRadius={radius}>
      <div
        style={{
          height: "50px",
        }}
      />
    </Box>
  );
};

BorderRadius.story = {
  name: "BorderRadius",
};

export const Colors = (): React.Node => {
  const color = select("colors", COLORS, COLORS[10]);
  const background = select("background", COLORS, DEFAULT_COLOR);

  return (
    <Box display="flex" justify="center" align="center" background={background} color={color}>
      <div
        style={{
          height: "100px",
          width: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Content
      </div>
    </Box>
  );
};

export const Elevation = (): React.Node => {
  const elevation = select("elevation", Object.values(ELEVATION), ELEVATION.ACTION);

  return (
    <Box
      display="flex"
      justify="center"
      maxHeight="100px"
      elevation={elevation}
      maxWidth="300px"
      align="center"
      background="cloudDark"
    >
      <div
        style={{
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Content
      </div>
    </Box>
  );
};

export const Flex = (): React.Node => {
  const direction = select("direction", Object.values(DIRECTION), DIRECTION.ROW);
  const display = select("display", Object.values(DISPLAY), "flex");
  const align = select("align", Object.values(ALIGN), ALIGN.START);
  const justify = select("justify", Object.values(JUSTIFY), "start");
  const wrap = select("wrap", Object.values(WRAP), WRAP[0]);
  const shrink = select("shrink", Object.values(SHRINK), SHRINK[0]);
  const grow = select("grow", Object.values(GROW), GROW[0]);

  return (
    <Box
      display={display}
      justify={justify}
      shrink={shrink}
      grow={grow}
      height="full"
      wrap={wrap}
      align={align}
      direction={direction}
    >
      <div style={{ height: 50, width: 50, background: "#ccc" }} />
      <div style={{ height: 50, width: 50, background: "#ccc" }} />
    </Box>
  );
};

export const Playground = (): React.Node => {
  const children = text("Children", "Box");
  const display = select("display", Object.values(DISPLAY), DISPLAY.FLEX);
  const overflow = select("overflow", Object.values(OVERFLOW), OVERFLOW.VISIBLE);
  const wrap = select("wrap", Object.values(WRAP), WRAP[0]);
  const shrink = select("shrink", SHRINK, SHRINK[0]);
  const grow = select("grow", GROW, GROW[0]);
  const align = select("align", Object.values(ALIGN), ALIGN.START);
  const textAlign = select("text-align", Object.values(TEXT_ALIGN), TEXT_ALIGN.LEFT);
  const justify = select("justify", Object.values(JUSTIFY), JUSTIFY.CENTER);
  const direction = select("direction", Object.values(DIRECTION), DIRECTION.ROW);
  const width = select("width", Object.values(WIDTH_AND_HEIGHT), WIDTH_AND_HEIGHT.AUTO);
  const minWidth = text("min-width", "");
  const maxWidth = text("max-width", "100px");
  const height = select("height", Object.values(WIDTH_AND_HEIGHT), WIDTH_AND_HEIGHT.AUTO);
  const maxHeight = text("max-height", "100px");
  const elevation = select("elevation", Object.values(ELEVATION), ELEVATION.ACTION);
  const borderRadius = select("border-radius", Object.values(BORDER_RADIUS), BORDER_RADIUS.NORMAL);
  const position = select("position", Object.values(POSITION), POSITION.RELATIVE);
  const top = text("top", "10px");
  const right = text("right", "10px");
  const bottom = text("left", "10px");
  const left = text("bottom", "10px");
  const margin = select("margin", SPACINGS, SPACINGS[0]);
  const padding = object("padding", { top: "small", left: "XSmall", right: "XXSmall" }, "");

  return (
    <Box
      display={display}
      wrap={wrap}
      shrink={shrink}
      grow={grow}
      align={align}
      textAlign={textAlign}
      direction={direction}
      justify={justify}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      height={height}
      maxHeight={maxHeight}
      elevation={elevation}
      borderRadius={borderRadius}
      position={position}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      overflow={overflow}
      padding={padding}
      margin={margin}
      color="productLight"
      background="inkLight"
    >
      {children}
    </Box>
  );
};

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl = (): React.Node => {
  const right = text("right", "10px");
  const left = text("bottom", "10px");
  const margin = select("margin", SPACINGS, SPACINGS[0]);
  const padding = object("padding", { top: "small", left: "XSmall", right: "XXSmall" }, "");
  const textAlign = select("text-align", Object.values(TEXT_ALIGN), TEXT_ALIGN.LEFT);
  const justify = select("justify", Object.values(JUSTIFY), JUSTIFY.CENTER);
  const direction = select("direction", Object.values(DIRECTION), DIRECTION.ROW);
  const align = select("align", Object.values(ALIGN), ALIGN.START);

  return (
    <RenderInRtl>
      <Box
        right={right}
        justify={justify}
        direction={direction}
        textAlign={textAlign}
        left={left}
        align={align}
        margin={margin}
        padding={padding}
      >
        Box in RTL
      </Box>
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
