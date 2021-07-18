import React from "react";
import { Stack, ButtonLink, Tooltip } from "@kiwicom/orbit-components";
import { ChevronUp, ChevronDown } from "@kiwicom/orbit-components/icons";
import styled from "styled-components";

import Copy from "../../images/copy.svg";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";

const StyledBoard = styled.div`
  ${({ theme }) => `
    margin-top: 0;
    padding: ${theme.orbit.spaceTwoX};
    background: ${theme.orbit.paletteCloudLight};
  `};
`;

interface Props {
  code: string;
  isEditorOpened: boolean;
  onOpenEditor: () => void;
}

const Board = ({ code, isEditorOpened, onOpenEditor }: Props) => {
  const [isCopied, copy] = useCopyToClipboard();

  return (
    <StyledBoard>
      <Stack flex justify="between" align="center">
        <Stack inline>
          <ButtonLink
            onClick={onOpenEditor}
            type="secondary"
            ariaExpanded={isEditorOpened}
            iconRight={isEditorOpened ? <ChevronUp /> : <ChevronDown />}
          >
            Code
          </ButtonLink>
          {/* <ButtonLink
            onClick={onOpenEditor}
            type="secondary"
            ariaExpanded={isEditorOpened}
            iconRight={isEditorOpened ? <ChevronUp /> : <ChevronDown />}
          >
            Playground
          </ButtonLink> */}
        </Stack>
        <Stack inline justify="end" align="center">
          <Tooltip
            preferredPosition="top"
            preferredAlign="center"
            content={isCopied ? "copied" : "copy to clipboard"}
          >
            <ButtonLink onClick={() => copy(code)} type="secondary" title="Copy to clipboard">
              <Copy />
            </ButtonLink>
          </Tooltip>
        </Stack>
      </Stack>
    </StyledBoard>
  );
};

export default Board;
