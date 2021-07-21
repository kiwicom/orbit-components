// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import TileGroup from "..";
import Tile from "../../Tile";

describe("Tile clickable", () => {
  it("should have expected DOM output", () => {
    const dataTest = "test";
    render(
      <TileGroup dataTest={dataTest}>
        <Tile title="title" onClick={() => {}}>
          kek
        </Tile>
        <Tile title="title" onClick={() => {}}>
          kek
        </Tile>
      </TileGroup>,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getAllByText("kek")).toHaveLength(2);
  });
});
