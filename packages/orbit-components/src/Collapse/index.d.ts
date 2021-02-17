// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Collapse";

export interface Props extends Common.Global {
  readonly initialExpanded?: boolean;
  readonly expanded?: boolean;
  readonly label: Common.Translation;
  readonly children: React.ReactNode;
  readonly actions?: React.ReactNode;
  readonly onClick?: (
    e: React.SyntheticEvent<HTMLDivElement>,
    state: boolean,
  ) => void | Promise<void>;
}

declare const Collapse: React.FunctionComponent<Props>;
export { Collapse, Collapse as default };
