// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import { ButtonCommonProps, Size } from "../primitives/ButtonPrimitive";

declare module "@kiwicom/orbit-components/lib/Button";

type Type = "primary" | "secondary" | "critical" | "primarySubtle" | "criticalSubtle" | "white";

export interface Props extends ButtonCommonProps {
  readonly type?: Type;
  readonly size?: Size;
}

declare const Button: React.FunctionComponent<Props>;
export { Button, Button as default };
