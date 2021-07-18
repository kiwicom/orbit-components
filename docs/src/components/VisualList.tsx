import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Card,
  CardSection,
  Coupon,
  InputField,
  Stack,
  Text,
  Tile,
  Heading,
} from "@kiwicom/orbit-components";
import { Search } from "@kiwicom/orbit-components/icons";

import HeadingWithLink from "./HeadingWithLink";
import { IllustrationObjectShape } from "./IllustrationList";
import { IconObjectShape } from "./IconList";
import { CodeBlock } from "./Code";
import useCopyToClipboard from "../hooks/useCopyToClipboard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: ${({ theme }) => theme.orbit.spaceTwoX};
`;

interface StyledRatioContainerProps {
  smallVisual?: boolean;
}

const StyledRatioContainer = styled.div<StyledRatioContainerProps>`
  position: relative;
  padding-bottom: calc(
    400 / 677 * ${({ smallVisual }) => (smallVisual ? "25" : "100")}%
  ); /* height / width = ratio */
`;

const StyledImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

type VisualObjectShape = IllustrationObjectShape | IconObjectShape;

interface ObjectActions {
  actions(VisualObjectShape, copied?: boolean, copy?: (text: string) => void): React.ReactNode;
  getImgSource(VisualObjectShape): string;
  exampleCode(string): string;
}

interface VisualProps extends VisualListProps {
  visualName: string;
  opened: boolean;
  setOpenedVisual: React.Dispatch<React.SetStateAction<string>>;
}

const Visual = ({
  actions,
  exampleCode,
  getImgSource,
  list,
  opened,
  setOpenedVisual,
  smallVisual,
  visualName,
}: VisualProps) => {
  const [copied, copy] = useCopyToClipboard();

  const visualObject: VisualObjectShape = list[visualName];

  return (
    <div id={visualName}>
      <Tile onClick={() => setOpenedVisual(opened ? "" : visualName)}>
        <StyledRatioContainer smallVisual={smallVisual}>
          <StyledImage src={getImgSource(visualObject)} alt="" />
        </StyledRatioContainer>
        <Stack justify="between">
          <Text type="secondary">{visualName}</Text>
          {"character" in visualObject && <Coupon>{visualObject.character}</Coupon>}
        </Stack>
      </Tile>
      {opened && (
        <Card>
          <CardSection>
            <Stack>
              <HeadingWithLink noId>
                <Heading as="h3" type="title3">
                  {visualName}
                </Heading>
              </HeadingWithLink>
              <CodeBlock className="language-jsx">{exampleCode(visualName)}</CodeBlock>
              {actions(visualObject, copied, copy)}
            </Stack>
          </CardSection>
        </Card>
      )}
    </div>
  );
};

interface VisualListProps extends ObjectActions, StyledRatioContainerProps {
  list: { [name: string]: VisualObjectShape };
}

const VisualList = ({ actions, exampleCode, getImgSource, list, smallVisual }: VisualListProps) => {
  const allVisualNames = Object.keys(list);
  const [openedVisual, setOpenedVisual] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") setOpenedVisual(window.location.hash.replace("#", ""));
  }, []);

  const filteredVisualNames = allVisualNames.filter(name => name.includes(filter.toLowerCase()));

  return (
    <Stack spacing="large">
      <InputField
        prefix={<Search />}
        placeholder="Find an visual"
        value={filter}
        onChange={event => setFilter(event.currentTarget.value)}
      />
      <Grid>
        {filteredVisualNames.map(visualName => (
          <Visual
            key={visualName}
            visualName={visualName}
            opened={openedVisual === visualName}
            setOpenedVisual={setOpenedVisual}
            actions={actions}
            getImgSource={getImgSource}
            exampleCode={exampleCode}
            list={list}
            smallVisual={smallVisual}
          />
        ))}
      </Grid>
    </Stack>
  );
};

export default VisualList;
