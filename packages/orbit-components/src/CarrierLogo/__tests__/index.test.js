// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import CarrierLogo from "..";
import { SIZE_OPTIONS } from "../consts";

describe("CarrierLogo", () => {
  it("default", () => {
    render(
      <CarrierLogo
        dataTest="test"
        carriers={[{ code: "FR", name: "Ryanair" }]}
        size={SIZE_OPTIONS.LARGE}
      />,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByAltText("Ryanair")).toBeInTheDocument();
    expect(screen.getByTitle("Ryanair")).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img.getAttribute("src")).toMatchInlineSnapshot(
      `"//images.kiwi.com/airlines/32x32/FR.png?default=airline.png"`,
    );
    expect(img.getAttribute("srcset")).toMatchInlineSnapshot(
      `"//images.kiwi.com/airlines/64x64/FR.png?default=airline.png 2x"`,
    );
  });

  it("fallback", () => {
    render(<CarrierLogo carriers={[{ code: "TO", name: "Transavia France", type: "bus" }]} />);
    const img = screen.getByRole("img");
    expect(img.getAttribute("src")).toMatchInlineSnapshot(
      `"//images.kiwi.com/airlines/32x32/TO.png?default=bus.png"`,
    );
    expect(img.getAttribute("srcset")).toMatchInlineSnapshot(
      `"//images.kiwi.com/airlines/64x64/TO.png?default=bus.png 2x"`,
    );
  });
});
