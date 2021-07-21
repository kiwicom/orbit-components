// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import defaultTheme from "../../defaultTheme";
import { NAME_OPTIONS, SIZE_OPTIONS, baseURL } from "../consts";
import ServiceLogo from "..";

const name = NAME_OPTIONS.AIRHELP;
const size = SIZE_OPTIONS.LARGE;

const SIZE = defaultTheme.orbit.heightServiceLogoLarge;

describe(`ServiceLogo`, () => {
  it("should have expected DOM output", () => {
    const IMAGE_PATH = `${baseURL}/logos/0x${parseInt(SIZE, 10)}/${name}.png`;
    const IMAGE_PATH_RETINA = `${baseURL}/logos/0x${parseInt(SIZE, 10) * 2}/${name}.png`;
    const dataTest = "test";

    render(<ServiceLogo dataTest={dataTest} name={name} size={size} />);

    expect(screen.getByRole("img")).toHaveAttribute("src", IMAGE_PATH);
    expect(screen.getByRole("img")).toHaveAttribute("srcSet", `${IMAGE_PATH_RETINA} 2x`);
    expect(screen.getByAltText(name)).toBeInTheDocument();
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
  });

  it("should be grayscale", () => {
    render(<ServiceLogo name={name} size={size} grayScale />);

    const IMAGE_PATH = `${baseURL}/logos-grayscale/0x${parseInt(SIZE, 10)}/${name}.png`;
    const IMAGE_PATH_RETINA = `${baseURL}/logos-grayscale/0x${parseInt(SIZE, 10) * 2}/${name}.png`;

    expect(screen.getByRole("img")).toHaveAttribute("src", IMAGE_PATH);
    expect(screen.getByRole("img")).toHaveAttribute("srcSet", `${IMAGE_PATH_RETINA} 2x`);
  });
});
