// @flow
import * as React from "react";

import CheckCircle from "../../icons/CheckCircle";
import Circle from "../../icons/CircleEmpty";
import AlertCircle from "../../icons/AlertCircle";
import CloseCircle from "../../icons/CloseCircle";
import { useStatuses, useStep } from "../TimelineContext";
import useMediaQuery from "../../hooks/useMediaQuery";
import TimelineStepDesktop from "./components/TimelineStepDesktop";
import TimelineStepMobile from "./components/TimelineStepMobile";

import type { Props } from ".";

const TypeIcon = ({ type }) => {
  if (type === "success") return <CheckCircle color="success" />;
  if (type === "warning") return <AlertCircle color="warning" />;
  if (type === "critical") return <CloseCircle color="critical" />;

  return <Circle color="tertiary" size="small" />;
};

const TimelineStep = ({ children, label, subLabel, type }: Props): React.Node => {
  const { types, setTypes } = useStatuses();
  const { index, last } = useStep();
  const { isDesktop } = useMediaQuery();

  const nextType = types[index + 1];

  React.useEffect(() => {
    setTypes(prev => ({ ...prev, [index]: type }));
  }, [setTypes, type, index]);

  return isDesktop ? (
    <TimelineStepDesktop
      typeIcon={<TypeIcon type={type} />}
      nextType={nextType}
      label={label}
      type={type}
      subLabel={subLabel}
      last={last}
    >
      {children}
    </TimelineStepDesktop>
  ) : (
    <TimelineStepMobile
      typeIcon={<TypeIcon type={type} />}
      nextType={nextType}
      label={label}
      type={type}
      subLabel={subLabel}
      last={last}
    >
      {children}
    </TimelineStepMobile>
  );
};

export default TimelineStep;
