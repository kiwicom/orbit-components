// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Seat from "..";
import { SIZE_OPTIONS, TYPES } from "../consts";

const height = {
  [SIZE_OPTIONS.SMALL]: "36px",
  [SIZE_OPTIONS.MEDIUM]: "46px",
};

const width = {
  [SIZE_OPTIONS.SMALL]: "32px",
  [SIZE_OPTIONS.MEDIUM]: "46px",
};

describe("Seat", () => {
  const dataTest = "test";
  const onClick = jest.fn();
  it("should have expected DOM output", () => {
    render(
      <Seat
        type={TYPES.DEFAULT}
        size={SIZE_OPTIONS.SMALL}
        title="kek"
        onClick={onClick}
        description="bur"
        dataTest={dataTest}
      />,
    );

    userEvent.click(screen.getByTestId(dataTest));
    expect(onClick).toHaveBeenCalled();
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByTitle("kek")).toBeInTheDocument();
    expect(screen.getByText("bur")).toBeInTheDocument();
  });

  it.each(Object.values(SIZE_OPTIONS))("it should have size %s", size => {
    render(<Seat size={size} dataTest="kek" />);
    expect(screen.getByTestId("kek")).toHaveStyle({ width: width[size], height: height[size] });
  });
});
