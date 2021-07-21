// @flow
import * as React from "react";

import StepperStateless from "./StepperStateless";
import validateIncrement from "../utils/validateIncrement";
import validateDecrement from "../utils/validateDecrement";
import useStateWithCallback from "../hooks/useStateWithCallback";

import type { Props } from ".";

const Stepper = ({ onChange, defaultValue = 0, ...props }: Props): React.Node => {
  const [value, setValue] = useStateWithCallback<number>(defaultValue, onChange);

  const incrementCounter = () => {
    const { maxValue = Number.POSITIVE_INFINITY, step = 1 } = props;

    setValue(validateIncrement({ value, maxValue, step }));
  };

  const decrementCounter = () => {
    const { minValue = Number.NEGATIVE_INFINITY, step = 1 } = props;

    setValue(validateDecrement({ value, minValue, step }));
  };

  const handleKeyDown = (ev: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (ev.keyCode === 40) {
      ev.preventDefault();
      decrementCounter();
    }
    if (ev.keyCode === 38) {
      ev.preventDefault();
      incrementCounter();
    }
  };

  const {
    onBlur,
    onFocus,
    disabled,
    name,
    dataTest,
    minValue,
    maxValue,
    titleIncrement,
    titleDecrement,
  } = props;
  return (
    <StepperStateless
      disabled={disabled}
      dataTest={dataTest}
      value={value}
      name={name}
      minValue={minValue}
      maxValue={maxValue}
      onKeyDown={handleKeyDown}
      onBlur={onBlur}
      onFocus={onFocus}
      onIncrement={incrementCounter}
      onDecrement={decrementCounter}
      titleIncrement={titleIncrement}
      titleDecrement={titleDecrement}
    />
  );
};

export default Stepper;

export { default as StepperStateless } from "./StepperStateless";
