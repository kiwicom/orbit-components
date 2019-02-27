import convertHexToRgba from "./convertHexToRgba";


var palette = {
  product: {
    light: "#E1F5F2",
    lightHover: "#bde9e2",
    lightActive: "#9addd3",
    normal: "#00a991",
    normalHover: "#009882",
    normalActive: "#008f7b",
    dark: "#00826f"
  },
  white: {
    normal: "#fff"
  },
  cloud: {
    light: "#f5f7f9",
    lightHover: "#e5eaef",
    lightActive: "#d6dee6",
    normal: "#e8edf1",
    normalHover: "#d9e1e8",
    normalActive: "#cad5df"
  },
  ink: {
    lighter: "#bac7d5",
    lighterHover: "#a6b6c8",
    lighterActive: "#94a8be",
    light: "#7f91a8",
    lightHover: "#6d819c",
    lightActive: "#5f738c",
    normal: "#46515e",
    normalHover: "#3f4854",
    normalActive: "#38404b",
    dark: "#171b1e"
  },
  orange: {
    light: "#fcf1cd",
    lightHover: "#faeab7",
    lightActive: "#f9e4a1",
    normal: "#f9971e",
    normalHover: "#f48a06",
    normalActive: "#e68206",
    dark: "#a93610"
  },
  red: {
    light: "#fae8e8",
    lightHover: "#f5d4d4",
    lightActive: "#f1c0c0",
    normal: "#d21c1c",
    normalHover: "#bd1919",
    normalActive: "#b21717",
    dark: "#650808"
  },
  green: {
    light: "#e7f3e8",
    lightHover: "#d7ebd8",
    lightActive: "#c7e3c9",
    normal: "#46B655",
    normalHover: "#42ac50",
    normalActive: "#3fa34c",
    dark: "#065d12"
  },
  blue: {
    light: "#e0f6ff",
    lightHover: "#c8effe",
    lightActive: "#b0e8fe",
    normal: "#0176D2",
    normalHover: "#006abd",
    normalActive: "#0064b2",
    dark: "#003A69"
  },
  social: {
    facebook: "#3b5998",
    facebookHover: "#385490",
    facebookActive: "#354f88"
  }
}; // @flow


var base = {
  fontFamily: '"Roboto", -apple-system, ".SFNSText-Regular", "San Francisco", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
  fontSizeSm: "12px",
  fontSizeMd: "14px",
  fontSizeLg: "16px",
  borderRadius: "3px",
  sizeSm: "16px",
  sizeMd: "24px",
  sizeLg: "32px",
  sizeXl: "44px",
  size2xl: "52px",
  opacitySmall: "0.3",
  opacityMedium: "0.5",
  opacityLarge: "0.8",
  fontWeightNormal: "400",
  fontWeightMedium: "500",
  fontWeightBold: "700",
  space2xs: "4px",
  spaceXs: "8px",
  spaceSm: "12px",
  spaceMd: "16px",
  spaceLg: "24px",
  spaceXl: "32px",
  space2xl: "40px",
  space3xl: "52px",
  durationFast: "0.15s",
  durationNormal: "0.3s",
  durationSlow: "0.4s",
  transitionDefault: "ease-in-out",
  lineHeight: "1.4",
  boxShadowStatic: "0px 0px 3px 1px",
  boxShadowActionable: "0 2px 4px 0",
  boxShadowElevated: "0 4px 12px 0",
  boxShadowModal: "0 20px 60px 0",
  boxShadowColorStatic: convertHexToRgba(palette.blue.normal, 30),
  boxShadowColorActionable: convertHexToRgba(palette.ink.dark, 10),
  boxShadowColorElevated: convertHexToRgba(palette.ink.dark, 30),
  boxShadowColorModal: convertHexToRgba(palette.ink.dark, 40)
};

module.exports = {
  palette: palette,
  base: base
};