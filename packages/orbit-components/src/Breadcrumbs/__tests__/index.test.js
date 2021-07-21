// @flow
/* eslint-disable no-restricted-syntax */

import * as React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Breadcrumbs from "..";
import BreadcrumbsItem from "../BreadcrumbsItem";

// jsdom doesn't support @media queries, so for <Hide> the computed value of
// "display" is "none", which @testing-library/react (impressively) detects as
// inaccessible, so we're replacing <Hide> with a dummy component
jest.mock("../../Hide", () => ({ children }) => children);

describe("#Breadcrumbs", () => {
  const dataTest = "test";
  const onGoBack = jest.fn();
  beforeEach(() => {
    render(
      <Breadcrumbs dataTest={dataTest} onGoBack={onGoBack}>
        <BreadcrumbsItem href="https://kiwi.com">Kiwi.com</BreadcrumbsItem>
      </Breadcrumbs>,
    );
  });
  afterEach(() => {
    onGoBack.mockClear();
  });
  it("nav should contain label, role and data-test", () => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByLabelText("Breadcrumb")).toBeInTheDocument();
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
  });

  it("ol should contain correct item type", () => {
    expect(screen.getByRole("list")).toHaveAttribute(
      "itemType",
      expect.stringContaining("BreadcrumbList"),
    );
  });

  it("children should contain active and contentKey", () => {
    expect(screen.getByRole("listitem")).toHaveAttribute("aria-current", "page");
    expect(document.querySelector("meta")).toHaveAttribute("content", "1");
  });
  it("should execute onGoBack", () => {
    for (const backBtn of screen.getAllByRole("button", { name: "Back" })) {
      userEvent.click(backBtn);
    }

    expect(onGoBack).toHaveBeenCalledTimes(2);
  });

  it("should render as a link when backHref is passed", () => {
    render(
      <Breadcrumbs backHref="https://orbit.kiwi" dataTest={dataTest} onGoBack={onGoBack}>
        <BreadcrumbsItem href="https://kiwi.com">Kiwi.com</BreadcrumbsItem>
      </Breadcrumbs>,
    );

    for (const backLink of screen.getAllByRole("link", { name: "Back" })) {
      expect(backLink).toHaveAttribute("href", "https://orbit.kiwi");
    }
  });

  it("should render as a link when backHref is passed without onGoBack", () => {
    render(
      <Breadcrumbs backHref="https://orbit.kiwi" dataTest={dataTest}>
        <BreadcrumbsItem href="https://kiwi.com">Kiwi.com</BreadcrumbsItem>
      </Breadcrumbs>,
    );

    for (const backLink of screen.getAllByRole("link", { name: "Back" })) {
      expect(backLink).toHaveAttribute("href", "https://orbit.kiwi");
    }
  });
});

describe("Breadcrumbs", () => {
  const onClick = jest.fn();
  const url = "https://kiwi.com";
  const title = "Kiwi.com";
  const dataTest = "test";
  const id = "id";
  beforeEach(() => {
    render(
      <BreadcrumbsItem
        id={id}
        href={url}
        onClick={onClick}
        dataTest={dataTest}
        active
        contentKey={2}
      >
        {title}
      </BreadcrumbsItem>,
    );
  });
  it("li contains props", () => {
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByRole("listitem")).toHaveAttribute("itemprop", "itemListElement");
    expect(screen.getByRole("listitem")).toHaveAttribute(
      "itemtype",
      expect.stringContaining("ListItem"),
    );
    expect(screen.getByRole("listitem")).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link")).toHaveAttribute("itemid", id);
  });
  it("anchor contains props", () => {
    expect(screen.getByRole("link")).toHaveAttribute("href", url);
    expect(screen.getByRole("link")).toHaveAttribute("itemprop", "item");
    expect(screen.getByRole("link")).toHaveAttribute(
      "itemtype",
      expect.stringContaining("WebPage"),
    );
    expect(screen.getByText(title)).toHaveAttribute("itemprop", "name");
  });
  it("meta contains props", () => {
    expect(document.querySelector("meta")).toHaveAttribute("itemprop", "position");
    expect(document.querySelector("meta")).toHaveAttribute("content", "2");
  });
  it("itemid defaults to href when no id attribute", () => {
    cleanup();
    render(
      <BreadcrumbsItem href={url} onClick={onClick} dataTest={dataTest} active contentKey={2}>
        {title}
      </BreadcrumbsItem>,
    );

    expect(screen.getByRole("link")).toHaveAttribute("itemid", url);
  });
});
