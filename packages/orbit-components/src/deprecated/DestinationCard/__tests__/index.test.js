// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DestinationCard from "..";

describe("DestinationCard", () => {
  it("should have expected DOM output", () => {
    const dataTest = "test";
    const departureCity = "Prague";
    const destinationCity = "Dubai";
    const destinationCountry = "United Arab Emirates";
    const image = "dubai_ae";
    const height = 500;
    const price = "5,563 Kč";
    const onClick = jest.fn();
    const outbound = { text: "One-way", type: "Direct", duration: "6h 10m" };

    render(
      <DestinationCard
        dataTest={dataTest}
        departureCity={departureCity}
        destinationCity={destinationCity}
        destinationCountry={destinationCountry}
        image={image}
        height={height}
        price={price}
        outbound={outbound}
        onClick={onClick}
      />,
    );

    expect(screen.getByTestId(dataTest)).toHaveStyle({ height: `${height}px` });
    screen.getByText(departureCity);
    screen.getByText(destinationCity);
    screen.getByText(destinationCountry);
    screen.getByText(price);

    userEvent.click(screen.getByTestId(dataTest));
    expect(onClick).toHaveBeenCalled();
  });
});
