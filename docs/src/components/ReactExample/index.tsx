import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled, { css } from "styled-components";
import { Text } from "@kiwicom/orbit-components";
import { Editor } from "react-live";
import dracula from "prism-react-renderer/themes/dracula";

import Frame from "./Frame";
import Board from "./Board";
import ViewportsRuler from "./ViewportsRuler";
import { copyImports } from "./helpers";

export type BgType = "white" | "dark" | "grid";

interface Props {
  exampleId: string;
  maxHeight?: number;
  background: BgType;
  minHeight?: number;
}

const StyledWrapper = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.boxShadowRaisedSubtle};
    border-radius: 12px;
    overflow: hidden;
  `};
`;

const StyledWrapperFrame = styled.div<{ width: number }>`
  ${({ width }) => css`
    margin: 0 auto;
    width: ${width}px;
  `}
`;

const ReactExample = ({ exampleId, background = "white", minHeight, maxHeight }: Props) => {
  const [code, setCode] = React.useState("");
  const [isEditorOpened, setOpenEditor] = React.useState(false);
  const [origin, setOrigin] = React.useState("");
  const [width, setPreviewWidth] = React.useState(0);

  const { allFile } = useStaticQuery(
    graphql`
      query ExamplesQuery {
        allFile(filter: { absolutePath: { regex: "/__examples__/" } }) {
          nodes {
            id
            fields {
              example
              example_id
              scope {
                name
                path
                default
              }
            }
          }
        }
      }
    `,
  );

  React.useEffect(() => {
    const key = exampleId.toLowerCase();
    if (code) window.localStorage.setItem(key, code);
    setOrigin(window.location.origin);

    return () => window.localStorage.removeItem(key);
  }, [setCode, code, exampleId, setOrigin]);

  const example = allFile.nodes.find(n => n.fields.example_id === exampleId);
  const handleChangeRulerSize = React.useCallback(size => setPreviewWidth(size), []);

  if (!example) return <Text>Could not find example with the id: {exampleId}</Text>;

  const imports = copyImports(example.fields.scope);
  const codeWithImports = [imports, example.fields.example].join("\n");

  return (
    <StyledWrapper>
      <ViewportsRuler onChangeSize={handleChangeRulerSize} />
      <StyledWrapperFrame width={width}>
        <Frame
          origin={origin}
          pageId={example.id}
          exampleId={exampleId}
          minHeight={minHeight}
          maxHeight={maxHeight}
          background={background}
        />
      </StyledWrapperFrame>
      <Board
        exampleId={exampleId}
        isEditorOpened={isEditorOpened}
        onOpenEditor={() => setOpenEditor(!isEditorOpened)}
        code={codeWithImports}
        origin={origin}
      />
      {isEditorOpened && (
        <Editor
          style={{ margin: 0, borderRadius: "0 0 12px 12px" }}
          theme={dracula}
          onChange={str => setCode(str)}
          language="jsx"
          code={example.fields.example}
        />
      )}
    </StyledWrapper>
  );
};

export default ReactExample;
