// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import Illustration from "..";
import { SIZE_OPTIONS } from "../../primitives/IllustrationPrimitive/consts";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

describe("Illustration", () => {
  it("should have expected DOM output", () => {
    render(
      <Illustration
        size={SIZE_OPTIONS.EXTRASMALL}
        name="Accommodation"
        dataTest="test"
        spaceAfter={SPACINGS_AFTER.NORMAL}
      />,
    );
    expect(screen.getByTestId("test"));
    const img = screen.getByRole("img", { name: "Accommodation" });
    expect(img.getAttribute("src")).toMatchInlineSnapshot(
      `"//images.kiwi.com/illustrations/0x90/Accommodation-Q85.png"`,
    );
    expect(img.getAttribute("srcset")).toMatchInlineSnapshot(
      `"//images.kiwi.com/illustrations/0x180/Accommodation-Q85.png 2x, //images.kiwi.com/illustrations/0x270/Accommodation-Q85.png 3x"`,
    );
  });
});
