// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import theme from "../../defaultTheme";
import Separator from "..";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

describe("Separator", () => {
  it("should have expected DOM output", () => {
    const spaceAfter = SPACINGS_AFTER.LARGE;
    render(<Separator spaceAfter={spaceAfter} />);
    expect(screen.getByRole("separator")).toBeInTheDocument();
    expect(screen.getByRole("separator")).toHaveStyle({
      height: theme.orbit.heightSeparator,
      background: theme.orbit.backgroundSeparator,
      marginBottom: theme.orbit.spaceLarge,
    });
  });
});
