// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import { rtlSpacing, left } from "../utils/rtl";
import CloseCircle from "../icons/CloseCircle";
import { SIZES, STATES } from "./consts";
import KEY_CODE_MAP from "../common/keyMaps";
import resolveColor from "./helpers/resolveColor";

import type { Props } from ".";

const getFontSize = ({ theme, size }) => {
  const tokens = {
    [SIZES.SMALL]: theme.orbit.fontSizeTextSmall,
    [SIZES.NORMAL]: theme.orbit.fontSizeTextNormal,
  };

  return tokens[size];
};

const getBackgroundColor = state => () => {
  const states = {
    [STATES.DEFAULT]: resolveColor({
      selected: "paletteBlueNormal",
      removable: "paletteBlueLight",
      normal: "paletteCloudDark",
    }),
    [STATES.HOVER]: resolveColor({
      selected: "paletteBlueNormalHover",
      removable: "paletteBlueLightHover",
      normal: "paletteCloudNormalHover",
    }),
    [STATES.ACTIVE]: resolveColor({
      selected: "paletteBlueNormalActive",
      removable: "paletteBlueLightActive",
      normal: "paletteCloudNormalHover",
    }),
  };
  return states[state];
};

const CloseContainer = styled.div`
  display: flex;
  margin-${left}: 8px;
  opacity: 0.5;
  color: ${resolveColor({
    selected: "paletteWhite",
    removable: "paletteBlueDarker",
    normal: "paletteInkLink",
  })};
  cursor: ${({ actionable }) => actionable && `pointer`};
  transition: all ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  &:active {
    color: ${({ theme, selected }) =>
      selected ? theme.orbit.paletteWhite : theme.orbit.paletteBlueDarker};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
CloseContainer.defaultProps = {
  theme: defaultTheme,
};

export const StyledTag: any = styled.div`
  ${({ theme, actionable }) => css`
    font-family: ${theme.orbit.fontFamily};
    color: ${resolveColor({
      selected: "paletteWhite",
      removable: "paletteBlueDarker",
      normal: "colorTextTag",
    })};
    background: ${getBackgroundColor(STATES.DEFAULT)};
    display: inline-flex;

    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    font-size: ${getFontSize};
    font-weight: ${theme.orbit.fontWeightMedium};
    border-radius: ${theme.orbit.borderRadiusNormal};
    padding: ${rtlSpacing(theme.orbit.paddingTag)};
    transition: color ${theme.orbit.durationFast} ease-in-out,
      box-shadow ${theme.orbit.durationFast} ease-in-out,
      background ${theme.orbit.durationFast} ease-in-out;

    &:focus {
      outline: 0;
    }

    ${actionable &&
    css`
      cursor: pointer;

      &:hover {
        background: ${getBackgroundColor(STATES.HOVER)};
        box-shadow: none;
      }

      &:active {
        ${CloseContainer} {
          opacity: 1;
        }
        background: ${getBackgroundColor(STATES.ACTIVE)};
        box-shadow: none;
      }

      &:focus {
        ${CloseContainer} {
          opacity: 1;
        }
        background: ${getBackgroundColor(STATES.HOVER)};
        box-shadow: none;
        outline: 0;
      }
    `};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTag.defaultProps = {
  theme: defaultTheme,
};

const StyledClose = styled.div`
  display: flex;
  border-radius: 100%;

  &:focus {
    ${CloseContainer} {
      opacity: 1;
    }
    outline: none;
    box-shadow: 0 0 0 2px
      ${({ theme, selected, removable }) =>
        selected && !removable ? theme.orbit.paletteWhite : theme.orbit.paletteBlueDarker};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledClose.defaultProps = {
  theme: defaultTheme,
};

const buttonClickEmulation = callback => (ev?: SyntheticKeyboardEvent<HTMLButtonElement>) => {
  if (ev && ev.keyCode === KEY_CODE_MAP.SPACE) {
    ev.preventDefault();
    if (callback) callback();
  } else if (ev && ev.keyCode === KEY_CODE_MAP.ENTER) {
    if (callback) callback();
  }
};

const Tag: React.AbstractComponent<Props, HTMLDivElement> = React.forwardRef<Props, HTMLDivElement>(
  (props, ref) => {
    const { selected, children, size = SIZES.NORMAL, onClick, onRemove, dataTest } = props;
    return (
      <StyledTag
        actionable={onClick || onRemove}
        data-test={dataTest}
        size={size}
        ref={ref}
        onClick={onClick}
        removable={!!onRemove}
        selected={selected}
        tabIndex={(onClick || onRemove) && "0"}
        role="button"
        onKeyDown={buttonClickEmulation(onClick)}
      >
        {children}
        {!!onRemove && (
          <CloseContainer
            selected={selected}
            removable={!!onRemove}
            onClick={ev => {
              ev.stopPropagation();
              if (onRemove) onRemove();
            }}
          >
            <StyledClose
              tabIndex="0"
              selected={selected}
              aria-label="close"
              role="button"
              onKeyDown={ev => {
                ev.stopPropagation();
                buttonClickEmulation(onRemove);
              }}
            >
              <CloseCircle size="small" />
            </StyledClose>
          </CloseContainer>
        )}
      </StyledTag>
    );
  },
);

export default Tag;
