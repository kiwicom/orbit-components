// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DestinationHeader from "..";

describe("DestinationHeader", () => {
  it("should have expected DOM output", () => {
    const destinationName = "Dubai";
    const image = "dubai_ae";
    const dataTest = "test";
    const goBack = jest.fn();

    render(
      <DestinationHeader
        destinationName={destinationName}
        image={image}
        goBack={goBack}
        dataTest={dataTest}
      />,
    );

    screen.getByTestId(dataTest);
    expect(screen.getAllByRole("img", { name: destinationName })).toHaveLength(2);
    userEvent.click(screen.getByRole("button", { name: "Back" }));
    expect(goBack).toHaveBeenCalled();
  });
});
