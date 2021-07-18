// @flow
import * as React from "react";
import styled, { css, withTheme } from "styled-components";
import { warning } from "@adeira/js";

import type { Tokens } from "../../../orbit-design-tokens/lib/index";
import transition from "../utils/transition";
import Text from "../Text";
import Heading from "../Heading";
import Stack from "../Stack";
import Hide from "../Hide";
import Handle from "./components/Handle";
import Bar from "./components/Bar";
import KEY_CODE_MAP from "../common/keyMaps";
import DEFAULT_VALUES from "./consts";
import Histogram from "./components/Histogram";
import defaultTheme from "../defaultTheme";
import mq from "../utils/mediaQuery";
import type { ThemeProps } from "../defaultTheme";
import boundingClientRect from "../utils/boundingClientRect";

import type { State, SliderCallback, Props, Value } from "./index";

const StyledSlider = styled.div`
  position: relative;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledSlider.defaultProps = {
  theme: defaultTheme,
};

const StyledSliderContent = styled.div`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: ${({ theme }) => theme.orbit.spaceTwoX};

  ${mq.tablet(css`
    width: calc(100% + 48px);
    position: absolute;
    bottom: -16px;
    left: -24px;
    right: -24px;
    opacity: 0;
    visibility: hidden;
    padding: 12px 24px 48px 24px;
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
    transition: ${transition(["all"], "fast", "ease-in-out")};

    background: transparent;
    ${({ focused, theme }) =>
      focused &&
      css`
        visibility: visible;
        opacity: 1;
        background: ${theme.orbit.paletteWhiteNormal};
        box-shadow: ${theme.orbit.elevationRaisedBoxShadow};
      `};
  `)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledSliderContent.defaultProps = {
  theme: defaultTheme,
};

const StyledSliderInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
`;

export class PureSlider extends React.PureComponent<Props & ThemeProps, State> {
  bar: {| current: ?HTMLElement |} = React.createRef<?HTMLElement>();

  static defaultProps: {| theme: {| +orbit: Tokens, +rtl?: boolean, +transitions?: boolean |} |} = {
    theme: defaultTheme,
  };

  state: State = {
    value: this.props.defaultValue || DEFAULT_VALUES.VALUE,
    handleIndex: null,
    focused: false,
  };

  componentDidUpdate(prevProps: Props) {
    const { defaultValue = DEFAULT_VALUES.VALUE } = this.props;
    const { defaultValue: prevDefaultValue = DEFAULT_VALUES.VALUE } = prevProps;
    if (this.isNotEqual(prevDefaultValue, defaultValue)) {
      const newValue = Array.isArray(defaultValue)
        ? defaultValue.map(item => Number(item))
        : Number(defaultValue);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ value: newValue });
    }
  }

  pauseEvent: (
    event:
      | SyntheticKeyboardEvent<HTMLDivElement>
      | SyntheticMouseEvent<HTMLDivElement>
      | SyntheticTouchEvent<HTMLDivElement>,
  ) => void = (
    event:
      | SyntheticKeyboardEvent<HTMLDivElement>
      | SyntheticMouseEvent<HTMLDivElement>
      | SyntheticTouchEvent<HTMLDivElement>,
  ) => {
    if (typeof event.stopPropagation === "function") {
      event.stopPropagation();
    }
    if (
      typeof event.preventDefault === "function" &&
      (typeof event.cancelable !== "boolean" || event.cancelable)
    ) {
      event.preventDefault();
    }
  };

  stopPropagation: (event: SyntheticTouchEvent<HTMLDivElement>) => void = (
    event: SyntheticTouchEvent<HTMLDivElement>,
  ) => {
    if (typeof event.stopPropagation === "function") event.stopPropagation();
  };

  isNotEqual: (a: Value, b: Value) => boolean = (a: Value, b: Value) => {
    if (Array.isArray(a) && Array.isArray(b)) {
      return a.toString() !== b.toString();
    }
    return a !== b;
  };

  calculateValue: (ratio: number, addition?: boolean, deduction?: boolean) => number = (
    ratio: number,
    addition?: boolean,
    deduction?: boolean,
  ) => {
    const { maxValue = DEFAULT_VALUES.MAX, minValue = DEFAULT_VALUES.MIN } = this.props;
    return Math.round(
      (maxValue - minValue + (addition ? 1 : 0)) * ratio + minValue - (deduction ? 1 : 0),
    );
  };

  calculateValueFromPosition: (pageX: number, throughClick?: boolean) => null | number = (
    pageX: number,
    throughClick?: boolean,
  ) => {
    const barRect = boundingClientRect(this.bar);
    if (barRect) {
      const {
        histogramData,
        histogramLoading,
        theme: { rtl },
      } = this.props;
      const { handleIndex, value } = this.state;
      const mousePosition = (rtl ? barRect.right : pageX) - (rtl ? pageX : barRect.left);
      const positionRatio = mousePosition / barRect.width;
      const hasHistogram = histogramLoading || !!histogramData;
      // when range slider
      if (Array.isArray(value)) {
        if (value[0] === value[value.length - 1]) {
          if (this.calculateValue(positionRatio, true, true) >= value[value.length - 1]) {
            return this.calculateValue(positionRatio, true, true);
          }
          return this.calculateValue(positionRatio, true);
        }
        if (this.isNotEqual(this.sortArray(value), value)) {
          if (handleIndex === 0) {
            return this.calculateValue(positionRatio, true, true);
          }
          return this.calculateValue(positionRatio, true);
        }
        const closestKey = this.findClosestKey(
          this.calculateValue(positionRatio),
          this.sortArray(value),
        );
        // when first handle of range slider or when clicked and it should move the first handle
        if (handleIndex === 0 || (throughClick && closestKey === 0)) {
          return this.calculateValue(positionRatio, true);
        }
      }
      // simple slider without histogram
      if (handleIndex === null && !hasHistogram) {
        return this.calculateValue(positionRatio);
      }
      return this.calculateValue(positionRatio, true, true);
    }
    return null;
  };

  sortArray: (arr: Value) => Value = (arr: Value): Value => {
    if (Array.isArray(arr)) {
      return arr.slice().sort((a, b) => a - b);
    }
    return arr;
  };

  findClosestKey: (goal: number, value: Value) => null | number = (goal: number, value: Value) => {
    return Array.isArray(value)
      ? value.reduce((acc, curr, index) => {
          return Array.isArray(value) && Math.abs(curr - goal) < Math.abs(value[acc] - goal)
            ? index
            : acc;
        }, 0)
      : null;
  };

  moveValueByStep: (step: number, forcedValue?: number) => number | Array<number> = (
    step: number,
    forcedValue?: number,
  ) => {
    const { value, handleIndex } = this.state;
    if (Array.isArray(value)) {
      return this.replaceValue(
        forcedValue || this.alignValue(value[Number(handleIndex)] + step),
        Number(handleIndex),
      );
    }
    return forcedValue || this.alignValue(value + step);
  };

  handleKeyDown: (event: SyntheticKeyboardEvent<HTMLDivElement>) => void = (
    event: SyntheticKeyboardEvent<HTMLDivElement>,
  ) => {
    if (event.ctrlKey || event.shiftKey || event.altKey) return;
    const {
      step = DEFAULT_VALUES.STEP,
      minValue = DEFAULT_VALUES.MIN,
      maxValue = DEFAULT_VALUES.MAX,
      theme: { rtl },
    } = this.props;
    if (event.keyCode === KEY_CODE_MAP.ARROW_UP) {
      this.pauseEvent(event);
      this.injectCallbackAndSetState(this.props.onChange, this.moveValueByStep(step));
    }
    if (event.keyCode === KEY_CODE_MAP.ARROW_DOWN) {
      this.pauseEvent(event);
      this.injectCallbackAndSetState(this.props.onChange, this.moveValueByStep(-step));
    }
    if (event.keyCode === KEY_CODE_MAP.ARROW_RIGHT) {
      const switchStep = rtl ? -step : step;
      this.pauseEvent(event);
      this.injectCallbackAndSetState(this.props.onChange, this.moveValueByStep(switchStep));
    }
    if (event.keyCode === KEY_CODE_MAP.ARROW_LEFT) {
      const switchStep = rtl ? step : -step;
      this.pauseEvent(event);
      this.injectCallbackAndSetState(this.props.onChange, this.moveValueByStep(switchStep));
    }
    if (event.keyCode === KEY_CODE_MAP.HOME) {
      this.pauseEvent(event);
      this.injectCallbackAndSetState(this.props.onChange, this.moveValueByStep(0, minValue));
    }
    if (event.keyCode === KEY_CODE_MAP.END) {
      this.pauseEvent(event);
      this.injectCallbackAndSetState(this.props.onChange, this.moveValueByStep(0, maxValue));
    }
  };

  handleBlur: () => void = () => {
    this.setState({ focused: false });
    const { value } = this.state;
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("focusout", this.handleBlur);
    this.injectCallbackAndSetState(this.props.onChangeAfter, value, true);
  };

  handleOnFocus: (i: ?number) => (event: SyntheticKeyboardEvent<HTMLDivElement>) => void = (
    i: ?number,
  ) => (event: SyntheticKeyboardEvent<HTMLDivElement>) => {
    if (typeof i === "number") this.setState({ handleIndex: i });
    const { value } = this.state;
    this.setState({ focused: true });
    this.pauseEvent(event);
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("focusout", this.handleBlur);
    this.injectCallbackAndSetState(this.props.onChangeBefore, value, true);
  };

  handleMove: (newValue: ?number) => null | number | Array<number> = (newValue: ?number) => {
    const { value, handleIndex } = this.state;
    if (newValue != null) {
      if (Array.isArray(value)) {
        return this.replaceValue(this.alignValue(newValue), Number(handleIndex));
      }
      return this.alignValue(newValue);
    }
    return null;
  };

  handleBarMouseDown: (event: SyntheticMouseEvent<HTMLDivElement>) => void = (
    event: SyntheticMouseEvent<HTMLDivElement>,
  ) => {
    const { value } = this.state;
    this.setState({ handleIndex: null });
    const newValue = this.calculateValueFromPosition(event.pageX, true);
    if (newValue) {
      if (Array.isArray(value)) {
        const index = this.findClosestKey(newValue, value);
        const replacedValue = this.replaceValue(this.alignValue(newValue), index);
        this.injectCallbackAndSetState(this.props.onChangeBefore, value, true);
        this.injectCallbackAndSetState(this.props.onChange, replacedValue);
        this.injectCallbackAndSetState(this.props.onChangeAfter, replacedValue);
      } else {
        const alignedValue = this.alignValue(newValue);
        this.injectCallbackAndSetState(this.props.onChangeBefore, value, true);
        this.injectCallbackAndSetState(this.props.onChange, alignedValue);
        this.injectCallbackAndSetState(this.props.onChangeAfter, alignedValue);
      }
    }
  };

  injectCallbackAndSetState: (
    callback: ?SliderCallback,
    newValue: ?Value,
    forced?: ?boolean,
  ) => void = (callback: ?SliderCallback, newValue: ?Value, forced: ?boolean = false) => {
    const { value } = this.state;
    if (newValue != null) {
      if (this.isNotEqual(newValue, value) || forced) {
        this.setState({ value: newValue });
        if (callback) {
          callback(this.sortArray(newValue));
        }
      }
    }
  };

  handleMouseMove: (event: SyntheticMouseEvent<HTMLDivElement>) => void = (
    event: SyntheticMouseEvent<HTMLDivElement>,
  ) => {
    const newValue = this.calculateValueFromPosition(event.pageX);
    this.pauseEvent(event);
    this.injectCallbackAndSetState(this.props.onChange, this.handleMove(newValue));
  };

  handleMouseUp: () => void = () => {
    const { value } = this.state;
    this.setState({ focused: false });
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
    this.injectCallbackAndSetState(this.props.onChangeAfter, value, true);
  };

  handleMouseDown: (i: ?number) => (event: SyntheticMouseEvent<HTMLDivElement>) => void = (
    i: ?number,
  ) => (event: SyntheticMouseEvent<HTMLDivElement>) => {
    // just allow left-click
    if (event.button === 0 && event.buttons !== 2) {
      const { value } = this.state;
      this.setState({ focused: true });
      if (typeof i === "number") this.setState({ handleIndex: i });
      window.addEventListener("mousemove", this.handleMouseMove);
      window.addEventListener("mouseup", this.handleMouseUp);
      this.pauseEvent(event);
      this.injectCallbackAndSetState(this.props.onChangeBefore, value, true);
    }
  };

  handleOnTouchMove: (event: SyntheticTouchEvent<HTMLDivElement>) => void = (
    event: SyntheticTouchEvent<HTMLDivElement>,
  ) => {
    if (event.touches.length > 1) return;
    const newValue = this.calculateValueFromPosition(event.touches[0].pageX);
    this.pauseEvent(event);
    this.injectCallbackAndSetState(this.props.onChange, this.handleMove(newValue));
  };

  handleTouchEnd: () => void = () => {
    const { value } = this.state;
    this.setState({ focused: false });
    window.removeEventListener("touchmove", this.handleOnTouchMove);
    window.removeEventListener("touchend", this.handleTouchEnd);
    this.injectCallbackAndSetState(this.props.onChangeAfter, value, true);
  };

  handleOnTouchStart: (i: ?number) => (event: SyntheticTouchEvent<HTMLDivElement>) => void = (
    i: ?number,
  ) => (event: SyntheticTouchEvent<HTMLDivElement>) => {
    if (event.touches.length <= 1) {
      this.setState({ focused: true });
      const { value } = this.state;
      if (typeof i === "number") this.setState({ handleIndex: i });
      window.addEventListener("touchmove", this.handleOnTouchMove, {
        passive: false,
      });
      window.addEventListener("touchend", this.handleTouchEnd);
      this.stopPropagation(event);
      this.injectCallbackAndSetState(this.props.onChangeBefore, value, true);
    }
  };

  alignValueToStep: (value: number) => number = (value: number) => {
    const { step = DEFAULT_VALUES.STEP } = this.props;
    if (step === 1) return value;
    const gap = value % step;
    if (gap === 0) return value;
    if (gap * 2 >= step) {
      return value - gap + step;
    }
    return value - gap;
  };

  alignValueToMaxMin: (value: number) => number = (value: number) => {
    const { maxValue = DEFAULT_VALUES.MAX, minValue = DEFAULT_VALUES.MIN } = this.props;
    if (value > maxValue) {
      return maxValue;
    }
    if (value < minValue) {
      return minValue;
    }
    return value;
  };

  alignValue: (value: number) => number = (value: number) =>
    this.alignValueToMaxMin(this.alignValueToStep(value));

  replaceValue: (newValue: number, index: ?number) => number | Array<number> = (
    newValue: number,
    index: ?number,
  ) => {
    const { value } = this.state;
    if (index == null || !Array.isArray(value)) return newValue;
    return value.map<number>((item, key) => (key === index ? newValue : item));
  };

  renderHandle: (valueNow: number, i: ?number) => React.Node = (valueNow: number, i: ?number) => {
    const {
      minValue = DEFAULT_VALUES.MIN,
      maxValue = DEFAULT_VALUES.MAX,
      histogramData,
      histogramLoading,
      ariaValueText,
      ariaLabel,
    } = this.props;
    const { handleIndex, value } = this.state;
    const key = i && encodeURIComponent(i.toString());
    const index = i || 0;
    return (
      <Handle
        tabIndex="0"
        onTop={handleIndex === i}
        valueMax={maxValue}
        valueMin={minValue}
        onMouseDown={this.handleMouseDown(i)}
        onFocus={this.handleOnFocus(i)}
        onTouchStart={this.handleOnTouchStart(i)}
        value={value}
        ariaValueText={ariaValueText}
        ariaLabel={ariaLabel}
        hasHistogram={histogramLoading || !!histogramData}
        index={index}
        key={key}
        dataTest={`SliderHandle-${index}`}
      />
    );
  };

  renderHandles: () => React.Node | Array<React.Node> = () => {
    const { value } = this.state;
    return Array.isArray(value)
      ? value.map<React.Node>((valueNow, i) => this.renderHandle(valueNow, i))
      : this.renderHandle(value);
  };

  renderSliderTexts: (biggerSpace: boolean) => null | React.Node = (biggerSpace: boolean) => {
    const { label, valueDescription, histogramDescription } = this.props;
    if (!(label || valueDescription || histogramDescription)) return null;
    return (
      <Stack direction="row" spacing="none" spaceAfter={biggerSpace ? "medium" : "small"}>
        {(label || histogramDescription) && (
          <Stack direction="column" spacing="none" basis="60%" grow>
            {label && <Heading type="title4">{label}</Heading>}
            {valueDescription && (
              <Text type="secondary" size="small">
                {valueDescription}
              </Text>
            )}
          </Stack>
        )}
        {histogramDescription && (
          <Stack shrink justify="end" grow={false}>
            <Text type="primary" size="small">
              {histogramDescription}
            </Text>
          </Stack>
        )}
      </Stack>
    );
  };

  renderHeading: (hasHistogram: boolean) => null | React.Node = (hasHistogram: boolean) => {
    if (hasHistogram) {
      return (
        <Hide on={["smallMobile", "mediumMobile", "largeMobile"]} block>
          {this.renderSliderTexts(true)}
        </Hide>
      );
    }
    return this.renderSliderTexts(true);
  };

  render(): React.Node {
    const {
      minValue = DEFAULT_VALUES.MIN,
      maxValue = DEFAULT_VALUES.MAX,
      histogramData,
      histogramLoading = false,
      histogramLoadingText,
      dataTest,
      step = DEFAULT_VALUES.STEP,
    } = this.props;
    if (histogramData) {
      const properHistogramLength = (maxValue - minValue + step) / step;
      warning(
        histogramData.length === properHistogramLength,
        `Warning: Length of histogramData array is ${histogramData.length}, but should be ${properHistogramLength}. This will cause broken visuals of the whole Histogram.`,
      );
    }
    const { value, focused } = this.state;
    const sortedValue = this.sortArray(value);
    const hasHistogram = histogramLoading || !!histogramData;
    return (
      <StyledSlider data-test={dataTest}>
        {this.renderHeading(hasHistogram)}
        {hasHistogram && (
          <StyledSliderContent focused={focused}>
            {this.renderSliderTexts(false)}
            <Histogram
              data={histogramData}
              value={sortedValue}
              min={minValue}
              step={step}
              loading={histogramLoading}
              loadingText={histogramLoadingText}
            />
          </StyledSliderContent>
        )}
        <StyledSliderInput>
          <Bar
            ref={this.bar}
            onMouseDown={this.handleBarMouseDown}
            value={sortedValue}
            max={maxValue}
            min={minValue}
            hasHistogram={hasHistogram}
          />
          {this.renderHandles()}
        </StyledSliderInput>
      </StyledSlider>
    );
  }
}

const ThemedSlider: any = withTheme(PureSlider);
ThemedSlider.displayName = "Slider";
export default ThemedSlider;
