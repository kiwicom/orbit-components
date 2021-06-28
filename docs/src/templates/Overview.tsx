import React from "react";
import { Grid } from "@kiwicom/orbit-components";

import DocLayout from "../components/DocLayout";
import Tile from "../components/Tile";

const Overview = ({ location, pageContext }) => {
  const { slug, title, pages } = pageContext;

  return (
    <DocLayout location={location} path={slug} title={title} noElevation>
      <Grid
        columns="1fr"
        gap="2rem"
        largeMobile={{ columns: "repeat(2, 1fr)" }}
        tablet={{ columns: "repeat(3, 1fr)" }}
      >
        {pages.map(({ title: pageTitle, description, slug: pageSlug }) => {
          return (
            <Tile key={pageSlug} title={pageTitle} href={pageSlug.split("/").slice(-1).join("/")}>
              {description}
            </Tile>
          );
        })}
      </Grid>
    </DocLayout>
  );
};

export default Overview;
