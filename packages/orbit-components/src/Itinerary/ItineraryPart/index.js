// @flow
import * as React from "react";
import styled from "styled-components";

import { ItineraryPartProvider } from "./context";
import Stack from "../../Stack";
import ItineraryPartStatus from "./ItineraryPartStatus";
import getSpacingToken from "../../common/getSpacingToken";
import defaultTheme from "../../defaultTheme";

import type { Props } from ".";

const StyledWrapper = styled.div`
  position: relative;
  margin-bottom: ${getSpacingToken};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const ItineraryPart = ({ status, label, children, spaceAfter, dataTest }: Props): React.Node => {
  const content = React.Children.toArray(children);

  const parts = content && content.length > 0 && (
    <Stack direction="column">
      {React.Children.map(content, (el, i) => {
        return (
          <ItineraryPartProvider
            index={i}
            last={i === content.length - 1}
            isNextHidden={content[i + 1] && content[i + 1].props.hidden}
            count={content.length}
            isHidden={el.props.hidden}
            hasStatus={!!status}
          >
            {el}
          </ItineraryPartProvider>
        );
      })}
    </Stack>
  );

  return (
    <StyledWrapper spaceAfter={spaceAfter} data-test={dataTest}>
      {status ? (
        <ItineraryPartStatus type={status} label={label}>
          {parts}
        </ItineraryPartStatus>
      ) : (
        parts
      )}
    </StyledWrapper>
  );
};

export default ItineraryPart;
