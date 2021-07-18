// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import mq from "../../utils/mediaQuery";

import IllustrationPrimitive from "./index";

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusLarge};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
List.defaultProps = {
  theme: defaultTheme,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  width: 100%;
  min-height: 80px;
  background-color: ${({ theme }) => theme.orbit.elevationFlatBackground};
  margin-bottom: ${({ theme }) => theme.orbit.spaceSixX};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusLarge};
  border: ${({ theme }) => `${theme.orbit.elevationFlatBorderSize} solid
    ${theme.orbit.elevationFlatBorderColor}`};
  padding: ${({ theme }) => theme.orbit.spaceSixX};
  ${mq.largeMobile(css`
    flex-direction: row;
  `)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Container.defaultProps = {
  theme: defaultTheme,
};

const IllustrationJSX = styled.div`
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  font-size: 12px;
  line-height: ${({ theme }) => theme.orbit.lineHeightSmall};
  color: ${({ theme }) => theme.orbit.paletteInkNormal};
  background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
  border: ${({ theme }) => `${theme.orbit.elevationFlatBorderSize} solid
    ${theme.orbit.elevationFlatBorderColor}`};
  margin-top: ${({ theme }) => theme.orbit.spaceFourX};
  padding: ${({ theme }) => theme.orbit.spaceOneX} ${({ theme }) => theme.orbit.spaceTwoX};
  ${mq.largeMobile(css`
    margin: 0;
  `)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
IllustrationJSX.defaultProps = {
  theme: defaultTheme,
};

const IllustrationPrimitiveList = (props: {|
  images: Array<string>,
  nameOfComponent: string,
|}): React.Node => {
  return (
    <List>
      {props.images.map(illustration => {
        return (
          <Container key={illustration}>
            <IllustrationPrimitive name={illustration} />
            <IllustrationJSX>{`<${props.nameOfComponent} name="${illustration}" />`}</IllustrationJSX>
          </Container>
        );
      })}
    </List>
  );
};

export default IllustrationPrimitiveList;
