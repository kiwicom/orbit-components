// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import transparentColor from "@kiwicom/orbit-design-tokens/lib/js/transparentColor";

import Text from "../Text";
import CheckCircle from "../icons/CheckCircle";
import useTheme from "../hooks/useTheme";
import defaultTheme from "../defaultTheme";
import { WizardStepContext } from "./WizardContext";

const centerMixin = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledCircle = styled.div`
  ${({ theme, width, height, status, active, hasGlow }) => css`
    width: ${Math.round(width)}px;
    height: ${Math.round(height)}px;
    ${centerMixin};
    background: ${theme.orbit.paletteProductNormal};
    border-radius: 50%;
    ${status === "completed" &&
    css`
      background: ${theme.orbit.paletteWhiteNormal};
    `}
    ${status === "disabled" &&
    css`
      background: ${theme.orbit.paletteCloudNormalSecondary};
    `}
    ${active &&
    hasGlow &&
    css`
      box-shadow: 0 0 0 4px ${transparentColor(theme.orbit.paletteProductNormal, 20)};
    `}
  `}
`;
// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCircle.defaultProps = {
  theme: defaultTheme,
};

const StyledTextContainer = styled.div`
  ${({ width, height, checkboxWidth, checkboxHeight }) => css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${width}px;
    height: ${height}px;
    padding: ${Math.round((height - checkboxHeight) / 2)}px
      ${Math.round((width - checkboxWidth) / 2)}px;
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTextContainer.defaultProps = {
  theme: defaultTheme,
};

type Props = {|
  +width: number,
  +height: number,
|};

const WizardStepIcon = ({ width, height }: Props): React.Element<"div"> => {
  const { index, status, isCompact, isActive } = React.useContext(WizardStepContext);
  const theme = useTheme();

  // account for additional inner spacing because of visual balance
  const checkboxWidth = width * (5 / 6);
  const checkboxHeight = height * (5 / 6);

  /**
   * We're explicitly rounding values in layout styles because browsers seem to
   * be rounding them inconsistently horizontally vs vertically.
   */

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <StyledCircle
        width={checkboxWidth}
        height={checkboxHeight}
        status={status}
        active={isActive}
        hasGlow={!isCompact}
      />
      <div
        css={css`
          position: relative;
          /* an exception where we resize CheckCircle to a nonstandard size for aesthetical reasons */
          svg {
            width: ${width}px;
            height: ${height}px;
            display: block;
          }
        `}
      >
        {status === "completed" ? (
          <CheckCircle
            ariaLabel="completed"
            size="small"
            customColor={theme.orbit.paletteProductNormal}
          />
        ) : (
          <StyledTextContainer
            width={width}
            height={height}
            checkboxWidth={checkboxWidth}
            checkboxHeight={checkboxHeight}
          >
            <Text as="div" type={status === "disabled" ? "primary" : "white"} size="small">
              {typeof index === "number" ? index + 1 : null}
            </Text>
          </StyledTextContainer>
        )}
      </div>
    </div>
  );
};

export default WizardStepIcon;
