// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { TYPE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import SocialButton from ".";

export default {
  title: "SocialButton",
};

export const Apple = (): React.Node => {
  const children = text("Children", "Sign in with Apple");
  return (
    <SocialButton type={TYPE_OPTIONS.APPLE} onClick={action("clicked")} fullWidth>
      {children}
    </SocialButton>
  );
};

export const Facebook = (): React.Node => {
  const children = text("Children", "Sign in with Facebook");
  return (
    <SocialButton type={TYPE_OPTIONS.FACEBOOK} onClick={action("clicked")} fullWidth>
      {children}
    </SocialButton>
  );
};

export const Google = (): React.Node => {
  const children = text("Children", "Sign in with Google");
  return (
    <SocialButton type={TYPE_OPTIONS.GOOGLE} onClick={action("clicked")}>
      {children}
    </SocialButton>
  );
};

export const Twitter = (): React.Node => {
  const children = text("Children", "Sign in with Twitter");
  return (
    <SocialButton type={TYPE_OPTIONS.TWITTER} onClick={action("clicked")}>
      {children}
    </SocialButton>
  );
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <SocialButton type={TYPE_OPTIONS.APPLE} iconRight={<Icons.Airplane />}>
      Button
    </SocialButton>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
