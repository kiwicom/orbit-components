// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";
import { SharedProps, Event } from "..";

declare module "@kiwicom/orbit-components/lib/InputStepperStateless";
export type ButtonEvent = Common.Event<
  React.SyntheticEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>
>;

interface Props extends SharedProps {
  readonly value: number | string | (() => string | number);
  readonly forwardedRef?: Common.Ref;
  readonly disabledIncrement?: boolean;
  readonly disabledDecrement?: boolean;
  readonly onKeyDown?: Event;
  readonly onDecrement?: ButtonEvent;
  readonly onIncrement?: ButtonEvent;
  readonly onChange?: Event;
}

declare const InputStepperStateless: React.FunctionComponent<Props>;
export { InputStepperStateless, InputStepperStateless as default };
