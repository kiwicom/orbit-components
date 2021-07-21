// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import { baseURL } from "./consts";

import type { Props } from ".";

const baseSize = 52;

const getURL = name => (size = 1) => {
  const url = `${baseURL}/feature-icons/${baseSize * size}x${baseSize * size}/${name}.png`;
  if (size > 1) {
    return `${url} ${size}x`;
  }
  return url;
};

const generateURL = name => {
  const urlWithName = getURL(name);
  return { src: urlWithName(), srcSet: [urlWithName(2), urlWithName(3)].join(",") };
};

export const StyledFeatureIcon: any = styled(({ className, name, alt, dataTest }) => (
  <img className={className} alt={alt} data-test={dataTest} {...generateURL(name)} />
))`
  height: ${baseSize}px;
  width: auto;
  background-color: transparent;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledFeatureIcon.defaultProps = {
  theme: defaultTheme,
};

const FeatureIcon = ({ alt = "", name, dataTest }: Props): React.Node => (
  <StyledFeatureIcon alt={alt} name={name} dataTest={dataTest} />
);

export default FeatureIcon;
