// @flow
import tooltipArrowStyle from "../tooltipArrowStyle";
import defaultTheme from "../../../../defaultTheme";

const params = position => ({ position, theme: defaultTheme });

const resultWithColor = (width, color) =>
  `border-width:${width};border-color:${color};`.replace(
    "__color__",
    defaultTheme.orbit.paletteInkNormal,
  );

describe("tooltipArrowStyle", () => {
  it("top position", () => {
    expect(tooltipArrowStyle(params("top")).join("")).toEqual(
      resultWithColor("7px 7px 0 7px", "__color__ transparent transparent transparent"),
    );
  });
  it("right position", () => {
    expect(tooltipArrowStyle(params("right")).join("")).toEqual(
      resultWithColor("7px 7px 7px 0", "transparent __color__ transparent transparent"),
    );
  });
  it("left position", () => {
    expect(tooltipArrowStyle(params("left")).join("")).toEqual(
      resultWithColor("7px 0 7px 7px", "transparent transparent transparent __color__"),
    );
  });
  it("bottom position", () => {
    expect(tooltipArrowStyle(params("bottom")).join("")).toEqual(
      resultWithColor("0 7px 7px 7px", "transparent transparent __color__ transparent"),
    );
  });
});
