// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import { Provider as SectionProvider } from "./AccordionContext";
import getSpacingToken from "../common/getSpacingToken";

import type { Props } from ".";

export const StyledAccordion: any = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  margin-bottom: ${getSpacingToken};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledAccordion.defaultProps = {
  theme: defaultTheme,
};

const Accordion = ({
  children,
  dataTest,
  spaceAfter,
  expandedSection,
  loading,
  onExpand,
}: Props): React.Node => (
  <StyledAccordion spaceAfter={spaceAfter} data-test={dataTest}>
    {children
      ? React.Children.map(children, item => {
          if (!item) return null;

          const { id } = item.props;
          // Determine if section is expanded
          const isExpanded = expandedSection === id;
          // Callback with section id
          // onExpand is not required prop to have easier loading use case
          const handleExpand = () => onExpand && onExpand(id);

          return (
            <SectionProvider value={{ expanded: isExpanded, onExpand: handleExpand, loading }}>
              {item}
            </SectionProvider>
          );
        })
      : null}
  </StyledAccordion>
);

export default Accordion;
export { default as AccordionSection } from "./AccordionSection";
