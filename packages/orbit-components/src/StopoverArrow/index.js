// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import randomID from "../utils/randomID";
import defaultTheme from "../defaultTheme";
import STOPS from "./consts";

import type { Props } from "./index";

const StyledArrow = styled.svg`
  vertical-align: middle;
  fill: currentColor;
  color: ${({ theme }) => theme.orbit.iconSecondaryForeground};
  width: 36px;
  height: 7px;
  ${({ theme }) =>
    theme.rtl &&
    css`
      transform: scale(-1, 1);
    `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledArrow.defaultProps = {
  theme: defaultTheme,
};

const Stops = ({ stops }: Props) => {
  if (stops === STOPS.ONE) {
    return (
      <path d="M13 6c-.8057 0-1.5-.4763-1.8169-1.1627L.8334 4.838c-.5 0-.8334-.3334-.8334-.8334s.3333-.8333.8334-.8333l10.3457.0003C11.4941 2.4804 12.1909 2 13 2c.8087 0 1.5057.4804 1.8208 1.1715l8.763-.0003c.0834 0 .1667-.0834.1667-.1667V1.421c0-.75.9167-1.0834 1.4159-.5833l2.5842 2.5834c.3325.3333.3325.8333 0 1.1667l-2.5842 2.5834c-.4992.5008-1.416.1667-1.416-.5834V5.0046c0-.0834-.0832-.1667-.1666-.1667l-8.767-.0006C14.4997 5.5237 13.8051 6 13 6z" />
    );
  }
  if (stops === STOPS.TWO) {
    return (
      <path d="M17 6c-.8057 0-1.5-.4763-1.8169-1.1627H10.317C10 5.5237 9.3057 6 8.5 6 7.6943 6 7 5.5237 6.6831 4.8373L.8334 4.838c-.5 0-.8334-.3334-.8334-.8334s.3333-.8333.8334-.8333l5.8457.0003C6.9941 2.4804 7.6909 2 8.5 2c.8091 0 1.506.4804 1.8209 1.1715h4.8582C15.4941 2.4804 16.1909 2 17 2c.8087 0 1.5057.4804 1.8208 1.1715l4.763-.0003c.0834 0 .1667-.0834.1667-.1667V1.421c0-.75.9167-1.0834 1.4159-.5833l2.5842 2.5834c.3325.3333.3325.8333 0 1.1667l-2.5842 2.5834c-.4992.5008-1.416.1667-1.416-.5834V5.0046c0-.0834-.0832-.1667-.1666-.1667l-4.767-.0006C18.4997 5.5237 17.8051 6 17 6z" />
    );
  }
  if (stops === STOPS.THREE) {
    return (
      <path d="M18 6c-.8057 0-1.5-.4763-1.8169-1.1627h-1.3664C14.4997 5.5237 13.8052 6 13 6c-.8057 0-1.5-.4763-1.8169-1.1627H9.317C9 5.5237 8.3057 6 7.5 6 6.6943 6 6 5.5237 5.6831 4.8373L.8334 4.838c-.5 0-.8334-.3334-.8334-.8334s.3333-.8333.8334-.8333l4.8457.0003C5.9941 2.4804 6.6909 2 7.5 2c.8091 0 1.506.4804 1.8209 1.1715h1.8582C11.4941 2.4804 12.1909 2 13 2c.8087 0 1.5057.4804 1.8208 1.1715h1.3583C16.4941 2.4804 17.1909 2 18 2c.8087 0 1.5057.4804 1.8208 1.1715l3.763-.0003c.0834 0 .1667-.0834.1667-.1667V1.421c0-.75.9167-1.0834 1.4159-.5833l2.5842 2.5834c.3325.3333.3325.8333 0 1.1667l-2.5842 2.5834c-.4992.5008-1.416.1667-1.416-.5834V5.0046c0-.0834-.0832-.1667-.1666-.1667l-3.767-.0006C19.4997 5.5237 18.8051 6 18 6z" />
    );
  }
  return (
    <path d="M25.1664.8378c-.4992-.5-1.416-.1667-1.416.5833v1.5834c0 .0833-.0832.1667-.1666.1667H.8334c-.5 0-.8334.3333-.8334.8333s.3333.8334.8334.8334h22.7504c.0834 0 .1667.0833.1667.1667v1.5833c0 .75.9167 1.0842 1.4159.5834l2.5842-2.5834c.3325-.3334.3325-.8334 0-1.1667L25.1664.8378z" />
  );
};

const StopoverArrow = ({ stops = STOPS.ZERO, dataTest }: Props): React.Node => {
  const titleId = React.useMemo(() => randomID("title"), []);
  const descrId = React.useMemo(() => randomID("descr"), []);

  return (
    <StyledArrow
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 28 8"
      aria-labelledby={`${titleId} ${descrId}`}
      data-test={dataTest}
      role="img"
    >
      <title id={titleId}>Stopover arrow, {stops} stops</title>
      <desc id={descrId}>Shows how many stopovers there are between two locations</desc>
      <Stops stops={stops} />
    </StyledArrow>
  );
};

export default StopoverArrow;
