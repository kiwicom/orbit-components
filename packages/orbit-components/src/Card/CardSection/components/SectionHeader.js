// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import transition from "../../../utils/transition";
import mq from "../../../utils/mediaQuery";
import { getSize } from "../../../Icon";
import { ICON_SIZES } from "../../../Icon/consts";
import defaultTheme from "../../../defaultTheme";
import Header from "../../components/Header";
import type { As } from "../../../Heading";

const SpacingMobile = css`
  ${({ theme }) => String(parseInt(theme.orbit.spaceFourX, 10) + 1)}px;
`;

const SpacingDesktop = css`
  ${({ theme }) => String(parseInt(theme.orbit.spaceSixX, 10) + 1)}px;
`;

const StyledCardSectionHeader = styled.div`
  transition: ${transition(["margin"], "fast", "linear")};
  cursor: ${({ expandable }) => expandable && "pointer"};
  position: relative;
  padding: ${({ theme }) => theme.orbit.spaceFourX};
  margin: -${SpacingMobile};
  margin-bottom: ${({ expanded, isContent }) => expanded && isContent && 0};
  min-height: ${({ expandable }) => expandable && getSize(ICON_SIZES.MEDIUM)};

  ${mq.largeMobile(css`
    margin: -${SpacingDesktop};
    padding: ${({ theme }) => theme.orbit.spaceSixX};
    margin-bottom: ${({ expanded, isContent }) => expanded && isContent && 0};
  `)}

  &:hover {
    background: ${({ theme, expandable }) => expandable && theme.orbit.paletteWhiteNormalSecondary};
  }

  &:focus {
    background: ${({ theme, expandable }) => expandable && theme.orbit.paletteWhiteNormalSecondary};
    outline: none;
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCardSectionHeader.defaultProps = {
  theme: defaultTheme,
};

type Props = {|
  title?: React.Node,
  titleAs?: As,
  description?: React.Node,
  icon?: React.Node,
  actions?: React.Node,
  dataA11ySection?: string,
  header?: React.Node,
  expandable?: boolean,
  expanded?: boolean,
  handleKeyDown: (ev: SyntheticKeyboardEvent<HTMLDivElement>) => void,
  onClick?: () => void,
  slideID: string,
  isContent: boolean,
  labelID: string,
|};

const CardSectionHeader = ({
  title,
  titleAs,
  description,
  icon,
  isContent,
  expandable,
  expanded,
  onClick,
  slideID,
  labelID,
  actions,
  handleKeyDown,
  header,
  dataA11ySection,
}: Props): React.Node => {
  return (
    <StyledCardSectionHeader
      expandable={expandable}
      expanded={expanded}
      onClick={onClick}
      aria-expanded={expandable ? expanded : undefined}
      aria-controls={expandable ? slideID : undefined}
      id={labelID}
      role={expandable ? "button" : undefined}
      onKeyDown={handleKeyDown}
      tabIndex={expandable ? "0" : undefined}
      isContent={isContent}
    >
      <Header
        title={title}
        titleAs={titleAs}
        description={description}
        icon={icon}
        expandable={expandable}
        header={header}
        expanded={expanded}
        actions={actions}
        isSection
        dataA11ySection={dataA11ySection}
      />
    </StyledCardSectionHeader>
  );
};

export default CardSectionHeader;
