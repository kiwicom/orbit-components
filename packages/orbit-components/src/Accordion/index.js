// @flow
import * as React from "react";
import styled from "styled-components";

import Loading from "../Loading";
import AccordionWrapper from "./components/AccordionWrapper";
import defaultTheme from "../defaultTheme";
import { Provider as SectionProvider } from "./AccordionContext";
import getSpacingToken from "../common/getSpacingToken";

import type { Props } from "./index";

export const StyledCard = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  margin-bottom: ${getSpacingToken};
`;

StyledCard.defaultProps = {
  theme: defaultTheme,
};

const Accordion = ({ children, dataTest, spaceAfter, expanded, loading }: Props) => {
  // Make first section expanded by default (index 0)
  const [expandedSection, setExpandedSection] = React.useState(0);

  React.useEffect(() => {
    if (typeof expanded !== "undefined") {
      setExpandedSection(expanded);
    }
  }, [expanded]);

  const onDefaultExpand = React.useCallback(segmentId => setExpandedSection(segmentId), [
    setExpandedSection,
  ]);

  const renderSection = item => {
    if (React.isValidElement(item)) {
      return React.cloneElement(item);
    }

    return null;
  };

  return (
    <StyledCard spaceAfter={spaceAfter} data-test={dataTest}>
      {children
        ? React.Children.map(children, (item, key) => {
            if (!item) return null;

            const { id, onExpand } = item.props;

            // This is used for the case when user wants to map sections and change their order
            // related issue: #1005
            const index = Number(item.key) || key;

            // Either use provided id or item index
            const sectionId = (typeof id !== "undefined" && id) || index;
            // Determine if section is expanded
            const isExpanded = expandedSection === sectionId;
            const handleDefaultExpand = () => onDefaultExpand(sectionId);

            return (
              <SectionProvider
                value={{ expanded: isExpanded, onExpand: onExpand || handleDefaultExpand }}
              >
                {loading ? (
                  <AccordionWrapper>
                    <Loading loading={loading} type="boxLoader">
                      {renderSection(item)}
                    </Loading>
                  </AccordionWrapper>
                ) : (
                  renderSection(item)
                )}
              </SectionProvider>
            );
          })
        : null}
    </StyledCard>
  );
};

export default Accordion;
