// @flow
import * as React from "react";

import type { Globals } from "../../../common/common.js.flow";

export type Props = {|
  shown: boolean,
  lockScrolling?: boolean,
  dialogId: ?string,
  children: React.Node,
  onClose: (ev: SyntheticEvent<HTMLElement>) => void,
  ...Globals,
|};

declare export default React.ComponentType<Props>;
