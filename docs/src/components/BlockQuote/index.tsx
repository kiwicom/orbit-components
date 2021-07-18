import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  ${({ theme }) => `
    padding: ${theme.orbit.spaceFourX} 0;
    background-color: ${theme.orbit.paletteCloudLight};
    border-radius: ${theme.orbit.spaceFourX};
  `};
`;

const StyledContent = styled.div`
  ${({ theme }) => `
    padding: ${theme.orbit.spaceTwoX} ${theme.orbit.spaceSixX} ${theme.orbit.spaceTwoX}
      ${theme.orbit.spaceFourX};
    border-left: 4px solid ${theme.orbit.paletteInkLight};
    font-style: italic;
    font-weight: 500;

    blockquote > * + *,
    figcaption {
      margin-top: ${theme.orbit.spaceTwoX};
    }
  `};
`;

const StyledAuthor = styled.p`
  ${({ theme }) => `
    color: ${theme.orbit.paletteInkLight}
  `}
`;

interface Props {
  children: React.ReactNode;
}

export default function BlockQuote({ children }: Props) {
  const lastChild = React.Children.toArray(children)[React.Children.count(children) - 1];

  // if quote ends with author
  if (
    React.isValidElement(lastChild) &&
    typeof lastChild.props.children === "string" &&
    lastChild.props.children.startsWith("—")
  ) {
    return (
      <StyledWrapper>
        <StyledContent>
          <figure>
            <blockquote>
              {React.Children.map(
                children,
                (child, index) => index < React.Children.count(children) - 1 && child,
              )}
            </blockquote>
            <figcaption>
              <StyledAuthor>{lastChild.props.children}</StyledAuthor>
            </figcaption>
          </figure>
        </StyledContent>
      </StyledWrapper>
    );
  }

  return (
    <StyledWrapper>
      <StyledContent>
        <blockquote>{children}</blockquote>
      </StyledContent>
    </StyledWrapper>
  );
}
