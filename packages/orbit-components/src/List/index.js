// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import { SIZES, TYPES } from "./consts";
import getSpacingToken from "../common/getSpacingToken";
import { getLineHeightToken } from "./ListItem";
import ListContext from "./ListContext";

import type { Props } from "./index";

const getSizeToken = ({ theme, size }) => {
  const sizeTokens = {
    [SIZES.SMALL]: theme.orbit.fontSizeSmall,
    [SIZES.NORMAL]: theme.orbit.fontSizeNormal,
    [SIZES.LARGE]: theme.orbit.fontSizeLarge,
  };
  return sizeTokens[size];
};

const getTypeToken = ({ theme, type }) => {
  const typeTokens = {
    [TYPES.PRIMARY]: theme.orbit.textPrimaryForeground,
    [TYPES.SECONDARY]: theme.orbit.textSecondaryForeground,
  };

  return typeTokens[type];
};

const StyledList = styled(({ className, children, dataTest }) => (
  <ul className={className} data-test={dataTest}>
    {children}
  </ul>
))`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: ${({ theme }) => theme.orbit.fontfamily};
  font-size: ${getSizeToken};
  line-height: ${getLineHeightToken};
  color: ${getTypeToken};
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: ${getSpacingToken};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledList.defaultProps = {
  theme: defaultTheme,
};

const List = ({
  children,
  size = SIZES.NORMAL,
  type = TYPES.PRIMARY,
  dataTest,
  spaceAfter,
}: Props): React.Node => (
  <StyledList type={type} size={size} dataTest={dataTest} spaceAfter={spaceAfter}>
    <ListContext.Provider value={{ size, type }}>{children}</ListContext.Provider>
  </StyledList>
);

export default List;

export { default as ListItem } from "./ListItem";
