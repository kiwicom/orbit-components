// @flow

import validateIncrement from "..";

describe("ValidateIncrement", () => {
  it("Should be -9", () => {
    expect(validateIncrement({ value: -10, maxValue: 0, step: 1 })).toBe(-9);
  });

  it("should be 0", () => {
    expect(validateIncrement({ value: 1, maxValue: 0, step: 1 })).toBe(0);
  });

  it("should be 80", () => {
    expect(validateIncrement({ value: 100, maxValue: 80, step: 20 })).toBe(80);
  });

  it("should be 3.5", () => {
    expect(validateIncrement({ value: 2, maxValue: 4, step: 1.5 })).toBe(3.5);
  });

  it("should be 0 for negative numbers", () => {
    expect(validateIncrement({ value: -10, maxValue: 0, step: 1.5 })).toBe(-8.5);
  });
});
