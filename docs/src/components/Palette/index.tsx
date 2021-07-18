import * as React from "react";
import transparentColor from "@kiwicom/orbit-design-tokens/lib/js/transparentColor";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";
import { Grid, Stack } from "@kiwicom/orbit-components";

// eslint-disable-next-line import/no-cycle
import ColorContainer from "./ColorContainer";
import Switch from "../Switch";
import findTokenAttributes from "../DesignTokens/findTokenAttributes";
import upperFirst from "../../utils/upperFirst";

export const isLight = (hex: string) => {
  const { red, green, blue } = transparentColor(hex, 100).match(
    /\((?<red>\d+), (?<green>\d+), (?<blue>\d+)/,
  ).groups;

  // HSP equation from http://alienryderflex.com/hsp.html
  const hsp = Math.sqrt(0.299 * (red * red) + 0.587 * (green * green) + 0.114 * (blue * blue));

  return hsp > 140;
};

interface PaletteProps {
  colors: string[];
  allowAdditional: boolean;
}

const normalizeName = (name: Array<string>) => name.map(v => upperFirst(String(v))).join(" ");

const getAdditionalColor = (name, additionalName) => {
  const tokenName = `${name}${upperFirst(additionalName)}`;
  const {
    schema: { variant, subVariant },
    value,
  } = findTokenAttributes(tokenName);
  return {
    name: normalizeName([
      variant,
      subVariant ? normalizeName(subVariant.split("-").filter(Boolean)) : null,
    ]),
    tokenName,
    value,
  };
};

const Palette = ({ colors, allowAdditional }: PaletteProps) => {
  const [showAdditional, setShowAdditional] = React.useState(false);
  const { isTablet } = useMediaQuery();
  const switchShowAdditional = () => {
    setShowAdditional(prev => !prev);
  };

  const colorsWithToken = colors.map(color => {
    const {
      schema: { variant, subVariant },
      value,
    } = findTokenAttributes(color);

    return {
      name: normalizeName([variant, subVariant]),
      tokenName: color,
      value,
      secondary: getAdditionalColor(color, "secondary"),
      tertiary: getAdditionalColor(color, "tertiary"),
    };
  });

  return (
    <Stack spacing="none">
      {allowAdditional && (
        <Switch onChange={switchShowAdditional} checked={showAdditional} reverseLabel>
          Show additional shades
        </Switch>
      )}
      {colorsWithToken.map((color, index, allColors) => {
        const determineOrder = indexNumber => {
          if (allColors.length === 1) return "only";
          if (indexNumber === 0) return "first";
          if (indexNumber === allColors.length - 1) return "last";
          return "middle";
        };

        return (
          <Grid
            key={color.tokenName}
            columns={showAdditional && color.secondary.value && isTablet ? "1fr 1fr 1fr" : "1fr"}
          >
            <ColorContainer
              color={color}
              order={determineOrder(index)}
              full={!showAdditional || !(color?.secondary?.value || color?.tertiary.value)}
              left={showAdditional}
            />
            {showAdditional && color.secondary.value && <ColorContainer color={color.secondary} />}
            {showAdditional && color.tertiary.value && (
              <ColorContainer
                color={color.tertiary}
                order={determineOrder(index)}
                right={showAdditional}
              />
            )}
          </Grid>
        );
      })}
    </Stack>
  );
};

export default Palette;
