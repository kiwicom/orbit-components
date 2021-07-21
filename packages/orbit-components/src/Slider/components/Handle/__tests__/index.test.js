// @flow

import { calculateLeftPosition, isFirst } from "..";

describe("Handle in Slider: calculateLeftPosition", () => {
  it("simple Slider without Histogram", () => {
    expect(calculateLeftPosition(1, 1, 24, true, true)).toEqual(0);
    expect(calculateLeftPosition(12, 1, 24, true, true)).toEqual(47.8);
    expect(calculateLeftPosition(12, 1, 24, false, true)).toEqual(50.0);
    expect(calculateLeftPosition(24, 1, 24, false, true)).toEqual(100.0);
  });
  it("simple Slider with Histogram or range Slider", () => {
    expect(calculateLeftPosition(1, 1, 24, true, false)).toEqual(0);
    expect(calculateLeftPosition(12, 1, 24, true, false)).toEqual(45.8);
    expect(calculateLeftPosition(12, 1, 24, false, false)).toEqual(50);
    expect(calculateLeftPosition(24, 1, 24, false, false)).toEqual(100.0);
  });
});

describe("Handle in Slider: isFirst", () => {
  it("simple Slider without Histogram", () => {
    expect(isFirst(1, 1, 0, false)).toBe(true);
    expect(isFirst(1, 12, 0, false)).toBe(true);
  });
  it("simple Slider with Histogram", () => {
    expect(isFirst(1, 1, 0, true)).toBe(false);
    expect(isFirst(1, 12, 0, true)).toBe(false);
  });
  it("range Slider with or without Histogram", () => {
    expect(isFirst([12, 24], 12, 0, false)).toBe(true);
    expect(isFirst([12, 24], 12, 1, true)).toBe(true);
    expect(isFirst([12, 12], 12, 0, true)).toBe(true);
    expect(isFirst([12, 12], 12, 1, false)).toBe(false);
  });
});
