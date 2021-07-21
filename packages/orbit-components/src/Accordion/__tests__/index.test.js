// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import Accordion, { AccordionSection } from "..";

describe(`Accordion`, () => {
  const expandedSection = "0X1";
  const dataTest = "Accordion";
  const sectionDataTest = "AccordionSection";
  const onExpand = jest.fn();

  it("should have passed props", () => {
    render(
      <Accordion expandedSection={expandedSection} onExpand={onExpand} dataTest={dataTest}>
        <AccordionSection id="0X1" dataTest={sectionDataTest}>
          Section
        </AccordionSection>
      </Accordion>,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByTestId(sectionDataTest)).toBeInTheDocument();
  });

  it("should render loading", () => {
    render(
      <Accordion loading>
        <AccordionSection dataTest={sectionDataTest} />
      </Accordion>,
    );

    expect(screen.getByTestId(`${sectionDataTest}Loading`)).toBeInTheDocument();
  });

  describe(`AccordionSection`, () => {
    it("should render passed components", () => {
      render(
        <AccordionSection
          id="0X1"
          header="Header"
          footer="Footer"
          actions="Actions"
          dataTest={sectionDataTest}
        >
          Section
        </AccordionSection>,
      );

      expect(screen.getByTestId(`${sectionDataTest}Header`)).toBeInTheDocument();
      expect(screen.getByTestId(`${sectionDataTest}Content`)).toBeInTheDocument();
      expect(screen.getByTestId(`${sectionDataTest}Footer`)).toBeInTheDocument();
    });
  });
});
