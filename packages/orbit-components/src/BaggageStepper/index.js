// @flow
import * as React from "react";

import Stepper from "./Stepper";
import validateIncrement from "../utils/validateIncrement";
import validateDecrement from "../utils/validateDecrement";
import useStateWithCallback from "../hooks/useStateWithCallback";

import type { Props } from ".";

const BaggageStepper = ({ onChange, defaultValue = 0, ...props }: Props): React.Node => {
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
    selected,
    dataTest,
    minValue,
    maxValue,
    titleIncrement,
    titleDecrement,
  } = props;
  return (
    <Stepper
      disabled={disabled}
      dataTest={dataTest}
      value={value}
      name={name}
      selected={selected}
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

export default BaggageStepper;
