// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import transition from "../../../utils/transition";
import defaultTheme from "../../../defaultTheme";
import Slide from "../../../utils/Slide";
import mq from "../../../utils/mediaQuery";
import useBoundingRect from "../../../hooks/useBoundingRect";

const StyledCardSectionContent = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightNormal};
  color: ${({ theme }) => theme.orbit.textPrimaryForeground};
  width: 100%;
  border-top: ${({ theme, expanded, noSeparator }) =>
    expanded && !noSeparator
      ? `1px solid ${theme.orbit.paletteCloudNormal}`
      : `0px solid ${theme.orbit.paletteCloudNormal}`};
  padding-top: ${({ hasPaddingTop, theme }) => hasPaddingTop && theme.orbit.spaceFourX};
  transition: ${transition(["padding", "border-top"], "fast", "linear")};

  ${mq.largeMobile(css`
    padding-top: ${({ theme, hasPaddingTop }) => hasPaddingTop && theme.orbit.spaceSixX};
  `)}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCardSectionContent.defaultProps = {
  theme: defaultTheme,
};

type Props = {|
  expandable: boolean,
  expanded?: boolean,
  children?: React.Node,
  noSeparator?: boolean,
  hasPaddingTop: boolean,
  slideID: string,
  labelID: string,
|};

const SectionContent = ({
  expandable,
  expanded,
  children,
  noSeparator,
  hasPaddingTop,
  slideID,
  labelID,
}: Props): React.Node => {
  const [{ height }, ref] = useBoundingRect({ height: expanded ? null : 0 });

  return (
    <>
      {expandable ? (
        <Slide maxHeight={height} expanded={expanded} id={slideID} ariaLabelledBy={labelID}>
          <StyledCardSectionContent
            noSeparator={noSeparator}
            ref={ref}
            expanded={expanded}
            hasPaddingTop={hasPaddingTop}
            expandable={expandable}
          >
            {children}
          </StyledCardSectionContent>
        </Slide>
      ) : (
        <StyledCardSectionContent ref={ref} hasPaddingTop={hasPaddingTop}>
          {children}
        </StyledCardSectionContent>
      )}
    </>
  );
};

export default SectionContent;
