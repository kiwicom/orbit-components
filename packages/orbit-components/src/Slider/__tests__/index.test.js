// @flow

import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Slider from "..";

describe("Slider", () => {
  it("should have expected DOM output", () => {
    const onChange = jest.fn();
    const onChangeBefore = jest.fn();
    const onChangeAfter = jest.fn();
    const label = "bur";
    const ariaLabel = "label";
    const ariaValueText = "text";
    const minValue = 0;
    const maxValue = 100;
    const defaultValue = 2;
    const valueDescription = "description";
    const dataTest = "test";

    render(
      <Slider
        onChange={onChange}
        dataTest={dataTest}
        onChangeBefore={onChangeBefore}
        onChangeAfter={onChangeAfter}
        label={label}
        defaultValue={defaultValue}
        valueDescription={valueDescription}
        ariaLabel={ariaLabel}
        ariaValueText={ariaValueText}
        minValue={minValue}
        maxValue={maxValue}
      />,
    );

    const slider = screen.getByRole("slider");

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByText(valueDescription)).toBeInTheDocument();
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByLabelText(ariaLabel)).toBeInTheDocument();
    expect(slider).toHaveAttribute("tabindex", "0");
    expect(slider).toHaveAttribute("aria-valuemax", maxValue.toString());
    expect(slider).toHaveAttribute("aria-valuemin", minValue.toString());
    expect(slider).toHaveAttribute("aria-valuenow", defaultValue.toString());
    expect(slider).toHaveAttribute("aria-valuetext", ariaValueText.toString());

    // $FlowFixMe
    userEvent.tab(slider);
    expect(onChangeBefore).toHaveBeenCalled();
    fireEvent.blur(slider);
    expect(onChangeAfter).toHaveBeenCalled();

    fireEvent.mouseDown(slider, { button: 0, buttons: 0 });
    expect(onChangeBefore).toHaveBeenCalledTimes(2);
    expect(onChangeAfter).toHaveBeenCalled();

    fireEvent.mouseMove(slider);
    expect(onChange).toHaveBeenCalledTimes(1);

    fireEvent.touchStart(slider);
    expect(onChangeBefore).toHaveBeenCalledTimes(3);
  });

  it("should have histogram", () => {
    const data = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
    render(<Slider histogramData={data} />);
    expect(screen.getByRole("presentation")).toBeInTheDocument();
  });

  it("should have loading histogram", () => {
    const data = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
    render(<Slider histogramData={data} histogramLoadingText="loading" histogramLoading />);
    expect(screen.getByText("loading")).toBeInTheDocument();
  });

  it("should be ranged slider", () => {
    render(<Slider defaultValue={[1, 10]} maxValue={24} minValue={1} />);
    expect(screen.getAllByRole("slider")).toHaveLength(2);
  });
});
