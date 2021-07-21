// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ListChoice from "..";
import Accommodation from "../../icons/Accommodation";

describe("ListChoice", () => {
  const title = "Choice Title";
  const dataTest = "test";
  const onClick = jest.fn();

  it("should have data-test", () => {
    render(<ListChoice title={title} dataTest={dataTest} />);
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
  });

  it("should render icon", () => {
    render(
      <ListChoice
        title={title}
        icon={<Accommodation ariaLabel="Accommodation" />}
        dataTest={dataTest}
      />,
    );
    const icon = screen.getByLabelText("Accommodation");
    expect(icon.tagName.toLowerCase()).toBe("svg");
  });

  it("should render title and description", () => {
    const description = "Further description";
    render(<ListChoice title={title} description={description} />);
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it("should render checkbox with checked false", () => {
    render(<ListChoice title={title} selectable />);
    expect(screen.getByRole("checkbox", { checked: false })).toBeInTheDocument();
  });

  it("should NOT execute onClick method", () => {
    render(<ListChoice title={title} disabled onClick={onClick} dataTest={dataTest} />);
    const component = screen.getByTestId(dataTest);
    userEvent.click(component);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("should execute onClick method", () => {
    render(<ListChoice title={title} onClick={onClick} dataTest={dataTest} />);
    const el = screen.getByTestId(dataTest);
    userEvent.click(el);
    expect(onClick).toHaveBeenCalled();
  });

  it("should have role button when not selectable", () => {
    render(<ListChoice title={title} onClick={onClick} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should have role checkbox when selectable", () => {
    render(<ListChoice title={title} selectable selected dataTest={dataTest} />);
    expect(screen.getByTestId(dataTest)).toHaveAttribute("role", "checkbox");
  });

  it("should have focus", () => {
    render(<ListChoice title={title} selectable dataTest={dataTest} />);
    userEvent.tab();
    expect(screen.getByTestId(dataTest)).toHaveFocus();
  });

  it("should not have focus", () => {
    render(<ListChoice title={title} disabled selectable dataTest={dataTest} />);
    userEvent.tab();
    expect(screen.getByTestId(dataTest)).not.toHaveFocus();
  });
});
