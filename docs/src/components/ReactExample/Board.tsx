import React from "react";
import { Stack, ButtonLink, Tooltip } from "@kiwicom/orbit-components";
import { ChevronUp, ChevronDown } from "@kiwicom/orbit-components/icons";
import styled from "styled-components";

import NewWindow from "../../images/new-window.svg";
import Copy from "../../images/copy.svg";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";

const StyledBoard = styled.div`
  ${({ theme }) => `
    margin-top: 0;
    padding: ${theme.orbit.spaceXSmall};
    background: ${theme.orbit.paletteCloudLight};
  `};
`;

interface Props {
  exampleId?: string;
  code: string;
  origin?: string;
  isPlaygroundOpened: boolean;
  onOpenPlayground: () => void;
  isEditorOpened: boolean;
  onOpenEditor: () => void;
}

const Board = ({
  exampleId,
  code,
  isEditorOpened,
  isPlaygroundOpened,
  onOpenPlayground,
  onOpenEditor,
  origin,
}: Props) => {
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
            Code editor
          </ButtonLink>
          <ButtonLink
            onClick={onOpenPlayground}
            type="secondary"
            ariaExpanded={isPlaygroundOpened}
            iconRight={isPlaygroundOpened ? <ChevronUp /> : <ChevronDown />}
          >
            Playground
          </ButtonLink>
        </Stack>
        <Stack inline justify="end" align="center" spacing="none">
          <Tooltip
            preferredPosition="top"
            preferredAlign="center"
            content={isCopied ? "copied" : "Copy to clipboard"}
          >
            <ButtonLink onClick={() => copy(code)} type="secondary" title="Copy to clipboard">
              <Copy />
            </ButtonLink>
          </Tooltip>
          {exampleId && (
            <Tooltip preferredPosition="top" preferredAlign="center" content="Open in a new tab">
              <ButtonLink
                type="secondary"
                external
                title="Open in a new tab"
                href={`${origin}/examples/${exampleId?.toLowerCase()}`}
              >
                <NewWindow />
              </ButtonLink>
            </Tooltip>
          )}
        </Stack>
      </Stack>
    </StyledBoard>
  );
};

export default Board;
