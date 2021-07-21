/**
 * @flow
 * @jest-environment node
 */
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

import Slide from "..";

describe("slide util", () => {
  describe("server-side", () => {
    it("should be expanded", () => {
      const sheet = new ServerStyleSheet();
      renderToStaticMarkup(
        // $FlowFixMe
        sheet.collectStyles(
          <Slide maxHeight={20} expanded>
            Expanded content
          </Slide>,
        ),
      );
      const styleTags = sheet.getStyleTags();
      expect(styleTags).toContain("max-height:20px");
    });
  });
});
