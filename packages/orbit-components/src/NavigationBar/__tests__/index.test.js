// @flow
import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NavigationBar from "..";

describe("NavigationBar", () => {
  it("should have expected DOM output", () => {
    const onMenuOpen = jest.fn();
    const children = "Content";
    const dataTest = "test";
    render(
      <NavigationBar onMenuOpen={onMenuOpen} dataTest={dataTest}>
        {children}
      </NavigationBar>,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByText(children)).toBeInTheDocument();
    userEvent.click(screen.getByRole("button"));
    expect(onMenuOpen).toHaveBeenCalled();
  });

  it("should disappear on scoll", () => {
    render(<NavigationBar dataTest="bur">kek</NavigationBar>);
    expect(screen.getByTestId("bur")).toHaveStyle({ transform: "translate3d(0,0,0)" });
    fireEvent.scroll(window, { target: { scrollY: 120 } });
    expect(screen.getByTestId("bur")).toHaveStyle({ transform: "translate3d(0,-52px,0)" });
  });
});
