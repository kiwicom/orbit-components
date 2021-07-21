// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Tile from "..";
import Airplane from "../../../icons/Airplane";

describe("Deprecated Tile Default", () => {
  it("should have expected DOM output", () => {
    const title = "Tile title";
    const description = "Description";
    const href = "https://www.kiwi.com/";
    const external = true;
    const dataTest = "test";

    render(
      <Tile
        icon={<Airplane dataTest="icon" />}
        title={title}
        description={description}
        href={href}
        external={external}
        dataTest={dataTest}
      />,
    );

    screen.getByTestId(dataTest);
    screen.getByTestId("icon");
    screen.getByText(title);
    screen.getByText(description);

    expect(screen.getByRole("link")).toHaveAttribute("href", href);
    expect(screen.getByRole("link")).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should render as a button", () => {
    render(<Tile />);
    expect(screen.getByRole("button")).toHaveAttribute("tabindex", "0");
  });

  it("should expand and collapse", () => {
    const onClick = jest.fn();
    render(
      <Tile title="title" onClick={onClick}>
        content
      </Tile>,
    );

    expect(screen.getByText("content")).not.toBeVisible();
    userEvent.type(screen.getByRole("button"), "{enter}");
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(screen.getByText("content")).toBeVisible();
    userEvent.type(screen.getByRole("button"), "{space}");
    expect(onClick).toHaveBeenCalledTimes(2);
    userEvent.click(screen.getByText("title"));
    expect(onClick).toHaveBeenCalledTimes(3);
  });
});
