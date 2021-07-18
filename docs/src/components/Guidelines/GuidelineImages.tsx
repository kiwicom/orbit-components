import React from "react";
import styled, { css } from "styled-components";
import { Stack } from "@kiwicom/orbit-components";

import { DoDontHeader, GuidelineType } from ".";

const GuidelineContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.orbit.spaceEightX};
    width: 100%;
    padding-top: 0;
    background-color: ${theme.orbit.paletteCloudLight};
    border-radius: ${theme.orbit.spaceFourX};
  `}
`;

interface ImageContainerProps {
  leftPadding?: boolean;
}

const ImageContainer = styled.div<ImageContainerProps>`
  ${({ theme }) => css`
    width: 100%;
    max-width: 360px;
    background-color: ${theme.orbit.paletteWhiteNormal};
    border-radius: ${theme.orbit.spaceFourX};
    padding: ${theme.orbit.spaceEightX};
  `}
`;

const Border = styled.div<GuidelineType>`
  ${({ theme, type }) => css`
    border-top: 4px solid
      ${type === "do" ? theme.orbit.paletteGreenNormal : theme.orbit.paletteRedNormal};
    padding-top: ${theme.orbit.spaceEightX};
    height: 100%;
  `}
`;

interface GuidelineWithImageProps extends GuidelineType, ImageProps {}

const GuidelineWithImage = ({ children, type }: GuidelineWithImageProps) => {
  const image = children[0];
  const content = children.slice(1, children.length);
  return (
    <GuidelineContainer>
      <Border type={type}>
        <Stack>
          <ImageContainer>{image}</ImageContainer>
          <Stack spacing="small">
            <DoDontHeader type={type} />
            {content}
          </Stack>
        </Stack>
      </Border>
    </GuidelineContainer>
  );
};

interface ImageProps {
  children: [React.ReactNode];
}

export const DoImage = ({ children }: ImageProps) => (
  <GuidelineWithImage type="do">{children}</GuidelineWithImage>
);

export const DontImage = ({ children }: ImageProps) => (
  <GuidelineWithImage type="dont">{children}</GuidelineWithImage>
);

interface GuidelineImagesProps {
  children: [ImageProps];
}

export default function GuidelineImages({ children }: GuidelineImagesProps) {
  return (
    <Stack direction="column" desktop={{ direction: "row" }}>
      {children}
    </Stack>
  );
}
