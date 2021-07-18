// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
import { SIZE_OPTIONS, baseURL } from "./consts";
import getSpacingToken from "../../common/getSpacingToken";

import type { Props } from "./index";

const getHeightToken = ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.EXTRASMALL]: theme.orbit.illustrationExtraSmallHeight,
    [SIZE_OPTIONS.SMALL]: theme.orbit.illustrationSmallHeight,
    [SIZE_OPTIONS.MEDIUM]: theme.orbit.illustrationMediumHeight,
    [SIZE_OPTIONS.LARGE]: theme.orbit.illustrationLargeHeight,
    [SIZE_OPTIONS.DISPLAY]: theme.orbit.illustrationDisplayHeight,
  };
  return tokens[size];
};

export const StyledImage: any = styled.img.attrs(({ theme, size, illustrationName }) => {
  const height = parseInt(getHeightToken({ theme, size }), 10);
  const illustrationPath = `${illustrationName}-Q85.png`;
  return {
    src: `${baseURL}/illustrations/0x${height}/${illustrationPath}`,
    srcSet: `${baseURL}/illustrations/0x${
      height * 2
    }/${illustrationPath} 2x, ${baseURL}/illustrations/0x${height * 3}/${illustrationPath} 3x`,
  };
})`
  display: inline-block;
  margin: auto 0;
  max-height: ${getHeightToken};
  max-width: 100%;
  background-color: transparent;
  margin-bottom: ${getSpacingToken};
  flex-shrink: 0;
`;

StyledImage.defaultProps = {
  theme: defaultTheme,
};

const IllustrationPrimitive = ({
  name,
  alt,
  size = SIZE_OPTIONS.MEDIUM,
  dataTest,
  spaceAfter,
}: Props): React.Node => {
  return (
    <StyledImage
      illustrationName={name}
      alt={typeof alt === "string" ? alt : name}
      size={size}
      data-test={dataTest}
      spaceAfter={spaceAfter}
    />
  );
};

export default IllustrationPrimitive;
