// @flow
import * as React from "react";
import styled from "styled-components";

import { ItineraryPartProvider } from "./context";
import Stack from "../../Stack";
import ItineraryPartStatus from "./components/ItineraryPartStatus";
import getSpacingToken from "../../common/getSpacingToken";
import defaultTheme from "../../defaultTheme";

import type { Props } from ".";

const StyledWrapper = styled.div`
  position: relative;
  margin-bottom: ${getSpacingToken};
`;

StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const ItineraryPart = ({ status, label, children, spaceAfter, dataTest }: Props) => {
  const content = React.Children.toArray(children);
  const refs = React.useRef([]);
  const [calculatedWidth, setCalculatedWidth] = React.useState(0);

  React.useEffect(() => {
    if (refs.current) {
      const widths = refs.current.map(r => r.clientWidth).filter(Number);
      setCalculatedWidth(Math.max(...widths));
    }
  }, [setCalculatedWidth]);

  const parts =
    content &&
    content.length > 0 &&
    React.Children.map(content, (el, i) => {
      return (
        <ItineraryPartProvider
          index={i}
          last={i === content.length - 1}
          isNextHidden={content[i + 1] && content[i + 1].props.hidden}
          count={content.length}
          isHidden={el.props.hidden}
          hasStatus={!!status}
          calculatedWidth={calculatedWidth}
        >
          {el.type.displayName === "ItineraryPartPlace"
            ? // eslint-disable-next-line no-return-assign
              React.cloneElement(el, { ref: r => (refs.current[i] = r) })
            : el}
        </ItineraryPartProvider>
      );
    });

  return (
    <StyledWrapper spaceAfter={spaceAfter} data-test={dataTest}>
      {status ? (
        <ItineraryPartStatus type={status} label={label} offset={calculatedWidth}>
          <Stack direction="column">{parts}</Stack>
        </ItineraryPartStatus>
      ) : (
        <Stack direction="column">{parts}</Stack>
      )}
    </StyledWrapper>
  );
};

export default ItineraryPart;

export { default as ItineraryPartStatus } from "./components/ItineraryPartStatus";
export { default as ItineraryPartPlace } from "./components/ItineraryPartPlace";
export { default as ItineraryPartDetail } from "./components/ItineraryPartDetail";
