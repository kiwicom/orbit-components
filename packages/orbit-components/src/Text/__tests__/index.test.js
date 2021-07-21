// @flow
import * as React from "react";
import { screen, render } from "@testing-library/react";

import Text from "..";
import { SIZE_OPTIONS, TYPE_OPTIONS } from "../consts";
import defaultTheme from "../../defaultTheme";

describe("Text", () => {
  it("should have expected DOM output", () => {
    const dataTest = "test";
    const text = "Children text";
    const type = TYPE_OPTIONS.PRIMARY;
    const size = SIZE_OPTIONS.SMALL;
    const id = "id";

    render(
      <Text dataTest={dataTest} type={type} size={size} id={id} spaceAfter="normal">
        {text}
      </Text>,
    );

    expect(screen.getByTestId(dataTest)).toHaveAttribute("id", id);
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByTestId(dataTest)).toHaveStyle({
      fontSize: defaultTheme.orbit.fontSizeTextSmall,
      color: defaultTheme.orbit.colorTextPrimary,
      marginBottom: defaultTheme.orbit.spaceSmall,
    });
  });
});
