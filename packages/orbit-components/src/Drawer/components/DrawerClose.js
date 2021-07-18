// @flow
import * as React from "react";
import styled from "styled-components";

import ButtonLink from "../../ButtonLink";
import Close from "../../icons/Close";
import type { Props } from "./DrawerClose";
import defaultTheme from "../../defaultTheme";
import { left } from "../../utils/rtl";
import useTranslate from "../../hooks/useTranslate";

const StyledDrawerClose = styled.div`
  margin-${left}: ${({ theme }) => theme.orbit.spaceFourX};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledDrawerClose.defaultProps = {
  theme: defaultTheme,
};

const DrawerClose = ({ onClick }: Props): React.Node => {
  const translate = useTranslate();
  return (
    <StyledDrawerClose>
      <ButtonLink
        onClick={onClick}
        iconLeft={<Close />}
        type="secondary"
        title={translate("drawer_hide")}
      />
    </StyledDrawerClose>
  );
};

export default DrawerClose;
