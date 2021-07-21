// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import ChevronLeft from "../../icons/ChevronLeft";
import Heading, { StyledHeading, getHeadingToken } from "../../Heading";
import { TYPE_OPTIONS, TOKENS } from "../../Heading/consts";
import ButtonLink from "../../Button";
import { StyledButtonPrimitive } from "../../primitives/ButtonPrimitive";
import BASE_URL from "./consts";
import defaultTheme from "../../defaultTheme";
import LazyImage from "../../LazyImage";
import mq from "../../utils/mediaQuery";
import useTranslate from "../../hooks/useTranslate";

import type { Props } from ".";

const StyledDestinationHeader = styled.div`
  width: 100%;
  height: 80px; // TODO: create token default heightDestinationHeader
  position: relative;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  overflow: hidden;

  ${mq.largeMobile(css`
    height: 120px; // TODO: create token largeMobile heightDestinationHeader
  `)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledDestinationHeader.defaultProps = {
  theme: defaultTheme,
};

const StyledOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-image: linear-gradient(to top, rgba(16, 19, 21, 0.75), rgba(0, 0, 0, 0));
  z-index: 1;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledOverlay.defaultProps = {
  theme: defaultTheme,
};

const StyledContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  ${StyledButtonPrimitive} {
    align-self: flex-start;
    background: none;
  }

  ${mq.largeMobile(css`
    ${StyledButtonPrimitive} {
      width: ${({ theme }) => theme.orbit.heightButtonNormal};
      height: ${({ theme }) => theme.orbit.heightButtonNormal};

      svg {
        width: ${({ theme }) => theme.orbit.widthIconMedium};
        height: ${({ theme }) => theme.orbit.heightIconMedium};
      }
    }
  `)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledContent.defaultProps = {
  theme: defaultTheme,
};

const StyledHeader = styled.div`
  box-sizing: border-box;
  padding: ${({ theme }) => `${theme.orbit.spaceXSmall} ${theme.orbit.spaceSmall}`};

  ${mq.largeMobile(css`
    padding: ${({ theme }) => `${theme.orbit.spaceSmall} ${theme.orbit.spaceMedium}`};
    ${StyledHeading} {
      font-size: ${({ theme }) =>
        getHeadingToken(TOKENS.sizeHeading)({ theme, type: TYPE_OPTIONS.TITLE1 })};
      font-weight: ${({ theme }) =>
        getHeadingToken(TOKENS.weightHeading)({ theme, type: TYPE_OPTIONS.TITLE1 })};
    }
  `)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledHeader.defaultProps = {
  theme: defaultTheme,
};

const DestinationHeaderGoBackButton = ({ onClick }) => {
  const translate = useTranslate();
  return (
    <ButtonLink
      size="small"
      iconLeft={<ChevronLeft />}
      onClick={onClick}
      title={translate("breadcrumbs_back")}
    />
  );
};

const DestinationHeader = ({ destinationName, goBack, dataTest, image }: Props): React.Node => {
  const destinationImage = image.toLowerCase();
  return (
    <StyledDestinationHeader data-test={dataTest}>
      <LazyImage
        original={{
          webp: `${BASE_URL}/photos/900x120/${destinationImage}.webp`,
          jpg: `${BASE_URL}/photos/900x120/${destinationImage}.jpg`,
        }}
        placeholder={{
          webp: `${BASE_URL}/photos/225x30/${destinationImage}.webp`,
          jpg: `${BASE_URL}/photos/225x30/${destinationImage}.jpg`,
        }}
        name={destinationName}
      />
      <StyledOverlay />
      <StyledContent>
        <DestinationHeaderGoBackButton onClick={goBack} />
        <StyledHeader>
          <Heading inverted type="title2">
            {destinationName}
          </Heading>
        </StyledHeader>
      </StyledContent>
    </StyledDestinationHeader>
  );
};

export default DestinationHeader;
