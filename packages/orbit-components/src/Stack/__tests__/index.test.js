// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import Stack from "..";
import theme from "../../defaultTheme";
import InputField from "../../InputField";
import Button from "../../Button";
import { DIRECTIONS, SPACINGS } from "../../utils/layout/consts";
import { QUERIES } from "../../utils/mediaQuery/consts";
import getSpacing from "../helpers/getSpacing";

describe("Stack", () => {
  it("should have expected DOM output", () => {
    const dataTest = "test";

    render(
      <Stack flex dataTest={dataTest}>
        <InputField type="password" label="Password" help="You need some help!" />
        <Button>Sign In</Button>
      </Stack>,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign In" })).toBeInTheDocument();
    expect(screen.getByTestId(dataTest)).toHaveStyle({
      marginRight: "16px!important",
      width: "100%",
      flexDirection: "row",
      flexWrap: "nowrap",
      flexShrink: "0",
      flexGrow: "1",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    });
    expect(screen.getByTestId(dataTest)).toHaveStyleRule("margin", "0 !important", {
      modifier: "& > *:last-child",
    });
  });

  it("should be inline", () => {
    render(
      <Stack inline dataTest="test">
        <div>kek</div>
        <div>bur</div>
      </Stack>,
    );

    expect(screen.getByTestId("test")).toHaveStyle({ display: "inline-flex" });
  });

  it("should turn off grow", () => {
    render(
      <Stack grow={false} dataTest="test">
        <div>kek</div>
        <div>bur</div>
      </Stack>,
    );

    expect(screen.getByTestId("test")).toHaveStyle({ flexGrow: "" });
  });

  it("should turn on shrink", () => {
    render(
      <Stack shrink dataTest="test">
        <div>kek</div>
        <div>bur</div>
      </Stack>,
    );

    expect(screen.getByTestId("test")).toHaveStyle({ flexShrink: 1 });
  });

  it.each(Object.entries(DIRECTIONS))("should have direction %s", (name, direction) => {
    render(
      <Stack flex direction={direction} dataTest="test">
        <div>kek</div>
        <div>bur</div>
      </Stack>,
    );

    expect(screen.getByTestId("test")).toHaveStyle({ flexDirection: direction });
  });

  it.each([
    ["start", "flex-start"],
    ["end", "flex-end"],
    ["between", "space-between"],
    ["center", "center"],
    ["around", "space-around"],
  ])("should change justify %s", (justify, expected) => {
    render(
      <Stack flex justify={justify} dataTest="test">
        <div>kek</div>
        <div>bur</div>
      </Stack>,
    );

    expect(screen.getByTestId("test")).toHaveStyleRule("justify-content", expected);
  });

  it.each([
    ["start", "flex-start"],
    ["end", "flex-end"],
    ["center", "center"],
    ["stretch", "stretch"],
    ["baseline", "baseline"],
  ])("should change align %s", (align, expected) => {
    render(
      <Stack flex align={align} direction="column" dataTest="test">
        <div>kek</div>
        <div>bur</div>
      </Stack>,
    );

    expect(screen.getByTestId("test")).toHaveStyle({ alignItems: expected });
  });

  Object.entries(SPACINGS).forEach(([name, spacing]) => {
    it(`should change spacing ${name}`, () => {
      render(
        // $FlowIssue: mixed
        <Stack flex spacing={spacing} dataTest="test">
          <div>kek</div>
          <div>bur</div>
        </Stack>,
      );

      expect(screen.getByTestId("test")).toHaveStyle({
        // $FlowIssue: mixed
        marginRight: `${getSpacing({ theme })[spacing]}!important`,
      });
    });
  });
});

describe("Stack with every media query", () => {
  it.each(Object.entries(QUERIES))("should have styles for each mediaquery: %s", (name, query) => {
    const dataTest = `${query}-test`;

    render(
      <Stack
        dataTest={dataTest}
        direction={DIRECTIONS.ROW}
        spacing={SPACINGS.NONE}
        mediumMobile={{ spacing: SPACINGS.XXSMALL }}
        largeMobile={{ spacing: SPACINGS.XSMALL }}
        tablet={{ spacing: SPACINGS.SMALL }}
        desktop={{ spacing: SPACINGS.MEDIUM }}
        largeDesktop={{ spacing: SPACINGS.LARGE }}
      >
        <InputField type="password" label="Password" help="You need some help!" />
        <Button>Sign In</Button>
      </Stack>,
    );

    const expected = {
      mediumMobile: `${theme.orbit.spaceXXSmall}!important`,
      largeMobile: `${theme.orbit.spaceXSmall}!important`,
      tablet: `${theme.orbit.spaceSmall}!important`,
      desktop: `${theme.orbit.spaceMedium}!important`,
      largeDesktop: `${theme.orbit.spaceLarge}!important`,
    };

    expect(screen.getByTestId(dataTest)).toHaveStyle({ marginRight: expected[query] });
  });
});
