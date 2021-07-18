import * as React from "react";
import Frame, { FrameContextConsumer } from "react-frame-component";
import styled, { StyleSheetManager, css } from "styled-components";
import { LivePreview } from "react-live";
import { Stack } from "@kiwicom/orbit-components";

type BgType = "white" | "dark" | "grid";
interface Props {
  background?: BgType;
  minHeight?: number;
  width: number;
}

const BOARD_HEIGHT = 68;

const getBackground = (type: BgType) => ({ theme }) => {
  if (type === "grid") {
    return `
      background:
      linear-gradient(-90deg, rgba(0,0,0,.08) 1px, transparent 1px),
      linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px),
      linear-gradient(-90deg, rgba(0, 0, 0, .06) 1px, transparent 1px),
      linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px),
      linear-gradient(transparent 3px, ${theme.orbit.paletteWhiteNormal} 3px, ${theme.orbit.paletteWhiteNormal} 78px, transparent 78px),
      linear-gradient(-90deg, ${theme.orbit.paletteInkNormal} 1px, transparent 1px),
      linear-gradient(-90deg, transparent 3px, ${theme.orbit.paletteWhiteNormal} 3px, ${theme.orbit.paletteWhiteNormal} 78px, transparent 78px),
      linear-gradient(${theme.orbit.paletteInkNormal} 1px, transparent 1px),
      #f2f2f2;

    background-size:
        20px 20px,
        20px 20px,
        80px 80px,
        80px 80px,
        80px 80px,
        80px 80px,
        80px 80px,
        80px 80px;
    `;
  }

  if (type === "dark") return `background: ${theme.orbit.paletteInkNormal}`;

  return `background: ${theme.orbit.paletteWhiteNormal}`;
};

const StyledFrame = styled(Frame)`
  ${({ background, height, minHeight }) => css`
    width: 100%;
    min-height: ${minHeight}px;
    height: ${Number(height) + BOARD_HEIGHT}px;
    padding: 0 16px;
    ${getBackground(background)};
  `};
`;

const StyledPreviewWrapper = styled.div<{ width: number }>`
  ${({ theme, width }) => css`
    max-width: ${width}px;
    width: 100%;
    overflow: scroll;
    padding-top: ${theme.orbit.spaceEightX};
  `};
`;

const Preview = ({ background = "white", width, minHeight }: Props) => {
  const [loaded, setLoad] = React.useState(false);
  const [height, setHeight] = React.useState(0);

  const measuredRef = React.useCallback(
    n => {
      if (n !== null && loaded) {
        setHeight(n.getBoundingClientRect().height);
      }
    },
    [loaded],
  );

  return (
    <StyledFrame
      background={background}
      height={height}
      minHeight={minHeight}
      onLoad={() => setLoad(true)}
    >
      <FrameContextConsumer>
        {({ document }) => {
          return (
            <StyleSheetManager target={document.head}>
              <Stack justify="center" align="center">
                <StyledPreviewWrapper ref={measuredRef} width={width}>
                  <LivePreview />
                </StyledPreviewWrapper>
              </Stack>
            </StyleSheetManager>
          );
        }}
      </FrameContextConsumer>
    </StyledFrame>
  );
};

export default Preview;
