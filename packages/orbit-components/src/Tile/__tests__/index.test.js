// @flow
import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import KEY_CODE_MAP from "../../common/keyMaps";
import theme from "../../defaultTheme";
import Tile from "..";
import Airplane from "../../icons/Airplane";

describe("Tile", () => {
  it("should have expected DOM output", () => {
    const dataTest = "test";
    const title = "title";
    const description = "description";
    const onClick = jest.fn();
    const htmlTitle = "title";

    render(
      <Tile
        dataTest={dataTest}
        icon={<Airplane />}
        title={title}
        description={description}
        onClick={onClick}
        htmlTitle={htmlTitle}
      >
        kek
      </Tile>,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByTitle(htmlTitle)).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveAttribute("tabindex", "0");
    expect(screen.getByText("kek")).toHaveStyle({ padding: "16px" });
    expect(screen.getByText("kek")).toHaveStyle({
      borderTop: `1px solid ${theme.orbit.paletteCloudNormal}`,
    });

    userEvent.click(screen.getByRole("button"));
    fireEvent.keyDown(screen.getByRole("button"), { keyCode: KEY_CODE_MAP.ENTER });
    fireEvent.keyDown(screen.getByRole("button"), { keyCode: KEY_CODE_MAP.SPACE });

    expect(onClick).toHaveBeenCalledTimes(3);
  });

  it("should be link", () => {
    render(<Tile href="#" external />);
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
  });

  it("should be expandable", () => {
    render(<Tile expandable initialExpanded />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded");
  });
});
