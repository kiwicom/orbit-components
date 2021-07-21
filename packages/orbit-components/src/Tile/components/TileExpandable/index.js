// @flow
import * as React from "react";

import Slide from "../../../utils/Slide";
import randomID from "../../../utils/randomID";
import TileContent from "../TileContent";
import TileWrapper from "../TileWrapper";
import TileHeader from "../TileHeader";
import handleKeyDown from "../../../utils/handleKeyDown";
import useBoundingRect from "../../../hooks/useBoundingRect";

import type { Props } from ".";

const TileExpandable = ({
  initialExpanded,
  noPadding,
  children,
  onClick,
  title,
  description,
  header,
  icon,
  dataTest,
  htmlTitle,
}: Props): React.Node => {
  const [expanded, setExpanded] = React.useState(initialExpanded);
  const [{ height }, node] = useBoundingRect({ height: initialExpanded ? null : 0 });

  const handleClick = event => {
    if (onClick) {
      onClick(event);
    }
    setExpanded(prevExpanded => !prevExpanded);
  };

  const hasHeader = !!(title || description || icon || header);

  const slideID = React.useMemo(() => randomID("slideID"), []);
  const labelID = React.useMemo(() => randomID("labelID"), []);
  return (
    <TileWrapper
      onClick={handleClick}
      onKeyDown={handleKeyDown(onClick, () => setExpanded(prevExpanded => !prevExpanded))}
      role="button"
      ariaExpanded={expanded}
      ariaControls={slideID}
      tabIndex="0"
      id={labelID}
      dataTest={dataTest}
      htmlTitle={htmlTitle}
    >
      {hasHeader && (
        <TileHeader
          title={title}
          description={description}
          icon={icon}
          header={header}
          expanded={expanded}
          expandable
        />
      )}
      <Slide maxHeight={height} expanded={expanded} id={slideID} ariaLabelledBy={labelID}>
        <TileContent noPadding={noPadding} ref={node} withBorder={hasHeader}>
          {children}
        </TileContent>
      </Slide>
    </TileWrapper>
  );
};

export default TileExpandable;
