// @flow
import * as React from "react";
import styled from "styled-components";
import { warning } from "@adeira/js";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import defaultTheme from "../defaultTheme";
import { baseURL, CODES, SIZES, TOKENS } from "./consts";

import type { Props } from ".";

const getSizeToken = name => ({ theme, size }) => {
  const tokens = {
    [TOKENS.WIDTH]: {
      [SIZES.SMALL]: "16px",
      [SIZES.MEDIUM]: theme.orbit.widthCountryFlag,
    },
    [TOKENS.HEIGHT]: {
      [SIZES.SMALL]: "9px",
      [SIZES.MEDIUM]: "13px",
    },
  };
  return tokens[name][size];
};

const StyledCountryFlag = styled.div`
  position: relative;
  height: ${getSizeToken(TOKENS.HEIGHT)};
  width: ${getSizeToken(TOKENS.WIDTH)};
  background-color: ${({ theme }) => theme.orbit.backgroundCountryFlag};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusSmall};
  overflow: hidden;
  flex-shrink: 0;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCountryFlag.defaultProps = {
  theme: defaultTheme,
};

export const StyledImage: any = styled.img.attrs(({ theme, size, code }) => {
  const width = parseInt(getSizeToken(TOKENS.WIDTH)({ theme, size }), 10);
  return {
    src: `${baseURL}/flags/${width}x0/flag-${code.toLowerCase()}.jpg`,
    srcSet: `${baseURL}/flags/${width * 2}x0/flag-${code.toLowerCase()}.jpg 2x`,
  };
})`
  display: block;
  height: 100%;
  width: 100%;
  flex-shrink: 0;
`;

StyledImage.defaultProps = {
  theme: defaultTheme,
};

const StyledShadow = styled.div`
  position: absolute;
  display: block;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // TODO: create token borderColorCountryFlag
  // TODO: create token borderWidthCountryFlag
  box-shadow: inset 0 0 0 1px ${({ theme }) => convertHexToRgba(theme.orbit.paletteInkNormal, 10)};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusSmall};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledShadow.defaultProps = {
  theme: defaultTheme,
};

function getCountryProps(code: ?string, name: ?string): {| code: string, name: ?string |} {
  const codeNormalized = code ? code.toUpperCase().replace("-", "_") : "ANYWHERE";
  const countryCodeExists = codeNormalized in CODES;

  warning(countryCodeExists, "Country code not supported: %s", code);
  const countryCode = countryCodeExists ? CODES[codeNormalized] : CODES.ANYWHERE;
  const countryName = countryCode === CODES.ANYWHERE && !name ? "Anywhere" : name;
  return { code: countryCode, name: countryName };
}

const CountryFlag = ({ dataTest, size = SIZES.MEDIUM, ...props }: Props): React.Node => {
  const { code, name } = getCountryProps(props.code, props.name);
  return (
    <StyledCountryFlag size={size}>
      <StyledImage
        key={code}
        alt={name}
        title={name}
        code={code}
        data-test={dataTest}
        size={size}
      />
      <StyledShadow />
    </StyledCountryFlag>
  );
};

export default CountryFlag;
