// @flow
import { useRef, useState, useCallback } from "react";

import type { UseErrorTooltip } from "./useErrorTooltip.js.flow";

const useErrorTooltip: UseErrorTooltip = ({ onFocus, onBlur }) => {
  const [tooltipShown, setTooltipShown] = useState(false);
  const [tooltipShownHover, setTooltipShownHover] = useState(false);
  const labelRef = useRef(null);
  const iconRef = useRef(null);

  const handleFocus = useCallback(
    ev => {
      if (onFocus) onFocus(ev);
      setTooltipShown(true);
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    ev => {
      if (onBlur) onBlur(ev);
      setTooltipShown(false);
    },
    [onBlur],
  );

  return {
    tooltipShown,
    tooltipShownHover,
    setTooltipShownHover,
    labelRef,
    iconRef,
    handleFocus,
    handleBlur,
  };
};

export default useErrorTooltip;
