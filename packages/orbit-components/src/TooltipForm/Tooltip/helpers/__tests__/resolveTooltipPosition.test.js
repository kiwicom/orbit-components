// @flow
import resolveTooltipPosition from "../resolveTooltipPosition";
import defaultTheme from "../../../../defaultTheme";
import { right } from "../../../../utils/rtl";

const defaultPositions = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  pureTop: 0,
  pureLeft: 0,
  pureRight: 0,
  pureBottom: 0,
};

const resolveWithRTLFunction = string => string.replace("__position__", right.toString());

const params = ({ position, contentBounding, inlineLabel }) => ({
  position,
  theme: defaultTheme,
  inlineLabel,
  contentBounding,
});

describe("resolveTooltipPosition", () => {
  it("top position", () => {
    expect(
      resolveTooltipPosition(
        params({
          position: "top",
          contentBounding: defaultPositions,
          inlineLabel: false,
        }),
      ).join(""),
    ).toEqual(resolveWithRTLFunction("top:-8px;__position__:-15px;"));
  });
  it("bottom position", () => {
    expect(
      resolveTooltipPosition(
        params({
          position: "bottom",
          contentBounding: defaultPositions,
          inlineLabel: false,
        }),
      ).join(""),
    ).toEqual(resolveWithRTLFunction("bottom:-8px;__position__:-15px;"));
  });
});
