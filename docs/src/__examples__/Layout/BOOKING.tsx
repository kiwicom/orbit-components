import * as React from "react";
import { Layout, LayoutColumn, Text } from "@kiwicom/orbit-components";
import { css } from "styled-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

export default {
  Example: () => {
    const divStyle = css`
      minHeight: ${defaultTheme.orbit.heightIllustrationMedium},
      background: ${defaultTheme.orbit.backgroundBody},
    `;

    return (
      <Layout type="Booking">
        <LayoutColumn>
          <div css={divStyle}>
            <Text>This column is designed for the main content.</Text>
          </div>
        </LayoutColumn>
        <LayoutColumn>
          <div css={divStyle}>
            <Text>
              This column is designed for summaries. It appears on the right on <code>tablet</code>{" "}
              and wider screens. On <code>largeMobile</code> and smaller screens, it appears below
              the first column.
            </Text>
          </div>
        </LayoutColumn>
      </Layout>
    );
  },
  info: {
    title: "Booking layout",
    description:
      "The Booking layout is a two-column layout on larger screens. On smaller screens, the second column is placed underneath the first.",
  },
};
