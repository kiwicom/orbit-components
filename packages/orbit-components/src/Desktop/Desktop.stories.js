// @flow

import * as React from "react";
import styled from "styled-components";

import Desktop from ".";

const Component = styled.div`
  height: 150px;
  width: 150px;
  background: red;
  color: #fff;
  display: flex;
  align-items: center;
  direction: column;
  justify-content: center;
`;

export default {
  title: "Desktop",
};

export const Default = (): React.Node => {
  return (
    <Desktop>
      <Component>Desktop</Component>
    </Desktop>
  );
};

Default.story = {
  parameters: {
    info: "Visible only on mq.desktop and mq.largeDesktop.",
  },
};
