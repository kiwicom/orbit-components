// @flow
import * as React from "react";
import styled, { keyframes, css } from "styled-components";

import defaultTheme from "../defaultTheme";
import TYPE_OPTIONS from "./consts";
import { left, right } from "../utils/rtl";

import type { Props } from "./index";

const getHeight = ({ type }) => {
  const tokens = {
    [TYPE_OPTIONS.BUTTON_LOADER]: "100%",
    [TYPE_OPTIONS.SEARCH_LOADER]: "40px",
    [TYPE_OPTIONS.BOX_LOADER]: "80px",
    [TYPE_OPTIONS.PAGE_LOADER]: "120px",
    [TYPE_OPTIONS.INLINE_LOADER]: "19px",
  };

  return css`
    ${type === TYPE_OPTIONS.INLINE_LOADER ? "min-height" : "height"}: ${tokens[type]}
  `;
};

const getAlign = ({ type }) => {
  const tokens = {
    [TYPE_OPTIONS.BUTTON_LOADER]: "center",
    [TYPE_OPTIONS.SEARCH_LOADER]: "start",
    [TYPE_OPTIONS.BOX_LOADER]: "center",
    [TYPE_OPTIONS.PAGE_LOADER]: "center",
    [TYPE_OPTIONS.INLINE_LOADER]: "center",
  };

  return tokens[type];
};

// Animations
const SpinnerAnimation = keyframes`
  100% { transform: rotate(360deg); }
`;

const LoaderAnimation = keyframes`
  0% {opacity: .3; transform:translateY(0px);}
  20% {opacity: 1; transform: translateY(-3px);}
  40%  {opacity: .3; transform:translateY(0px);}
  100%  {opacity: .3; transform:translateY(0px);}
`;

export const StyledLoading: any = styled(({ children, className, dataTest }) => (
  <div className={className} data-test={dataTest}>
    {children}
  </div>
))`
  position: ${({ type }) => type === TYPE_OPTIONS.BUTTON_LOADER && "absolute"};
  top: ${({ type }) => type === TYPE_OPTIONS.BUTTON_LOADER && "0"};
  ${left}: ${({ type }) => type === TYPE_OPTIONS.BUTTON_LOADER && "0"};
  width: ${({ type }) => type === TYPE_OPTIONS.BUTTON_LOADER && "100%"};
  ${getHeight};
  padding: ${({ theme, type }) => type !== TYPE_OPTIONS.INLINE_LOADER && theme.orbit.spaceThreeX};
  display: ${({ type }) => (type === TYPE_OPTIONS.INLINE_LOADER ? "inline-flex" : "flex")};
  flex-direction: ${({ type }) => (type === TYPE_OPTIONS.PAGE_LOADER ? "column" : "row")};
  justify-content: ${getAlign};
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledLoading.defaultProps = {
  theme: defaultTheme,
};

const StyledLoadingText = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeNormal};
  color: ${({ theme }) => theme.orbit.paletteInkLighter};
  line-height: ${({ theme }) => theme.orbit.lineHeightNormal};
  margin-top: ${({ theme, type }) => type === TYPE_OPTIONS.PAGE_LOADER && theme.orbit.spaceFourX};
  margin-${left}: ${({ theme, type }) =>
  type !== TYPE_OPTIONS.PAGE_LOADER && theme.orbit.spaceThreeX};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledLoadingText.defaultProps = {
  theme: defaultTheme,
};

export const StyledSpinner: any = styled.svg`
  width: 40px;
  height: 40px;
  animation: ${SpinnerAnimation} 0.75s linear infinite;
`;

const StyledSpinnerCircle = styled.circle`
  fill: transparent;
  stroke: ${({ theme, type }) =>
    type === TYPE_OPTIONS.BUTTON_LOADER ? "currentColor" : theme.orbit.paletteInkLighter};
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-dasharray: 128px;
  stroke-dashoffset: 64px;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledSpinnerCircle.defaultProps = {
  theme: defaultTheme,
};

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoaderCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-${right}: 6px;
  background: ${({ theme }) => theme.orbit.paletteInkLighter};
  animation: ${LoaderAnimation} 1.25s infinite ease-in-out;
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
    margin: 0;
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledLoaderCircle.defaultProps = {
  theme: defaultTheme,
};

const Loading = (props: Props): React.Node => {
  const { loading = false, type = TYPE_OPTIONS.PAGE_LOADER, text, children, dataTest } = props;

  return children && !loading ? (
    children
  ) : (
    <StyledLoading type={type} dataTest={dataTest}>
      {type === TYPE_OPTIONS.BOX_LOADER ||
      type === TYPE_OPTIONS.SEARCH_LOADER ||
      type === TYPE_OPTIONS.INLINE_LOADER ? (
        <StyledLoader>
          <StyledLoaderCircle />
          <StyledLoaderCircle />
          <StyledLoaderCircle />
        </StyledLoader>
      ) : (
        <StyledSpinner viewBox="0 0 40 40">
          <StyledSpinnerCircle cx="50%" cy="50%" r="18" type={type} />
        </StyledSpinner>
      )}
      {type !== TYPE_OPTIONS.BUTTON_LOADER && (
        <StyledLoadingText type={type}>{text}</StyledLoadingText>
      )}
    </StyledLoading>
  );
};

Loading.displayName = "Loading";

export default Loading;
