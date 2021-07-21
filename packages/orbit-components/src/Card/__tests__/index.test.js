// @flow

import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Card, { CardSection } from "..";
import Button from "../../Button";
import { Airplane } from "../../icons";

describe("Card", () => {
  it("default", () => {
    render(
      <Card
        dataTest="test"
        title="kek"
        description="description"
        icon={<Airplane dataTest="airplane" />}
        actions={<Button>button</Button>}
      />,
    );
    expect(screen.getByTestId("test"));
    expect(screen.getByText("kek")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
    expect(screen.getByTestId("airplane"));
    expect(screen.getByRole("button"));
  });

  it("section", () => {
    render(
      <Card>
        <CardSection
          dataTest="test"
          title="kek"
          description="description"
          icon={<Airplane dataTest="airplane" />}
          actions={<Button>action</Button>}
          expandable
          expanded
        >
          section
        </CardSection>
      </Card>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("kek")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
    expect(screen.getByTestId("airplane")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "action" })).toBeInTheDocument();
    expect(screen.getByText("section")).toBeInTheDocument();
  });

  it("loading", () => {
    render(
      <Card loading>
        <CardSection>section</CardSection>
      </Card>,
    );
    expect(screen.queryByText("section")).not.toBeInTheDocument();
  });

  it("should be clickable", () => {
    const onClick = jest.fn();

    render(
      <Card>
        <CardSection title="kek" onClick={onClick} />
      </Card>,
    );

    userEvent.click(screen.getByText("kek"));
    expect(onClick).toHaveBeenCalled();
  });

  describe("expandable", () => {
    it("controlled", () => {
      const { rerender } = render(
        <Card>
          <CardSection title="kek" expandable expanded={false}>
            expandable
          </CardSection>
        </Card>,
      );
      const content = document.querySelector("[aria-hidden]");
      expect(content).toHaveAttribute("aria-hidden", "true");
      userEvent.click(screen.getByText("kek"));
      expect(content).toHaveAttribute("aria-hidden", "true");
      rerender(
        <Card>
          <CardSection title="kek" expandable expanded>
            expandable
          </CardSection>
        </Card>,
      );
      expect(content).toHaveAttribute("aria-hidden", "false");
      userEvent.click(screen.getByText("kek"));
      expect(content).toHaveAttribute("aria-hidden", "false");
    });

    it("uncontrolled", () => {
      render(
        <Card>
          <CardSection title="kek" expandable>
            expandable
          </CardSection>
        </Card>,
      );
      const content = document.querySelector("[aria-hidden]");
      expect(content).toHaveAttribute("aria-hidden", "true");
      userEvent.click(screen.getByText("kek"));
      expect(content).toHaveAttribute("aria-hidden", "false");
    });
  });
});
