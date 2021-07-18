import React from "react";
import { Link } from "gatsby";
import { Text } from "@kiwicom/orbit-components";
import { StarEmpty } from "@kiwicom/orbit-components/icons";
import styled from "styled-components";

import { useBookmarks } from "../../services/bookmarks";

const StyledLink = styled(Link)`
  cursor: pointer;
  color: ${({ theme }) => theme.orbit.textSecondaryForeground};
  &:hover {
    color: ${({ theme }) => theme.orbit.textLinkPrimaryForeground};
  }
`;

const StarIcon = styled(StarEmpty)`
  display: inline;
  vertical-align: -0.2em;
`;

const StyledNowrap = styled.span`
  white-space: nowrap;
`;

const Bookmarks = () => {
  const { bookmarks } = useBookmarks();

  return bookmarks && Object.keys(bookmarks).length > 0 ? (
    <>
      {Object.entries(bookmarks).map(
        ([key, slug]) =>
          slug && (
            <StyledLink key={key} to={slug}>
              {String(slug)
                .split("/")
                .filter(Boolean)
                .map(s => s[0].toUpperCase().concat(s.slice(1)))
                .join(" / ")}
            </StyledLink>
          ),
      )}
    </>
  ) : (
    <Text type="secondary">
      No bookmarks yet. You can can bookmark pages by clicking on{" "}
      <StyledNowrap>
        &ldquo;
        <StarIcon size="small" />
        &rdquo;
      </StyledNowrap>{" "}
      next to the page title.
    </Text>
  );
};

export default Bookmarks;
