// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import FeatureIcon from "..";
import { NAME_OPTIONS } from "../consts";

const name = NAME_OPTIONS.TICKETSAVER;

describe(`FeatureIcon: ${name}`, () => {
  describe(name, () => {
    it("should have expected DOM output", () => {
      render(<FeatureIcon alt="alt-test" name={name} dataTest="test" />);
      expect(screen.getByAltText("alt-test"));
      const img = screen.getByRole("img");
      expect(img.getAttribute("src")).toMatchInlineSnapshot(
        `"//images.kiwi.com/feature-icons/52x52/TicketSaver.png"`,
      );
      expect(img.getAttribute("srcset")).toMatchInlineSnapshot(
        `"//images.kiwi.com/feature-icons/104x104/TicketSaver.png 2x,//images.kiwi.com/feature-icons/156x156/TicketSaver.png 3x"`,
      );
    });
  });
});
