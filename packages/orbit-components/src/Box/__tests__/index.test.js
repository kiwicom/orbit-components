// @flow
import * as React from "react";
import { screen, render } from "@testing-library/react";
import transparentColor from "@kiwicom/orbit-design-tokens/lib/js/transparentColor";

import { getJustify, getAlign } from "../../utils/layout";
import theme from "../../defaultTheme";
import { TOKENS } from "../../utils/layout/consts";
import Box from "..";

const dataTest = "test";

const DIRECTIONS = {
  ROW: "row",
  COLUMN: "column",
  "ROW-REVERSE": "row-reverse",
  "COLUMN-REVERSE": "column-reverse",
};

const ALIGN = { START: "start", END: "end", CENTER: "center", STRETCH: "stretch" };

const POSITIONS = { ABSOLUTE: "absolute", RELATIVE: "relative", FIXED: "fixed" };

const JUSTIFY = {
  CENTER: "center",
  START: "start",
  END: "end",
  BETWEEN: "between",
  AROUND: "around",
};

const TEXT_ALIGN = { LEFT: "left", RIGHT: "right", CENTER: "center" };

const ELEVATION = { ACTION: "action", FIXED: "fixed", RAISED: "raised", OVERLAY: "overlay" };

describe("#Box", () => {
  it("should have basic props", () => {
    render(
      <Box
        dataTest={dataTest}
        color="blueDark"
        padding="medium"
        margin="medium"
        minWidth="100px"
        maxWidth="300px"
        maxHeight="100px"
        display="block"
        background="cloudLight"
      >
        kek
      </Box>,
    );

    const el = screen.getByTestId(dataTest);
    const getOmittedHex = hex =>
      transparentColor(hex, NaN).replace(", NaN", "").replace("rgba", "rgb");

    expect(el).toBeInTheDocument();
    expect(el).toHaveStyle({ color: getOmittedHex(theme.orbit.paletteBlueDark) });
    expect(el).toHaveStyle({ background: getOmittedHex(theme.orbit.paletteCloudLight) });
    expect(el).toHaveStyle({ padding: TOKENS(theme).medium });
    expect(el).toHaveStyle({ margin: TOKENS(theme).medium });
    expect(el).toHaveStyle({ display: "block" });
    expect(el).toHaveStyle({ minWidth: "100px" });
    expect(el).toHaveStyle({ maxWidth: "300px" });
    expect(el).toHaveStyle({ maxHeight: "100px" });
  });

  it("should have display flex", () => {
    render(
      <Box dataTest={dataTest} display="flex" wrap="wrap" direction="row" grow={0} shrink={0}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(dataTest)).toHaveStyle({ display: "flex" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ flexDirection: "row" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ flexShrink: "0" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ flexGrow: "0" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ flexWrap: "wrap" });
  });

  it.each(Object.values(DIRECTIONS))("should have directions", direction => {
    render(
      <Box dataTest={`${dataTest}-${direction}`} display="flex" direction={direction}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(`${dataTest}-${direction}`)).toHaveStyle({
      flexDirection: direction,
    });
  });

  it.each(Object.values(POSITIONS))("should have positions", position => {
    render(
      <Box dataTest={`${dataTest}-${position}`} position={position}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(`${dataTest}-${position}`)).toHaveStyle({ position });
  });

  it.each(Object.keys(JUSTIFY))("should have justify-content", key => {
    render(
      <Box dataTest={`${dataTest}-${key}`} display="flex" justify={JUSTIFY[key]}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(`${dataTest}-${key}`)).toHaveStyle({
      justifyContent: getJustify(JUSTIFY[key]),
    });
  });

  it.each(Object.keys(ALIGN))("should have align-items", key => {
    render(
      <Box dataTest={`${dataTest}-${key}`} display="flex" align={ALIGN[key]}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(`${dataTest}-${key}`)).toHaveStyle({
      alignItems: getAlign(ALIGN[key]),
    });
  });

  it.each(Object.keys(TEXT_ALIGN))("should have textAlign", key => {
    render(
      <Box dataTest={`${dataTest}-${key}`} textAlign={TEXT_ALIGN[key]}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(`${dataTest}-${key}`)).toHaveStyle({
      textAlign: TEXT_ALIGN[key],
    });
  });

  it("should have left, right, top, bottom", () => {
    render(
      <Box dataTest={dataTest} top="10px" left="5px" right="0" bottom="0">
        kek
      </Box>,
    );

    expect(screen.getByTestId(dataTest)).toHaveStyle({ top: "10px" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ bottom: "0px" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ left: "5px" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ right: "0px" });
  });

  it("should have padding and margin object props", () => {
    render(
      <Box
        dataTest="kek"
        margin={{ top: "XSmall", left: "XXSmall", bottom: "none", right: "medium" }}
        padding={{ top: "XSmall", left: "XXSmall", bottom: "none", right: "medium" }}
      >
        kek
      </Box>,
    );

    expect(screen.getByTestId("kek")).toHaveStyle({
      paddingTop: "8px",
      paddingLeft: "4px",
      paddingRight: "16px",
      paddingBottom: "0",
      marginTop: "8px",
      marginLeft: "4px",
      marginRight: "16px",
      marginBottom: "0",
    });
  });

  it("should have elevation", () => {
    const test = Object.keys(ELEVATION).map((key, idx) => (
      <Box dataTest={`${dataTest}-${idx}`} display="flex" elevation={ELEVATION[key]}>
        kek
      </Box>
    ));

    const testEl = (idx: number) => render(test[idx]).getByTestId(`${dataTest}-${idx}`);

    const trimSpaces = val => val.replace(/, /g, ",");

    expect(testEl(0)).toHaveStyle({ boxShadow: trimSpaces(theme.orbit.elevationActionBoxShadow) });
    expect(testEl(1)).toHaveStyle({ boxShadow: trimSpaces(theme.orbit.elevationFixedBoxShadow) });
    expect(testEl(2)).toHaveStyle({ boxShadow: trimSpaces(theme.orbit.elevationRaisedBoxShadow) });
    expect(testEl(3)).toHaveStyle({ boxShadow: trimSpaces(theme.orbit.elevationOverlayBoxShadow) });
  });
});
