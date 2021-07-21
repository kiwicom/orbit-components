// @flow
import * as React from "react";

import Hide from "../Hide";

import type { Props } from ".";

const Desktop = ({ children }: Props): React.Node => (
  <Hide on={["smallMobile", "mediumMobile", "largeMobile", "tablet"]}>{children}</Hide>
);

export default Desktop;
