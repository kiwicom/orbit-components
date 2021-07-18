// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import Heading from "../Heading";
import Stack from "../Stack";
import ButtonLink from "../ButtonLink";
import ChevronDown from "../icons/ChevronDown";
import Slide from "../utils/Slide";
import defaultTheme from "../defaultTheme";
import randomID from "../utils/randomID";
import useBoundingRect from "../hooks/useBoundingRect";

import type { Props } from "./index";

const AnimatedIcon = styled(ChevronDown)`
  transition: transform ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  ${({ expanded }) =>
    expanded &&
    css`
      transform: rotate(180deg);
    `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
AnimatedIcon.defaultProps = {
  theme: defaultTheme,
};
const StyledCollapse = styled.div`
  width: 100%;
  display: block;
  border-bottom: 1px solid ${({ theme }) => theme.orbit.paletteCloudNormal};
  padding-bottom: ${({ theme }) => theme.orbit.spaceThreeX};
  margin-bottom: ${({ theme }) => theme.orbit.spaceFourX};
  :last-child,
  :only-child {
    border: 0;
    margin: 0;
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCollapse.defaultProps = {
  theme: defaultTheme,
};

const StyledCollapseLabel = styled.div`
  width: 100%;
  display: block;
  cursor: pointer;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCollapseLabel.defaultProps = {
  theme: defaultTheme,
};

const StyledCollapseChildren = styled.div`
  margin: ${({ theme }) => theme.orbit.spaceThreeX} 0;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCollapseChildren.defaultProps = {
  theme: defaultTheme,
};

const StyledActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Collapse = ({
  initialExpanded = false,
  expanded: expandedProp,
  label,
  children,
  dataTest,
  onClick,
  actions,
}: Props): React.Node => {
  const isControlledComponent = React.useMemo(() => expandedProp != null, [expandedProp]);
  const [expandedState, setExpandedState] = React.useState(
    isControlledComponent ? expandedProp : initialExpanded,
  );
  const expanded = isControlledComponent ? expandedProp : expandedState;
  const [{ height }, node] = useBoundingRect({ height: expanded ? null : 0 });

  const slideID = React.useMemo(() => randomID("slideID"), []);
  const labelID = React.useMemo(() => randomID("labelID"), []);

  const handleClick = React.useCallback(
    event => {
      if (!isControlledComponent) {
        if (onClick) {
          onClick(event, !expanded);
        }

        setExpandedState(!expanded);
      } else if (onClick) {
        onClick(event, !expanded);
      }
    },
    [expanded, isControlledComponent, onClick],
  );

  return (
    <StyledCollapse data-test={dataTest}>
      <StyledCollapseLabel onClick={handleClick} role="button" id={labelID}>
        <Stack justify="between" align="center">
          <Heading type="title4">{label}</Heading>
          {/* TODO: dictionary for title */}
          <Stack inline grow={false} align="center" spacing="small">
            <StyledActionsWrapper
              onClick={ev => {
                ev.stopPropagation();
              }}
            >
              {actions}
            </StyledActionsWrapper>
            <ButtonLink
              iconLeft={<AnimatedIcon expanded={expanded} />}
              size="small"
              type="secondary"
              ariaLabelledby={labelID}
              ariaExpanded={expanded}
              ariaControls={slideID}
            />
          </Stack>
        </Stack>
      </StyledCollapseLabel>
      <Slide maxHeight={height} expanded={expanded} id={slideID} ariaLabelledBy={labelID}>
        <StyledCollapseChildren ref={node}>{children}</StyledCollapseChildren>
      </Slide>
    </StyledCollapse>
  );
};

export default Collapse;
