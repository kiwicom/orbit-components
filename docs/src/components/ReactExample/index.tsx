import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled, { css } from "styled-components";
import { Text } from "@kiwicom/orbit-components";
import { Editor } from "react-live";
import dracula from "prism-react-renderer/themes/dracula";

import Playground from "./Playground";
import Frame from "./Frame";
import Board from "./Board";
import ViewportsRuler from "./ViewportsRuler";
import { copyImports, transform } from "./helpers";

export type BgType = "white" | "dark" | "grid";

interface Props {
  exampleId: string;
  maxHeight?: number;
  background: BgType;
  minHeight?: number;
}

const StyledWrapper = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.orbit.boxShadowRaisedSubtle};
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
  const [isPlaygroundOpened, setPlaygroundOpened] = React.useState(false);
  const [origin, setOrigin] = React.useState("");
  const [width, setPreviewWidth] = React.useState(0);

  const { allExample } = useStaticQuery(
    graphql`
      query ExamplesQuery {
        allExample {
          nodes {
            id
            example
            example_id
            scope {
              name
              path
              default
            }
            fields {
              knobs {
                component
                name
                defaultValue
                type
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
    if (window.localStorage.getItem(key)) {
      setCode(window.localStorage.getItem(key) || "");
    }
    setOrigin(window.location.origin);

    return () => window.localStorage.removeItem(key);
  }, [setCode, code, exampleId, setOrigin]);

  const example = allExample.nodes.find(({ example_id }) => example_id === exampleId.toLowerCase());
  const handleChangeRulerSize = React.useCallback(size => setPreviewWidth(size), []);

  const handleKnobChange = React.useCallback(
    knob => {
      setCode(transform(example.example, knob));
    },
    [example, setCode],
  );

  if (!example) return <Text>Could not find example with the id: {exampleId}</Text>;

  const imports = copyImports(example.scope);
  const codeWithImports = [imports, code].join("\n");

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
        isPlaygroundOpened={isPlaygroundOpened}
        onOpenEditor={() => {
          setPlaygroundOpened(false);
          setOpenEditor(!isEditorOpened);
        }}
        onOpenPlayground={() => {
          setOpenEditor(false);
          setPlaygroundOpened(!isPlaygroundOpened);
        }}
        code={codeWithImports}
        origin={origin}
      />
      {isEditorOpened && (
        <Editor
          style={{ margin: 0, borderRadius: "0 0 12px 12px" }}
          theme={dracula}
          onChange={str => {
            setCode(str);
          }}
          language="jsx"
          code={code || example.example}
        />
      )}
      {isPlaygroundOpened && (
        <Playground knobs={example.fields.knobs} onChange={handleKnobChange} />
      )}
    </StyledWrapper>
  );
};

export default ReactExample;
