import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Alert, Text } from "@kiwicom/orbit-components";

import Contributor from "./Contributor";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  grid-gap: ${({ theme }) => theme.orbit.spaceTwoX};
`;

export interface Contributor {
  name?: string;
  id?: string;
  avatar_url?: string;
  bio?: string;
  blog?: string;
  twitter_username?: string;
  html_url?: string;
}

const ContributorsComponent = () => {
  const { allContributor } = useStaticQuery(
    graphql`
      query CollaboratorsQuery {
        allContributor {
          nodes {
            id
            avatar_url
            bio
            html_url
            blog
            twitter_username
            name
            url
          }
        }
      }
    `,
  );

  const githubDocs = (
    <a
      href="https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token"
      aria-label="creating-a-personal-access-token"
    >
      Please create one
    </a>
  );

  return allContributor.nodes && allContributor.nodes.length > 0 ? (
    <Grid>
      {allContributor.nodes.map(({ id, ...info }) => (
        <Contributor key={id} id={id} {...info} />
      ))}
    </Grid>
  ) : (
    <Alert type="warning">
      <Text>
        Contributors component is not shown, because you are missing github personal access token
        {githubDocs}
        Check the terminal where you started the site for more details.
      </Text>
    </Alert>
  );
};

export default ContributorsComponent;
