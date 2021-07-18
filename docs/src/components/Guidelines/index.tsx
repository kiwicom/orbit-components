import React from "react";
import styled, { css } from "styled-components";
import { CheckCircle, CloseCircle } from "@kiwicom/orbit-components/icons";
import { Stack, Text, Heading } from "@kiwicom/orbit-components";
import { imageWrapperClass } from "gatsby-remark-images/constants";

import HeadingWithLink from "../HeadingWithLink";
import { slugify } from "../../utils/common";

export interface GuidelineType {
  type: "do" | "dont";
}

interface GuidelineProps extends GuidelineType {
  title: string;
  children: React.ReactNode;
}

const StyledComponent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.orbit.paletteCloudLight};
    border-radius: ${theme.orbit.spaceFourX};
    padding: ${theme.orbit.spaceFourX} 0;
  `}
`;

interface WrapperProps extends GuidelineType {
  border: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  ${({ border, theme, type }) => css`
    ${border &&
    `border-left: 4px solid ${
      type === "do" ? theme.orbit.paletteGreenNormal : theme.orbit.paletteRedNormal
    }`};
    padding: ${theme.orbit.spaceTwoX} ${theme.orbit.spaceSixX} ${theme.orbit.spaceTwoX}
      ${theme.orbit.spaceFourX};
    display: flex;
  `}
`;

const ContentContainer = styled.div`
  ${({ theme }) => css`
    padding-left: ${theme.orbit.spaceTwoX};
  `}
`;

interface ImageContainerProps {
  noLeftPadding?: boolean;
  middleAlign?: boolean;
}

const ImageContainer = styled.div<ImageContainerProps>`
  ${({ noLeftPadding, theme }) => css`
    padding: ${noLeftPadding ? theme.orbit.spaceFourX : theme.orbit.spaceSixX};
    ${noLeftPadding && "padding-left: 0;"}
    width: 100%;
    max-width: 360px;
    background-color: ${theme.orbit.paletteWhiteNormal};
    border-radius: ${theme.orbit.spaceFourX};
  `}
`;

const ImageBorder = styled.div<GuidelineType>`
  ${({ theme, type }) => css`
    border-left: 4px solid
      ${type === "do" ? theme.orbit.paletteGreenNormal : theme.orbit.paletteRedNormal};
    padding: ${theme.orbit.spaceFourX};
    padding-left: ${theme.orbit.spaceEightX};
    height: 100%;
  `}
`;

const DoDontHeaderWrapper = styled.div`
  padding-left: ${({ theme }) => theme.orbit.spaceSixX};
`;

export const DoDontHeader = ({ type }: GuidelineType) => (
  <Text weight="bold" uppercase type={type === "do" ? "success" : "critical"}>
    {type === "do" ? "Do" : "Don't"}
  </Text>
);

export default function Guideline({ type = "do", title, children }: GuidelineProps) {
  const isImage = object => {
    if (object.props?.children?.props?.className === imageWrapperClass) return true;
    return false;
  };

  interface Content {
    images: React.ReactNode[];
    content: React.ReactNode;
  }

  const extractContent = data => {
    return React.Children.toArray(data).reduce(
      (acc: Content, cur) => {
        if (isImage(cur)) acc.images.push(cur);
        else acc.content = cur;

        return acc;
      },
      { images: [], content: null },
    );
  };

  const { images, content } = extractContent(children);

  const typeOpposite = type === "do" ? "dont" : "do";

  return (
    <StyledComponent id={slugify(title)}>
      <Wrapper type={type} border={!(images.length > 1)}>
        {images.length < 2 &&
          (type === "do" ? (
            <CheckCircle color="success" ariaLabel="Do" />
          ) : (
            <CloseCircle color="critical" ariaLabel="Don't" />
          ))}
        <Stack justify="between" shrink direction="column" desktop={{ direction: "row" }}>
          <ContentContainer>
            <HeadingWithLink noId>
              <Heading as="h3" type="title3">
                {title}
              </Heading>
            </HeadingWithLink>
            {content}
          </ContentContainer>
          {images.length === 1 && <ImageContainer middleAlign>{images}</ImageContainer>}
          {images.length > 1 && (
            <Stack
              basis="65%"
              direction="column"
              justify="start"
              desktop={{ justify: "end" }}
              tablet={{ direction: "row" }}
            >
              <Stack shrink direction="column" spacing="XXXSmall">
                <DoDontHeaderWrapper>
                  <DoDontHeader type={type} />
                </DoDontHeaderWrapper>
                <ImageContainer noLeftPadding>
                  <ImageBorder type={type}>{images[0]}</ImageBorder>
                </ImageContainer>
              </Stack>
              <Stack shrink direction="column" spacing="XXXSmall">
                <DoDontHeaderWrapper>
                  <DoDontHeader type={typeOpposite} />
                </DoDontHeaderWrapper>
                <ImageContainer noLeftPadding>
                  <ImageBorder type={typeOpposite}>{images[1]}</ImageBorder>
                </ImageContainer>
              </Stack>
            </Stack>
          )}
        </Stack>
      </Wrapper>
    </StyledComponent>
  );
}
