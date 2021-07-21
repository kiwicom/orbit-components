// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import * as SmartPassIllustrations from "..";

describe("SmartPassIllustration", () => {
  it.each(Object.entries(SmartPassIllustrations))(
    "should have expected DOM output %s",
    (name, Illustration) => {
      const title = "SmartPass title";
      const description = "SmartPass description";
      const dataTest = "test";
      const ariaLabelledby = "aria-labeled";

      render(
        <Illustration
          dataTest={dataTest}
          title={title}
          description={description}
          ariaLabelledby={ariaLabelledby}
        />,
      );

      expect(screen.getByTestId(dataTest)).toBeInTheDocument();
      expect(screen.getByText(description)).toBeInTheDocument();
      expect(screen.getByTitle(title)).toBeInTheDocument();
      expect(screen.getByRole("img")).toHaveAttribute("aria-labelledby", "aria-labeled");
    },
  );
});
