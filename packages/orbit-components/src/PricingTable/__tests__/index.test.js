// @flow

import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import useMediaQuery from "../../hooks/useMediaQuery";
import Button from "../../Button";
import Badge from "../../Badge";
import PricingTableItem from "../PricingTableItem";
import PricingTable from "..";

jest.mock("../../hooks/useMediaQuery", () => jest.fn());
const useMediaQueryMock: JestMockFn<[], $Shape<$Call<typeof useMediaQuery>>> = useMediaQuery;

afterEach(() => {
  useMediaQueryMock.mockRestore();
});

describe("PricingTableItem", () => {
  it("should have expected DOM output", () => {
    useMediaQueryMock.mockImplementation(() => ({ isDesktop: false }));

    const onClick = jest.fn();
    const dataTest = "test";
    const name = "name";
    const price = "$749";
    const actions = <Button>Buy</Button>;
    const content = "content";
    const image = <img alt="" />;
    const badge = <Badge>Badge</Badge>;

    render(
      <PricingTable activeElement={0}>
        <PricingTableItem
          dataTest={dataTest}
          name={name}
          featureIcon={image}
          action={actions}
          active
          compact
          price={price}
          priceBadge={badge}
          onClick={onClick}
        >
          {content}
        </PricingTableItem>
        <PricingTableItem dataTest="non-active" name="non-active-name" price="$800">
          bur
        </PricingTableItem>
      </PricingTable>,
    );

    // active element
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(price)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    userEvent.click(screen.getByTestId(dataTest));
    expect(onClick).toHaveBeenCalled();
    expect(screen.getByTestId(dataTest)).toContainElement(
      screen.getByRole("radio", { checked: true }),
    );
    expect(screen.getByRole("button", { name: "Buy" })).toBeInTheDocument();
    expect(screen.getByText("Badge")).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
    expect(screen.queryByText("bur")).not.toBeInTheDocument();
  });

  it("should have mobile description", () => {
    useMediaQueryMock.mockImplementation(() => ({ isDesktop: false }));
    render(
      <PricingTable activeElement={0}>
        <PricingTableItem mobileDescription="bur">kek</PricingTableItem>
      </PricingTable>,
    );

    expect(screen.getByText("bur")).toBeInTheDocument();
  });

  it("should have radio button on desktop", () => {
    useMediaQueryMock.mockImplementation(() => ({ isDesktop: true }));

    render(
      <PricingTable desktopRadio>
        <PricingTableItem dataTest="first" active>
          kek
        </PricingTableItem>
      </PricingTable>,
    );

    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  it("should have desktop variation of PricingTableItem", () => {
    useMediaQueryMock.mockImplementation(() => ({ isDesktop: true }));

    render(
      <PricingTable activeElement={0} dataTest="test">
        <PricingTableItem dataTest="tableItem">bur</PricingTableItem>
      </PricingTable>,
    );

    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByTestId("tableItem")).toBeInTheDocument();
    expect(screen.getByText("bur")).toBeInTheDocument();
    expect(screen.queryByRole("radio")).not.toBeInTheDocument();
  });
});
