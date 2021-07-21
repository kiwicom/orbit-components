// @flow

import * as React from "react";
import { render, screen } from "@testing-library/react";

import RatingStars from "..";
import { ICON_COLORS, ICON_SIZES } from "../../Icon/consts";

describe("RatingStars", () => {
  it("should have expected DOM output", () => {
    const dataTest = "test";
    const rating = 2.4;
    const color = ICON_COLORS.SECONDARY;
    const size = ICON_SIZES.LARGE;

    render(<RatingStars rating={rating} size={size} color={color} dataTest={dataTest} />);

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByLabelText("Rating 2 out of 2")).toBeInTheDocument();
  });

  it("should show empty stars", () => {
    render(<RatingStars rating={2.4} showEmpty />);
    expect(screen.getByLabelText("Rating 2 out of 5")).toBeInTheDocument();
  });
});
