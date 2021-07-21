// @flow
import * as React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import useMediaQuery from "../../hooks/useMediaQuery";
import Pagination from "..";

jest.mock("../../hooks/useMediaQuery", () => jest.fn());

const useMediaQueryMock: JestMockFn<[], $Shape<$Call<typeof useMediaQuery>>> = useMediaQuery;

const breakpoints = {
  normal: { isTablet: true },
  compact: { isLargeMobile: true },
};

afterEach(() => {
  useMediaQueryMock.mockRestore();
});

describe("Pagination", () => {
  describe.each(Object.entries(breakpoints))("%s", (breakpoint, queryObject) => {
    it("should have expected DOM output", () => {
      const dataTest = "test";
      const pageCount = 9;
      const selectedPage = 3;
      const onPageChange = jest.fn();

      useMediaQueryMock.mockImplementation(() => queryObject);
      render(
        <Pagination
          dataTest={dataTest}
          pageCount={pageCount}
          selectedPage={selectedPage}
          onPageChange={onPageChange}
        />,
      );

      expect(screen.getByTestId(dataTest)).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "Next" }));
      expect(onPageChange).toHaveBeenCalled();
    });

    it("should have next button disabled", () => {
      useMediaQueryMock.mockImplementation(() => queryObject);
      render(
        <Pagination
          dataTest="test"
          hideLabels={false}
          pageCount={9}
          selectedPage={9}
          onPageChange={() => {}}
        />,
      );
      expect(screen.getByRole("button", { name: "Next" })).toBeDisabled();
    });

    it("should have first button disabled", () => {
      useMediaQueryMock.mockImplementation(() => queryObject);
      render(
        <Pagination
          dataTest="test"
          hideLabels={false}
          pageCount={6}
          selectedPage={1}
          onPageChange={() => {}}
        />,
      );
      expect(screen.getByRole("button", { name: "Previous" })).toBeDisabled();
    });
  });

  describe("normal", () => {
    it("should be able to hide labels", () => {
      useMediaQueryMock.mockImplementation(() => breakpoints.normal);
      render(<Pagination hideLabels pageCount={6} onPageChange={() => {}} />);
      expect(screen.getByRole("button", { name: "Previous" })).not.toHaveTextContent("Previous");
    });

    it("should be able to show labels", () => {
      useMediaQueryMock.mockImplementation(() => breakpoints.normal);
      render(<Pagination hideLabels={false} pageCount={6} onPageChange={() => {}} />);
      expect(screen.getByRole("button", { name: "Previous" })).toHaveTextContent("Previous");
    });
  });

  describe("compact", () => {
    it("should always hide labels", () => {
      useMediaQueryMock.mockImplementation(() => breakpoints.compact);
      render(<Pagination hideLabels={false} pageCount={6} onPageChange={() => {}} />);
      expect(screen.getByRole("button", { name: "Previous" })).not.toHaveTextContent("Previous");
    });
  });
});
