// @flow
import React from "react";
import styled from "styled-components";

import { rtlSpacing } from "../../utils/rtl";
import defaultTheme from "../../defaultTheme";
import { StyledTag } from "../../Tag";

const StyledInputTags = styled.div`
  margin: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceSmall}`)};
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  height: 100%;
  z-index: 2;
  min-width: 50px;
  overflow: hidden;
`;

StyledInputTags.defaultProps = {
  theme: defaultTheme,
};

const StyledInputTagsInner = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
  
  &::-webkit-scrollbar { 
    display: none; 
  }
  
  ${StyledTag} + ${StyledTag} {
    margin: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceXSmall}`)};
  }
`;

StyledInputTagsInner.defaultProps = {
  theme: defaultTheme,
};

const InputTags = ({ children }) => (
  <StyledInputTags>
    <StyledInputTagsInner>{children}</StyledInputTagsInner>
  </StyledInputTags>
);

export default InputTags;
