// @flow
import { left } from "../utils/rtl";
import type { Theme, ThemeProps } from "../defaultTheme";
import { getAlign, getJustify, formatCSS } from "../utils/layout";
import { TOKENS } from "../utils/layout/consts";

import type { SpacingToken, Align, Justify } from ".";

type Prop = "align" | "justify" | "spacing";

export const normalizeSpacing = (el: SpacingToken, theme: Theme): string => {
  const tokens = TOKENS(theme);

  if (el !== "none") {
    return `
      margin-${left({ theme })}: -${tokens[el]};
      margin-top: -${tokens[el]};

      & > * {
        margin-${left({ theme })}: ${tokens[el]};
        margin-top: ${tokens[el]};
      }
    `;
  }

  return "";
};

type PropObject = { [key: Prop]: Align | Justify };

// TODO: kinda weird, but it's well known problem in flow with Object.entries
export const normalize = (object: PropObject): any => ({ theme }: ThemeProps) => {
  if (!object) return null;

  return Object.entries(object).reduce((acc, [key, val]: [string, any]) => {
    if (key === "justify") {
      return [...acc, formatCSS("justify-content", getJustify(val))];
    }

    if (key === "align") {
      return [...acc, formatCSS("align-items", getAlign(val))];
    }

    if (key === "spacing") {
      return [...acc, normalizeSpacing(val, theme)];
    }

    if (val) {
      return [...acc, formatCSS(key, val)];
    }

    return acc;
  }, []);
};
