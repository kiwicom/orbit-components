import React from "react";
import { Badge } from "@kiwicom/orbit-components";

import { Statuses } from ".";

interface ComponentStatusBadgeProps {
  status: Statuses;
}

const ComponentStatusBadge = ({ status }: ComponentStatusBadgeProps) => {
  let color;
  switch (status) {
    case Statuses.Released:
      color = "successInverted";
      break;
    case Statuses.Deprecated:
    case Statuses.NotDoing:
      color = "critical";
      break;
    case Statuses.Planned:
      color = "dark";
      break;
    case Statuses.OnHold:
      color = "warning";
      break;
    case Statuses.Developing:
    case Statuses.Designing:
      color = "infoInverted";
      break;
    default:
      color = "neutral";
  }
  return <Badge type={color}>{status}</Badge>;
};

export default ComponentStatusBadge;
