// @flow

import validateDecrement from "..";

describe("ValidateDecrement", () => {
  it("Should be 0", () => {
    expect(validateDecrement({ value: 1, minValue: 0, step: 1 })).toBe(0);
    expect(validateDecrement({ value: -10, minValue: 0, step: 1.5 })).toBe(0);
  });

  it("Should be 1", () => {
    expect(validateDecrement({ value: 1, minValue: 1, step: 1 })).toBe(1);
  });

  it("Should be 80", () => {
    expect(validateDecrement({ value: 100, minValue: 80, step: 20 })).toBe(80);
  });

  it("Should be 0.5", () => {
    expect(validateDecrement({ value: 2, minValue: 0, step: 1.5 })).toBe(0.5);
  });

  it("Should be -11", () => {
    expect(validateDecrement({ value: -10, minValue: -100, step: 1 })).toBe(-11);
  });
});
