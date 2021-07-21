// @flow
import * as React from "react";
import styled from "styled-components";

import Stack from "../Stack";
import useMediaQuery from "../hooks/useMediaQuery";
import { TimelineStatusProvider, TimelineStepContext } from "./TimelineContext";
import getSpacingToken from "../common/getSpacingToken";
import themeDefault from "../defaultTheme";

import type { Props } from ".";

const WrapperStyled = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: ${getSpacingToken};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
WrapperStyled.defaultProps = {
  theme: themeDefault,
};

const Timeline = ({ children, spaceAfter, dataTest }: Props): null | React.Node => {
  const childrenArr = React.Children.toArray(children);
  const { isDesktop } = useMediaQuery();

  return childrenArr && childrenArr.length > 0 ? (
    <WrapperStyled spaceAfter={spaceAfter} data-test={dataTest}>
      <Stack flex shrink direction={isDesktop ? "row" : "column"}>
        <TimelineStatusProvider>
          {React.Children.map(childrenArr, (child, i) => {
            if (React.isValidElement(child)) {
              return (
                <TimelineStepContext.Provider
                  value={{ index: i, last: i + 1 === childrenArr.length }}
                >
                  {child}
                </TimelineStepContext.Provider>
              );
            }
            return null;
          })}
        </TimelineStatusProvider>
      </Stack>
    </WrapperStyled>
  ) : null;
};

export default Timeline;
export { default as TimelineStep } from "./TimelineStep";
