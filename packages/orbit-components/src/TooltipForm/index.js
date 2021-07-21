// @flow
import * as React from "react";

import Tooltip from "./Tooltip";

import type { Props } from "./index";

const TooltipForm = ({
  iconRef,
  inputSize = "normal",
  onClose,
  labelRef,
  tooltipShown,
  dataTest,
  error,
  help,
  inlineLabel,
}: Props): React.Node => {
  return (
    <>
      {help && !error && (
        <Tooltip
          dataTest={dataTest}
          iconBoundingRef={iconRef}
          inputSize={inputSize}
          boundingRef={labelRef}
          onClick={onClose}
          isHelp
          inlineLabel={inlineLabel}
          shown={tooltipShown}
        >
          {help}
        </Tooltip>
      )}
      {error && (
        <Tooltip
          dataTest={dataTest}
          iconBoundingRef={iconRef}
          inputSize={inputSize}
          boundingRef={labelRef}
          inlineLabel={inlineLabel}
          shown={tooltipShown}
        >
          {error}
        </Tooltip>
      )}
    </>
  );
};

export default TooltipForm;
