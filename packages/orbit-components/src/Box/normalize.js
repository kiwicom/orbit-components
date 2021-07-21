// @flow
import { WIDTH_AND_HEIGHT } from "./consts";
import { TOKENS } from "../utils/layout/consts";
import type { ThemeProps, Theme } from "../defaultTheme";
import {
  getJustify,
  getAlign,
  formatCSS,
  getDirection,
  getShrink,
  getWrap,
  getGrow,
  isDefined,
} from "../utils/layout";

import type { MediaQueryObject, Elevation } from ".";

const firstToUpper = string => string.charAt(0).toUpperCase() + string.slice(1);

const normalizeSpacing = (el, property, theme: Theme): string[] => {
  if (typeof el === "object") {
    return Object.entries(el).map(([key, val]: any) => {
      if (val === "none") return formatCSS(`${property}-${key}`, "0");
      return formatCSS(`${property}-${key}`, TOKENS(theme)[val]);
    });
  }

  if (el !== "none") {
    return [formatCSS(property, TOKENS(theme)[el])];
  }

  return [];
};

const normalizeToken = (token, property, prefix, theme: Theme): string =>
  formatCSS(property, theme.orbit[prefix + firstToUpper(token)]);

const normalizeSize = (val, property): string => {
  if (val === WIDTH_AND_HEIGHT.FULL) {
    return formatCSS(property, "100%");
  }

  return formatCSS(property, val);
};

const normalizeElevation = (val: Elevation, theme: Theme): string => {
  return formatCSS("box-shadow", theme.orbit[`boxShadow${firstToUpper(val)}`]);
};

const norm = ({ val, key, theme }): string | void => {
  if (!isDefined(val) || !isDefined(key)) return undefined;

  const all = {
    padding: normalizeSpacing(val, key, theme),
    margin: normalizeSpacing(val, key, theme),
    color: key === "color" && normalizeToken(val, key, "palette", theme),
    background: key === "background" && normalizeToken(val, key, "palette", theme),
    height: normalizeSize(val, key),
    width: normalizeSize(val, key),
    borderRadius:
      key === "borderRadius" && normalizeToken(val, "border-radius", "borderRadius", theme),
    elevation: key === "elevation" && normalizeElevation(val, theme),
    justify: formatCSS("justify-content", getJustify(val)),
    align: formatCSS("align-items", getAlign(val)),
    direction: formatCSS("flex-direction", getDirection(val)),
    grow: formatCSS("flex-grow", getGrow(val)),
    shrink: formatCSS("flex-shrink", getShrink(val)),
    wrap: formatCSS("flex-wrap", getWrap(val)),
    textAlign: formatCSS("text-align", val),
    minWidth: formatCSS("min-width", val),
    maxWidth: formatCSS("max-width", val),
    maxHeight: formatCSS("max-height", val),
  };

  if (!all[key]) return formatCSS(key, val);

  return all[key];
};

const normalize = (object: MediaQueryObject): any => ({ theme }: ThemeProps) => {
  if (!object) return null;

  return Object.entries(object).reduce((acc, [key, val]: any) => {
    const accFn = additional => [...acc, ...additional];
    return accFn([norm({ val, key, theme })]);
  }, []);
};

export default normalize;
