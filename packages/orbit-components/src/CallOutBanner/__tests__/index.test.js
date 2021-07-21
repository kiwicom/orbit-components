// @flow

import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CallOutBanner from "..";
import Illustration from "../../Illustration";

describe("CallOutBanner", () => {
  it("flat", () => {
    render(
      <CallOutBanner
        dataTest="test"
        title="title"
        description="description"
        tabIndex="0"
        illustration={
          <Illustration dataTest="illustration" name="Accommodation" size="extraSmall" />
        }
      />,
    );
    const banner = screen.getByTestId("test");
    expect(banner).toHaveAttribute("tabindex", "0");
    expect(banner.textContent).toMatch("title");
    expect(banner.textContent).toMatch("description");
    expect(screen.getByTestId("illustration"));
  });
  it("actionable", () => {
    const onClick = jest.fn();
    render(<CallOutBanner dataTest="test" title="title" onClick={onClick} />);
    const banner = screen.getByTestId("test");
    expect(banner).toHaveAttribute("tabindex", "0");
    userEvent.click(banner);
    expect(onClick).toHaveBeenCalled();
  });
});
