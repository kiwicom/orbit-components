// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import ButtonLink from "../ButtonLink";
import Stack from "../Stack";
import Text from "../Text";
import useTheme from "../hooks/useTheme";
import WizardStepIcon from "./WizardStepIcon";
import { WizardStepContext } from "./WizardContext";
import defaultTheme from "../defaultTheme";
import { left, right } from "../utils/rtl";
import type { Props } from "./WizardStep";

const StyledContainer = styled.li`
  ${({ theme, isCompact, status }) =>
    isCompact &&
    css`
      position: relative;
      button {
        border-radius: 0;
      }
      ${status === "disabled" &&
      css`
        background: ${theme.orbit.paletteCloudLight};
        button {
          /* to make coloring more precise in disabled state */
          opacity: 1;
        }
      `};
    `}
`;
// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledContainer.defaultProps = {
  theme: defaultTheme,
};

const StyledActiveMarker = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    ${left}: 0;
    bottom: 0;
    width: 2px;
    background: ${theme.orbit.paletteProductNormal};
    pointer-events: none;
  `}
`;
// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledActiveMarker.defaultProps = {
  theme: defaultTheme,
};

const StyledProgressBar = styled.div`
  ${({ theme, status, nextStepStatus, iconHeight }) => css`
    position: relative;
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: ${parseFloat(iconHeight) / 2 - 1}px;
      width: 50%;
      height: 2px;
    }
    &:before {
      ${left}: 0;
      background: ${status === "disabled"
        ? theme.orbit.paletteCloudNormalSecondary
        : theme.orbit.paletteProductNormal};
    }
    &:after {
      ${right}: 0;
      background: ${status === "disabled" || nextStepStatus === "disabled"
        ? theme.orbit.paletteCloudNormalSecondary
        : theme.orbit.paletteProductNormal};
    }
  `}
`;
// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledProgressBar.defaultProps = {
  theme: defaultTheme,
};

const StyledLink = styled.a`
  ${({ theme, active }) => css`
    display: block;
    text-decoration: none;
    span {
      display: block;
    }
    ${active
      ? css`
          span {
            font-weight: ${theme.orbit.fontWeightMedium};
          }
        `
      : // appear interactive only if it's not active
        css`
          cursor: pointer;
          span {
            color: ${theme.orbit.textSecondaryForeground};
          }
          &:hover,
          &:focus {
            span {
              color: ${theme.orbit.textPrimaryForeground};
              text-decoration: underline;
            }
          }
        `}
  `};
`;
// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledLink.defaultProps = {
  theme: defaultTheme,
};

const WizardStep = ({ dataTest, title, onClick }: Props): React.Node => {
  const theme = useTheme();
  const { index, status, nextStepStatus, isCompact, isActive, onChangeStep } = React.useContext(
    WizardStepContext,
  );

  const handleClick = (event: SyntheticEvent<HTMLElement>) => {
    if (onClick) onClick(event);
    if (onChangeStep) onChangeStep(index);
  };

  const iconWidth = parseFloat(theme.orbit.iconExtraSmallSize) + 3.2;
  const iconHeight = parseFloat(theme.orbit.iconExtraSmallSize) + 3.2;

  if (isCompact) {
    return (
      <StyledContainer data-test={dataTest} isCompact={isCompact} status={status}>
        {isActive && <StyledActiveMarker />}
        <ButtonLink
          disabled={status === "disabled"}
          type="secondary"
          fullWidth
          iconLeft={<WizardStepIcon width={iconWidth} height={iconHeight} />}
          ariaCurrent={isActive ? "step" : "false"}
          onClick={handleClick}
        >
          {status === "disabled" ? (
            <Text as="span" type="secondary">
              {title}
            </Text>
          ) : (
            title
          )}
        </ButtonLink>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer data-test={dataTest} isCompact={isCompact} status={status}>
      <StyledProgressBar status={status} nextStepStatus={nextStepStatus} iconHeight={iconHeight} />
      <Stack direction="column" align="center" spacing="XSmall">
        <WizardStepIcon width={iconWidth} height={iconHeight} />
        <div
          css={css`
            padding: 0 ${theme.orbit.spaceTwoX};
          `}
        >
          {status === "disabled" ? (
            <Text as="div" type="secondary" size="small" align="center">
              {title}
            </Text>
          ) : (
            <div>
              <StyledLink
                active={isActive}
                role="button"
                tabIndex={0}
                aria-current={isActive ? "step" : "false"}
                onClick={event => {
                  event.currentTarget.blur();
                  handleClick(event);
                }}
                // keep focus for people who are navigating with the keyboard
                onKeyDown={event => {
                  if (event.key === "Enter") {
                    handleClick(event);
                  }
                }}
              >
                <Text as="span" size="small" align="center">
                  {title}
                </Text>
              </StyledLink>
            </div>
          )}
        </div>
      </Stack>
    </StyledContainer>
  );
};

export default WizardStep;
