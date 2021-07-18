import * as React from "react";
import styled, { css } from "styled-components";
import { Stack, Text } from "@kiwicom/orbit-components";

import CopyIcon from "../../images/icons/CopyIcon.svg";
import { ColorValueShape } from "./ColorContainer";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";

import { isLight } from ".";

interface CopyButtonProps {
  buttonText: string;
  colorValue: string;
  textToCopy: string;
}

const StyledButton = styled.button<ColorValueShape>`
  ${({ colorValue, theme }) => css`
    background: ${isLight(colorValue)
      ? theme.orbit.paletteInkNormal
      : theme.orbit.paletteWhiteNormal};
    padding: 0 ${theme.orbit.spaceTwoX};
    border-radius: 12px;
    text-transform: uppercase;

    svg {
      color: ${isLight(colorValue) ? theme.orbit.paletteWhiteNormal : theme.orbit.paletteInkNormal};
    }
  `}
`;

const CopyButton = ({ buttonText, colorValue, textToCopy }: CopyButtonProps) => {
  const [copied, copy] = useCopyToClipboard();

  return (
    <StyledButton colorValue={colorValue} type="button" onClick={() => copy(textToCopy)}>
      <Stack direction="row" spacing="XXSmall" align="center">
        <Text type={isLight(colorValue) ? "white" : "primary"}>
          {copied ? "copied" : buttonText}
        </Text>
        {!copied && <CopyIcon />}
      </Stack>
    </StyledButton>
  );
};

export default CopyButton;
