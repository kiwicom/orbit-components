// @flow

import * as React from "react";
import { render, fireEvent } from "@testing-library/react";

import Bar, { calculateBarPosition } from "..";

describe("Slider/Bar", () => {
  it("should have exptected DOM output", () => {
    const ref = React.createRef();
    const onMouseDown = jest.fn();
    const value = [1, 12];
    const min = 1;
    const max = 24;
    const { container } = render(
      <Bar onMouseDown={onMouseDown} value={value} min={min} ref={ref} max={max} hasHistogram />,
    );

    expect(ref.current).toBeDefined();
    // $FlowFixMe
    fireEvent.mouseDown(container.firstChild, { pageX: 100 });
    expect(onMouseDown).toHaveBeenCalled();
  });
});

describe("Bar in Slider: calculateBarPosition", () => {
  it("simple Slider without Histogram, should return proper left and width", () => {
    expect(calculateBarPosition(24, 24, 1, false)).toEqual({ left: 0, width: 100.0 });
    expect(calculateBarPosition(1, 24, 1, false)).toEqual({ left: 0, width: 0 });
    expect(calculateBarPosition(6, 24, 1, false)).toEqual({ left: 0, width: 21.7 });
  });
  it("simple Slider with Histogram, should return proper left and width", () => {
    expect(calculateBarPosition(12, 12, 1, true)).toEqual({ left: 0, width: 100.0 });
    expect(calculateBarPosition(1, 12, 1, true)).toEqual({ left: 0, width: 8.3 });
    expect(calculateBarPosition(6, 12, 1, true)).toEqual({ left: 0, width: 50.0 });
  });
  it("range Slider, should return proper left and width", () => {
    expect(calculateBarPosition([1, 24], 24, 1, true)).toEqual({ left: 0, width: 100.0 });
    expect(calculateBarPosition([12, 24], 24, 1, true)).toEqual({ left: 45.8, width: 54.2 });
    expect(calculateBarPosition([6, 24], 24, 1, true)).toEqual({ left: 20.8, width: 79.2 });
    expect(calculateBarPosition([1, 1], 24, 1, true)).toEqual({ left: 0, width: 4.2 });
  });
});
