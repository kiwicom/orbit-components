// @flow
import * as React from "react";

import { useAccordion } from "../AccordionContext";
import randomID from "../../utils/randomID";
import useBoundingRect from "../../hooks/useBoundingRect";
import Slide from "../../utils/Slide";
import Loading from "../../Loading";
import AccordionWrapper from "../components/AccordionWrapper";
import SectionHeader from "./components/SectionHeader";
import SectionFooter from "./components/SectionFooter";
import SectionContent from "./components/SectionContent";

import type { Props } from ".";

const AccordionSection = ({
  children,
  header,
  footer,
  actions,
  dataTest,
  expandable = true,
}: Props): React.Node => {
  const { expanded, onExpand, loading } = useAccordion();

  const slideID = React.useMemo(() => randomID("slideID"), []);
  const isExpanded = expandable && expanded;

  const [{ height }, ref] = useBoundingRect({ height: isExpanded ? null : 0 });

  return (
    <AccordionWrapper dataTest={dataTest}>
      <Loading loading={loading} type="boxLoader" dataTest={dataTest && `${dataTest}Loading`}>
        {header && (
          <SectionHeader
            actions={actions}
            expanded={Boolean(isExpanded)}
            onExpand={onExpand}
            expandable={expandable}
            dataTest={dataTest}
          >
            {header}
          </SectionHeader>
        )}

        <Slide maxHeight={height} expanded={isExpanded} id={slideID} ariaLabelledBy={slideID}>
          <div ref={ref}>
            {children && <SectionContent dataTest={dataTest}>{children}</SectionContent>}
            {footer && <SectionFooter dataTest={dataTest}>{footer}</SectionFooter>}
          </div>
        </Slide>
      </Loading>
    </AccordionWrapper>
  );
};

export default AccordionSection;
