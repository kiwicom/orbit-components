// @flow
import * as React from "react";

import { SIZE_OPTIONS } from "../primitives/IllustrationPrimitive/consts";
import IllustrationPrimitive from "../primitives/IllustrationPrimitive";

import type { Props } from ".";

const AirportIllustration = ({ size = SIZE_OPTIONS.MEDIUM, ...props }: Props): React.Node => (
  <IllustrationPrimitive {...props} size={size} />
);

export default AirportIllustration;
