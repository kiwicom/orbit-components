// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import { TYPE_OPTIONS, HEIGHT, TYPE_VARIANT } from "./consts";

import type { Props } from ".";

const StyledButtonMobileStore = styled(({ theme, type, ...props }) => (
  <a {...props}>{props.children}</a>
))`
  display: inline-block;
  height: ${HEIGHT};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledButtonMobileStore.defaultProps = {
  theme: defaultTheme,
};

const src = {
  [TYPE_VARIANT.DARK]: {
    appStore:
      "https://images.kiwi.com/common/AppStoreGrayButton.png, https://images.kiwi.com/common/AppStoreGrayButton@2x.png 2x",
    googlePlay:
      "https://images.kiwi.com/common/GooglePlayGrayButton.png, https://images.kiwi.com/common/GooglePlayGrayButton@2x.png 2x",
  },
  [TYPE_VARIANT.LIGHT]: {
    appStore:
      "https://images.kiwi.com/common/AppStoreLightButton.png, https://images.kiwi.com/common/AppStoreLightButton@2x.png 2x",
    googlePlay:
      "https://images.kiwi.com/common/GooglePlayLightButton.png, https://images.kiwi.com/common/GooglePlayLightButton@2x.png 2x",
  },
};

const ButtonMobileStore = ({
  type = TYPE_OPTIONS.APPSTORE,
  variant = TYPE_VARIANT.DARK,
  href,
  onClick,
  dataTest,
  alt = "",
  stopPropagation = false,
}: Props): React.Node => {
  const onClickHandler = ev => {
    if (stopPropagation) {
      ev.stopPropagation();
      if (onClick) onClick();
    }
    if (onClick) onClick();
  };

  return (
    <StyledButtonMobileStore
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClickHandler}
      data-test={dataTest}
    >
      <img srcSet={src[variant][type]} height={HEIGHT} alt={alt} />
    </StyledButtonMobileStore>
  );
};

export default ButtonMobileStore;
