// @flow

import * as React from "react";
import { render, screen } from "@testing-library/react";

import theme from "../../defaultTheme";
import NotificationBadge from "..";
import Sightseeing from "../../icons/Sightseeing";

describe("NotificationBadge", () => {
  const content = "badge";
  const type = "info";
  const dataTest = "test";
  const ariaLabel = content;

  render(
    <NotificationBadge type={type} dataTest={dataTest} ariaLabel={ariaLabel}>
      {content}
    </NotificationBadge>,
  );

  it("should have expected DOM output", () => {
    expect(screen.getByLabelText(ariaLabel)).toBeInTheDocument();
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
    expect(screen.getByTestId(dataTest)).toHaveStyle({
      background: theme.orbit.paletteBlueLight,
    });
  });

  it("should have icon", () => {
    render(<NotificationBadge icon={<Sightseeing dataTest="icon" />} />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
