// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";
import { Type } from "../Badge";

declare module "@kiwicom/orbit-components/lib/NotificationBadge";

export interface Props extends Common.Global {
  readonly children?: React.ReactNode;
  readonly type?: Type;
  readonly icon?: React.ReactNode;
  readonly ariaLabel?: string;
}

declare const NotificationBadge: React.FunctionComponent<Props>;
export { NotificationBadge, NotificationBadge as default };
