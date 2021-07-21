// @flow
import * as React from "react";

import Stack from "../../../Stack";
import Text from "../../../Text";
import useTheme from "../../../hooks/useTheme";
import { resolveAccentColor } from "../helpers";
import { TYPES } from "../../consts";

import type { Props } from ".";

const SeatLegend = ({ type = TYPES.DEFAULT, label, dataTest }: Props): React.Node => {
  const theme = useTheme();

  return (
    <Stack inline align="center" spacing="XSmall">
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" data-test={dataTest}>
        <path
          d="M0 3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3V19C16 19.5523 15.5523 20 15 20H1C0.447715 20 0 19.5523 0 19V3Z"
          fill={resolveAccentColor({ type, theme })}
        />
      </svg>
      {label && (
        <Text type="secondary" size="small">
          {label}
        </Text>
      )}
    </Stack>
  );
};

export default SeatLegend;
