// @noflow
/* eslint-disable orbit-components/no-deprecated-token */
import styled from "styled-components";

const getToken = name => ({ theme }) => {
  const tokens = {
    a: theme.orbit.paletteBlueLightHover,
    b: theme.orbit.paletteBlueLight,
    c: theme.orbit.paletteBlueNormal,
    d: theme.orbit.paletteBlueNormalActive,
  };
  return tokens[name];
};

const getBackground = (disabled, checked) => ({ theme }) => {
  if (disabled && checked) {
    return theme.orbit.paletteRedNormalHover;
  }
  if (disabled && !checked) {
    return theme.orbit.paletteCloudNormalSecondary;
  }
  return checked
    ? theme.orbit.paletteSocialFacebookTertiary
    : theme.orbit.paletteProductLightTertiary;
};

const StyledDiv = styled.div`
  color: ${({ theme }) => theme.orbit.paletteProductLightSecondary};
  &:hover {
    color: ${getToken("a")};
  }
  background: ${getBackground(false, false)};
`;

export default StyledDiv;
