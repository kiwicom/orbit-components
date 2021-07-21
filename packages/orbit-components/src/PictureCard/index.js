// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import Text from "../Text";
import Heading from "../Heading";
import Stack from "../Stack";
import defaultTheme from "../defaultTheme";
import { BASE_URL, SMALLEST_HEIGHT } from "./consts";
import LazyImage, { StyledLazyImage } from "../LazyImage";
import { left } from "../utils/rtl";
import randomID from "../utils/randomID";
import handleKeyDown from "../utils/handleKeyDown";

import type { Props } from ".";

const Shown = styled.div`
  position: absolute;
  opacity: 0;
  z-index: 5;
  padding: ${({ theme }) => `0 0 ${theme.orbit.spaceMedium} ${theme.orbit.spaceMedium}`};
  ${({ contentHeight }) => (contentHeight > 0 ? `bottom: -${contentHeight}px` : `top: 100%`)};
  transition: all ${({ theme }) => theme.orbit.durationFast} ease-in-out;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Shown.defaultProps = {
  theme: defaultTheme,
};

const overlayCss = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  transition: opacity ${({ theme }) => theme.orbit.durationNormal} ease-in-out;
`;

const StyledLabel = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  padding: ${({ theme }) => theme.orbit.spaceMedium};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledLabel.defaultProps = {
  theme: defaultTheme,
};

const StyledOverlay = styled.div`
  ${overlayCss};
  opacity: 1;
  background: linear-gradient(
    to bottom ${left},
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 16%,
    rgba(0, 0, 0, 0.3) 55%,
    rgba(0, 0, 0, 0.7) 100%
  );
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledOverlay.defaultProps = {
  theme: defaultTheme,
};

const StyledOverlayHover = styled.div`
  ${overlayCss};
  opacity: 0;
  background: linear-gradient(
    to bottom ${left},
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 10%,
    rgba(0, 0, 0, 0.4) 36%,
    rgb(0, 0, 0) 100%
  );
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledOverlayHover.defaultProps = {
  theme: defaultTheme,
};

type Content = {|
  title?: React.Node,
  subTitle?: React.Node,
  children?: React.Node,
  cardID: string,
|};

const PictureCardContent = ({ title, subTitle, children, cardID }: Content) => {
  return (
    <StyledPictureCardContent aria-labelledby={cardID}>
      <Stack flex direction="column" justify="end" spacing="none">
        <Stack spaceAfter="small" spacing="none">
          {subTitle && (
            <Heading type="title3" as="div" inverted>
              {subTitle}
            </Heading>
          )}

          {title && (
            <Heading type="title1" as="div" inverted>
              {title}
            </Heading>
          )}
        </Stack>

        {children && (
          <>
            <Heading type="title3" as="div" inverted>
              {children}
            </Heading>
          </>
        )}
      </Stack>
    </StyledPictureCardContent>
  );
};

const StyledPictureCardContent = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-grow: 1;
  padding: ${({ theme }) => theme.orbit.spaceMedium};
  transition: all ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  bottom: 0;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledPictureCardContent.defaultProps = {
  theme: defaultTheme,
};

const StyledPictureCard = styled(
  ({ height, href, theme, shadows, contentHeight, isPlain, width, isClickable, ...props }) => {
    const Component = href ? "a" : "div";
    return (
      <Component {...props} href={href}>
        {props.children}
      </Component>
    );
  },
)`
  height: ${({ height }) => (height ? `${height}` : "100%")};
  width: ${({ width }) => (width ? `${width}` : `100%`)};
  max-width: 100%;
  display: flex;
  position: relative;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  overflow: hidden;

  box-shadow: ${({ theme, shadows }) => shadows && theme.orbit.boxShadowAction};
  transition: box-shadow ${({ theme }) => theme.orbit.durationNormal} ease-in-out;

  ${StyledLazyImage} {
    transition: transform ${({ theme }) => theme.orbit.durationNormal} ease-in-out;
  }
  cursor: ${({ isClickable }) => isClickable && "pointer"};

  ${({ isPlain, theme, shadows }) =>
    !isPlain &&
    css`
      &:hover,
      &:focus {
        outline: none;
        box-shadow: ${shadows && theme.orbit.boxShadowActionActive};

        ${StyledOverlayHover} {
          opacity: 1;
        }

        ${StyledLazyImage} {
          transform: scale(1.05);
        }

        ${StyledPictureCardContent} {
          bottom: ${({ contentHeight }) => contentHeight && `${contentHeight}px`};
        }

        ${Shown} {
          opacity: 1;
          bottom: 0;
        }
      }
    `}

  ${({ isPlain }) =>
    isPlain &&
    css`
      &:focus {
        outline: none;
      }
    `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledPictureCard.defaultProps = {
  theme: defaultTheme,
};

const PictureCard = ({
  onClick,
  image,
  title,
  tabIndex,
  subTitle,
  href,
  children,
  external,
  actions,
  label,
  height = "300px",
  width,
  dataTest,
}: Props): React.Node => {
  const ref: {| current: any | HTMLDivElement |} = React.useRef(null);
  const [contentHeight, setContentHeight] = React.useState(0);

  React.useEffect(() => {
    if (ref.current) {
      setContentHeight(ref.current.clientHeight);
    }
  }, []);

  const cardID = React.useMemo(() => randomID("pictureCardID"), []);

  const {
    name,
    original = undefined,
    placeholder = undefined,
    code = undefined,
    src = undefined,
  } = image;
  const isPlain = !(title || subTitle || children || actions);
  const isClickable = href || onClick;
  const isFocus = isPlain ? undefined : 0;

  return (
    <StyledPictureCard
      data-test={dataTest}
      onClick={onClick}
      onKeyDown={handleKeyDown(onClick)}
      height={
        (isPlain && height) || parseInt(height, 10) >= SMALLEST_HEIGHT
          ? height
          : `${SMALLEST_HEIGHT}px`
      }
      width={width}
      href={href}
      target={href && external ? "_blank" : undefined}
      rel={href && external ? "noopener noreferrer" : undefined}
      shadows={onClick || href}
      tabIndex={href ? tabIndex : isFocus}
      role={isPlain ? undefined : "link"}
      contentHeight={contentHeight}
      isPlain={isPlain}
      isClickable={isClickable}
      aria-labelledby={isPlain ? undefined : cardID}
    >
      <LazyImage
        original={
          code && original
            ? {
                webp: ` ${BASE_URL}/photos/${original}/${code}.webp`,
                jpg: `${BASE_URL}/photos/${original}/${code}.jpg`,
              }
            : { "*": src }
        }
        placeholder={
          placeholder && code
            ? {
                webp: ` ${BASE_URL}/photos/${placeholder}/${code}.webp`,
                jpg: `${BASE_URL}/photos/${placeholder}/${code}.jpg`,
              }
            : undefined
        }
        name={name}
      />

      {!isPlain && <StyledOverlay />}
      {!isPlain && <StyledOverlayHover />}

      {label && (
        <StyledLabel>
          <Text as="div" size="small" type="white" weight="bold">
            {label}
          </Text>
        </StyledLabel>
      )}
      <PictureCardContent cardID={cardID} title={title} subTitle={subTitle}>
        {children}
      </PictureCardContent>

      {actions && (
        <Shown ref={ref} contentHeight={contentHeight}>
          {actions}
        </Shown>
      )}
    </StyledPictureCard>
  );
};

export default PictureCard;
