// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Tag from "..";

describe("Tag", () => {
  it("should have expected DOM output", () => {
    const content = "Brno";
    const dataTest = "test";
    const onRemove = jest.fn();
    const onClick = jest.fn();

    render(
      <Tag selected dataTest={dataTest} onRemove={onRemove} onClick={onClick}>
        {content}
      </Tag>,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    const tag = screen.getByRole("button", { name: content });
    userEvent.click(tag);
    expect(onClick).toHaveBeenCalled();
    userEvent.click(screen.getByRole("button", { name: "close" }));
    expect(onRemove).toHaveBeenCalled();
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
