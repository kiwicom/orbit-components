// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import AirportIllustration from "..";
import { SIZE_OPTIONS } from "../../primitives/IllustrationPrimitive/consts";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";
import defaultTheme from "../../defaultTheme";

const name = "BGYFastTrack";
const dataTest = "test";

describe(`AirportIllustration of ${name}`, () => {
  beforeEach(() => {
    render(
      <AirportIllustration
        size={SIZE_OPTIONS.EXTRASMALL}
        name={name}
        dataTest="test"
        spaceAfter={SPACINGS_AFTER.NORMAL}
      />,
    );
  });

  it("should have passed props", () => {
    expect(screen.getByRole("img")).toHaveAttribute("alt", name);
    expect(screen.getByRole("img")).toHaveAttribute("data-test", dataTest);
  });

  it("should render proper image", () => {
    expect(screen.getByRole("img").getAttribute("src")).toMatchInlineSnapshot(
      `"//images.kiwi.com/illustrations/0x90/BGYFastTrack-Q85.png"`,
    );
    expect(screen.getByRole("img").getAttribute("srcset")).toMatchInlineSnapshot(
      `"//images.kiwi.com/illustrations/0x180/BGYFastTrack-Q85.png 2x, //images.kiwi.com/illustrations/0x270/BGYFastTrack-Q85.png 3x"`,
    );
  });

  it("should have margin-bottom", () => {
    expect(getComputedStyle(screen.getByRole("img"))).toHaveProperty(
      "margin-bottom",
      defaultTheme.orbit.spaceSmall,
    );
  });
});
