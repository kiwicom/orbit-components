// @flow
import tooltipArrowStyle from "../tooltipArrowStyle";
import resolveColor from "../resolveColor";

const resultWithColor = (width, color) =>
  `border-width:${width};border-color:${color};`.replace("__color__", resolveColor.toString());

describe("tooltipArrowStyle", () => {
  it("top position", () => {
    expect(tooltipArrowStyle({ position: "top" }).join("")).toEqual(
      resultWithColor("7px 7px 0 7px", "__color__ transparent transparent transparent"),
    );
  });

  it("bottom position", () => {
    expect(tooltipArrowStyle({ position: "bottom" }).join("")).toEqual(
      resultWithColor("0 7px 7px 7px", "transparent transparent __color__ transparent"),
    );
  });
});
