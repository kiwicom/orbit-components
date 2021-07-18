import * as React from "react";
import styled, { css } from "styled-components";
import transparentColor from "@kiwicom/orbit-design-tokens/lib/js/transparentColor";
import { Stack } from "@kiwicom/orbit-components";

// eslint-disable-next-line import/no-cycle
import CopyButton from "./CopyButton";

// eslint-disable-next-line import/no-cycle
import { isLight } from ".";

interface BorderingProps {
  order?: "first" | "middle" | "last" | "only";
  full?: boolean;
  left?: boolean;
  right?: boolean;
}

export interface ColorValueShape {
  colorValue: string;
}

const CopyWrapper = styled.div<ColorValueShape>`
  ${({ colorValue, theme }) => css`
    background: linear-gradient(90deg, transparent, ${colorValue} 27%);
    position: absolute;
    bottom: 20px;
    right: ${theme.orbit.spaceSixX};
    padding-left: ${theme.orbit.spaceEightX};
  `}
`;

type ColorContainerWrapperProps = ColorValueShape & BorderingProps;

const ColorContainerWrapper = styled.div<ColorContainerWrapperProps>`
  ${({ colorValue, full, left, order, right, theme }) => css`
    background-color: ${colorValue};
    color: ${isLight(colorValue)
      ? theme.orbit.textPrimaryForeground
      : theme.orbit.paletteWhiteNormal};
    padding: ${theme.orbit.spaceFourX} ${theme.orbit.spaceSixX};
    transition: ${theme.orbit.durationFast};
    position: relative;

    ${CopyWrapper} {
      visibility: hidden;
    }

    &:hover,
    :focus,
    :active {
      transform: scale(1.01);
      box-shadow: ${theme.orbit.elevationRaisedBoxShadow};

      ${CopyWrapper} {
        visibility: visible;
      }
    }
    ${order === "only" && `border-radius: ${theme.orbit.borderRadiusLarge}`}
    ${order === "first" &&
    full &&
    `border-radius: ${theme.orbit.borderRadiusLarge} ${theme.orbit.borderRadiusLarge} 0 0;`}
      ${order === "first" && left && `border-top-left-radius: ${theme.orbit.borderRadiusLarge}`}
      ${order === "first" && right && `border-top-right-radius: ${theme.orbit.borderRadiusLarge}`}
    ${order === "last" &&
    full &&
    `border-radius: 0 0 ${theme.orbit.borderRadiusLarge} ${theme.orbit.borderRadiusLarge};`}
      ${order === "last" && left && `border-bottom-left-radius: ${theme.orbit.borderRadiusLarge}`}
      ${order === "last" && right && `border-bottom-right-radius: ${theme.orbit.borderRadiusLarge}`}
  `}
`;
interface ColorNameHolderProps {
  isMain: boolean;
}

const ColorNameHolder = styled.div<ColorNameHolderProps>`
  ${({ isMain, theme }) => css`
    font-weight: ${theme.orbit.fontWeightBold};
    font-size: ${theme.orbit.fontSizeLarge};
    padding-bottom: ${isMain ? theme.orbit.spaceSixX : theme.orbit.spaceTwoX};
  `}
`;

const ColorHexHolder = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.orbit.fontWeightMedium};
    padding-bottom: ${theme.orbit.spaceOneX};
  `}
`;

const ColorOtherTextHolder = styled.div`
  padding-bottom: ${({ theme }) => theme.orbit.spaceOneX};
`;
interface ColorObjectShape {
  value: string | number;
  name: string;
  tokenName: string;
}

interface ColorObjectAdditionalShape {
  value: string;
  name: string;
  tokenName: string;
}

interface ColorContainerProps extends BorderingProps {
  color: ColorObjectShape | ColorObjectAdditionalShape;
}

const ColorContainer = ({ color, full, left, order, right }: ColorContainerProps) => {
  const isNormal = (name: string) => !!name.match("Normal");

  if (typeof color.value !== "string") return null;

  return (
    <ColorContainerWrapper
      tabIndex={0}
      colorValue={color.value}
      order={order}
      full={full}
      left={left}
      right={right}
    >
      <ColorNameHolder isMain={isNormal(color.name)}>{color.name}</ColorNameHolder>
      <ColorHexHolder>{color.value}</ColorHexHolder>
      <ColorOtherTextHolder>{transparentColor(color.value, 100)}</ColorOtherTextHolder>
      <ColorOtherTextHolder>{color.tokenName}</ColorOtherTextHolder>
      <CopyWrapper colorValue={color.value}>
        <Stack direction="column" spacing="XXSmall" align="end">
          <CopyButton textToCopy={color.value} colorValue={color.value} buttonText="Hex" />
          <CopyButton
            textToCopy={transparentColor(color.value, 100)}
            colorValue={color.value}
            buttonText="RGB"
          />
          <CopyButton textToCopy={color.tokenName} colorValue={color.value} buttonText="Token" />
        </Stack>
      </CopyWrapper>
    </ColorContainerWrapper>
  );
};

export default ColorContainer;
