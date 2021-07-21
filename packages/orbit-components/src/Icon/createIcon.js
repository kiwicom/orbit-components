// @flow
import * as React from "react";

import whiteListProps from "./helpers/whiteListProps";
import type { CreateIcon } from "./createIcon";

import OrbitIcon from ".";

const createIcon: CreateIcon = (def, viewBox, displayName) => {
  const icon = props => (
    <OrbitIcon viewBox={viewBox} {...whiteListProps(props)}>
      {def}
    </OrbitIcon>
  );
  icon.displayName = displayName;
  return icon;
};

export default createIcon;
