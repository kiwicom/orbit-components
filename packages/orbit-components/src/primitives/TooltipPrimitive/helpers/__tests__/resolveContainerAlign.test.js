// @flow
import resolveContainerAlign from "../resolveContainerAlign";
import theme from "../../../../defaultTheme";

const dimensions = {
  windowHeight: 789,
  windowWidth: 743,
  tooltipHeight: 32,
  tooltipWidth: 132,
  contentHeight: 16,
  containerHeight: 24,
  containerWidth: 24,
  containerLeft: 28,
  containerLeftPure: 28,
  containerTop: 20,
  containerTopPure: 20,
};

const params = (align, position) => ({ align, position, ...dimensions, theme });

const resolve = (align, position) => {
  const result = resolveContainerAlign(params(align, position));
  return result && result.join("");
};

describe("resolveContainerAlign", () => {
  it("center align", () => {
    const align = "center";
    expect(resolve(align, "top")).toEqual("left:-26px;");
    expect(resolve(align, "right")).toEqual("top:16px;");
    expect(resolve(align, "bottom")).toEqual("left:-26px;");
    expect(resolve(align, "left")).toEqual("top:16px;");
  });
  it("start align", () => {
    const align = "start";
    expect(resolve(align, "top")).toEqual("left:21px;");
    expect(resolve(align, "right")).toEqual("top:13px;");
    expect(resolve(align, "bottom")).toEqual("left:21px;");
    expect(resolve(align, "left")).toEqual("top:13px;");
  });
  it("end align", () => {
    const align = "end";
    expect(resolve(align, "top")).toEqual("left:-73px;");
    expect(resolve(align, "right")).toEqual("top:19px;");
    expect(resolve(align, "bottom")).toEqual("left:-73px;");
    expect(resolve(align, "left")).toEqual("top:19px;");
  });
});
