import convertHexToRgba from "./convertHexToRgba";
const palette = {
  product: {
    light: "#ECF8F7",
    lightHover: "#D6F0EE",
    lightActive: "#C0E8E4",
    normal: "#00a991",
    normalHover: "#009882",
    normalActive: "#008f7b",
    dark: "#007F6D",
    darkHover: "#007060",
    darkActive: "#006657"
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
    light: "#5F738C",
    lightHover: "#52647A",
    lightActive: "#465567",
    normal: "#252A31",
    normalHover: "#181B20",
    normalActive: "#0B0C0F",
    dark: "#171b1e"
  },
  orange: {
    light: "#FDF0E3",
    lightHover: "#FAE2C7",
    lightActive: "#F8D3AB",
    normal: "#F9971E",
    normalHover: "#F38906",
    normalActive: "#D67906",
    dark: "#8E2A06",
    darkHover: "#712105",
    darkActive: "#531904"
  },
  red: {
    light: "#FAEAEA",
    lightHover: "#F4D2D2",
    lightActive: "#EEB9B9",
    normal: "#D21C1C",
    normalHover: "#B91919",
    normalActive: "#9D1515",
    dark: "#760909",
    darkHover: "#5A0707",
    darkActive: "#3E0505"
  },
  green: {
    light: "#EBF4EC",
    lightHover: "#D7EAD9",
    lightActive: "#C3DFC7",
    normal: "#28A138",
    normalHover: "#238B31",
    normalActive: "#1D7228",
    dark: "#235C2B",
    darkHover: "#1B4621",
    darkActive: "#123016"
  },
  blue: {
    light: "#E5F7FF",
    lightHover: "#C7EEFF",
    lightActive: "#A8E5FF",
    normal: "#0172CB",
    normalHover: "#0161AC",
    normalActive: "#01508E",
    dark: "#004680",
    darkHover: "#003561",
    darkActive: "#002442"
  },
  social: {
    facebook: "#3b5998",
    facebookHover: "#385490",
    facebookActive: "#354f88"
  }
};
const base = {
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
const foundation = {
  palette,
  base
};
export default foundation;