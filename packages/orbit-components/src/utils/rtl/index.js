// @flow

import type { ThemeProps } from "../../defaultTheme";

import type { RtlSpacing, BorderRadius, TextAlign, Translate3d } from ".";

const leftToRight = (left, right) => ({ theme }) => (theme.rtl ? right : left);

export const rtlSpacing: RtlSpacing = value => ({ theme }) => {
  if (!theme.rtl) {
    return value;
  }
  const parts = value.split(" ").filter(part => !Number.isNaN(parseFloat(part)) && part);
  return parts.length === 4 ? [parts[0], parts[3], parts[2], parts[1]].join(" ") : value;
};

export const left: ({ ...ThemeProps, ... }) => string = leftToRight("left", "right");

export const right: ({ ...ThemeProps, ... }) => string = leftToRight("right", "left");

export const borderRadius: BorderRadius = value => ({ theme }) => {
  if (!theme.rtl) {
    return value;
  }
  const parts = value.split(" ").filter(part => !Number.isNaN(parseFloat(part)) && part);

  return parts.length === 4 ? [parts[1], parts[0], parts[3], parts[2]].join(" ") : value;
};

export const textAlign: TextAlign = value => ({ theme }) => {
  if (theme.rtl) {
    if (value === "left") {
      return leftToRight("left", "right")({ theme });
    }
    if (value === "right") {
      return leftToRight("right", "left")({ theme });
    }
  }
  return value;
};

export const translate3d: Translate3d = value => ({ theme }) => {
  if (!theme.rtl) {
    return `translate3d(${value})`;
  }
  const parts = value.split(",").filter(part => !Number.isNaN(parseFloat(part)) && part);
  const x = parts[0];
  const newX = x[0] === "-" ? x.slice(1) : `-${x}`;
  return `translate3d(${newX},${parts[1]},${parts[2]})`;
};
