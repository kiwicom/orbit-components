// @flow
import * as React from "react";

import { SIZE_OPTIONS } from "../InputField/consts";
import KEY_CODE_MAP from "../common/keyMaps";
import InputStepperStateless from "./InputStepperStateless";
import validateIncrement from "../utils/validateIncrement";
import validateDecrement from "../utils/validateDecrement";
import useStateWithCallback from "../hooks/useStateWithCallback";
import useTranslate from "../hooks/useTranslate";

import type { Props } from ".";

const InputStepper: React.AbstractComponent<Props, HTMLElement> = React.forwardRef<
  Props,
  HTMLElement,
>(({ onChange, defaultValue = 0, disabled = false, ...props }, ref) => {
  const translate = useTranslate();
  const [value, setValue] = useStateWithCallback<number>(defaultValue, onChange);

  const incrementCounter = () => {
    const { maxValue = Number.POSITIVE_INFINITY, step = 1 } = props;

    if (!disabled) {
      setValue(validateIncrement({ value, maxValue, step }));
    }
  };

  const decrementCounter = () => {
    const { minValue = Number.NEGATIVE_INFINITY, step = 1 } = props;
    if (!disabled) {
      setValue(validateDecrement({ value, minValue, step }));
    }
  };

  const handleIncrementCounter = (
    ev?: SyntheticEvent<HTMLButtonElement> | SyntheticKeyboardEvent<HTMLButtonElement>,
  ) => {
    if (ev && ev.type === "click") {
      incrementCounter();
    }
    if (ev && ev.type === "keydown") {
      if (ev.keyCode === KEY_CODE_MAP.SPACE) {
        ev.preventDefault();
        incrementCounter();
      } else if (ev.keyCode === KEY_CODE_MAP.ENTER) {
        incrementCounter();
      }
    }
  };

  const handleDecrementCounter = (
    ev?: SyntheticEvent<HTMLButtonElement> | SyntheticKeyboardEvent<HTMLButtonElement>,
  ) => {
    if (ev && ev.type === "click") {
      decrementCounter();
    }
    if (ev && ev.type === "keydown") {
      if (ev.keyCode === KEY_CODE_MAP.SPACE) {
        ev.preventDefault();
        decrementCounter();
      } else if (ev.keyCode === KEY_CODE_MAP.ENTER) {
        decrementCounter();
      }
    }
  };

  const handleKeyDown = (ev: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (ev.keyCode === KEY_CODE_MAP.ARROW_DOWN) {
      ev.preventDefault();
      decrementCounter();
    }
    if (ev.keyCode === KEY_CODE_MAP.ARROW_UP) {
      ev.preventDefault();
      incrementCounter();
    }
  };

  const handleChange = (ev: SyntheticInputEvent<HTMLInputElement>) => {
    const eventValue = ev && parseInt(ev.target.value, 10);
    const prevValue = value;

    const { maxValue, minValue } = props;

    if (disabled) return;
    if (prevValue <= eventValue) {
      setValue(validateIncrement({ value, maxValue, step: 0 }));
    }

    if (prevValue >= eventValue) {
      setValue(validateDecrement({ value, minValue, step: 0 }));
    }
  };

  const {
    label,
    error,
    onBlur,
    onFocus,
    help,
    name,
    dataTest,
    size = SIZE_OPTIONS.NORMAL,
    required,
    readOnly,
    minValue,
    maxValue,
    tabIndex,
    spaceAfter,
    titleIncrement,
    titleDecrement,
  } = props;

  return (
    <InputStepperStateless
      dataTest={dataTest}
      size={size}
      label={label}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      name={name}
      error={error}
      help={help}
      onChange={handleChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={handleKeyDown}
      value={value || 0}
      minValue={minValue}
      maxValue={maxValue}
      tabIndex={tabIndex}
      forwardedRef={ref}
      spaceAfter={spaceAfter}
      onDecrement={handleDecrementCounter}
      onIncrement={handleIncrementCounter}
      titleIncrement={titleIncrement || translate("increment_value")}
      titleDecrement={titleDecrement || translate("decrement_value")}
    />
  );
});

InputStepper.displayName = "InputStepper";

export default InputStepper;

export { default as InputStepperStateless } from "./InputStepperStateless";
