// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/InputField";

type Type = "text" | "number" | "email" | "password" | "passportid";
type InputMode = "numeric" | "tel" | "decimal" | "email" | "url" | "search" | "text" | "none";
// InputEvent
type InputEvent = Common.Event<React.SyntheticEvent<HTMLInputElement>>;
type KeyboardEvent = Common.Event<React.KeyboardEvent<HTMLInputElement>>;

export interface Props extends Common.Global, Common.Ref, Common.SpaceAfter, Common.DataAttrs {
  readonly size?: Common.InputSize;
  readonly type?: Type;
  readonly inputMode?: InputMode;
  readonly name?: string;
  readonly label?: Common.Translation;
  readonly inlineLabel?: boolean;
  readonly value?: string | number | (() => string | number);
  readonly placeholder?: Common.Translation;
  readonly prefix?: React.ReactNode;
  readonly suffix?: React.ReactNode;
  readonly help?: React.ReactNode;
  readonly error?: React.ReactNode;
  readonly tags?: React.ReactNode;
  readonly disabled?: boolean;
  readonly maxValue?: number;
  readonly minValue?: number;
  readonly maxLength?: number;
  readonly minLength?: number;
  readonly required?: boolean;
  readonly tabIndex?: string | number;
  readonly readOnly?: boolean;
  readonly autoComplete?: string;
  readonly autoFocus?: boolean;
  readonly id?: string;
  readonly insideInputGroup?: boolean;
  readonly onChange?: InputEvent;
  readonly onFocus?: InputEvent;
  readonly onBlur?: InputEvent;
  readonly onSelect?: InputEvent;
  readonly onMouseUp?: InputEvent;
  readonly onMouseDown?: InputEvent;
  readonly onKeyDown?: KeyboardEvent;
  readonly onKeyUp?: KeyboardEvent;
}

declare const InputField: React.FunctionComponent<Props>;
export { InputField, InputField as default };
