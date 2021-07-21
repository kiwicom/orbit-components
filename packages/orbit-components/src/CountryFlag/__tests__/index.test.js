// @flow
import * as React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import CountryFlag from "..";

describe("CountryFlag", () => {
  it("should have expected DOM output", () => {
    render(<CountryFlag code="anywhere" name="Anywhere" dataTest="test" />);
    const flag = screen.getByRole("img", { name: "Anywhere" });
    expect(flag).toHaveAttribute("src", expect.stringContaining("anywhere"));
    expect(flag).toHaveAttribute("srcset", expect.stringContaining("anywhere"));
    expect(screen.getByTitle("Anywhere")).toBeInTheDocument();
    expect(screen.getByAltText("Anywhere")).toBeInTheDocument();
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });
  it("should support omitting code and name", () => {
    let flag;
    render(<CountryFlag />);
    flag = screen.getByRole("img", { name: "Anywhere" });
    expect(flag).toHaveAttribute("src", expect.stringContaining("anywhere"));
    cleanup();
    render(<CountryFlag name="Country" />);
    flag = screen.getByRole("img", { name: "Country" });
    expect(flag).toHaveAttribute("src", expect.stringContaining("anywhere"));
    cleanup();
    render(<CountryFlag code="us" />);
    flag = screen.getByRole("img");
    expect(flag).toHaveAttribute("src", expect.stringContaining("us"));
    expect(flag).not.toHaveAttribute("alt");
    expect(flag).not.toHaveAttribute("title");
  });
  it("should warn and fallback on unknown code", () => {
    const consoleSpy = jest.spyOn(console, "warn").mockImplementation(() => {});
    render(<CountryFlag code="404" name="Country" />);
    const flag = screen.getByRole("img", { name: "Country" });
    expect(flag).toHaveAttribute("src", expect.stringContaining("anywhere"));
    expect(consoleSpy).toHaveBeenCalledWith("Country code not supported: 404");
    consoleSpy.mockRestore();
  });
  it("should support case insensitive code", () => {
    render(<CountryFlag code="US" />);
    const flag = screen.getByRole("img");
    expect(flag).toHaveAttribute("src", expect.stringContaining("us"));
  });
});
