import * as React from "react";
import { Timeline, TimelineStep } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Timeline>
      {/* @ts-expect-error todo */}
      <TimelineStep label="Booked" subLabel="January 3, 10:43" type="success">
        You booked the trip and received e-tickets.
      </TimelineStep>
      {/* @ts-expect-error todo */}
      <TimelineStep label="Checked in" subLabel="" type="warning">
        Please check in before your trip.
      </TimelineStep>
      {/* @ts-expect-error todo */}
      <TimelineStep label="Board" subLabel="May 4, 8:15" type="critical">
        You need to check in before you can board.
      </TimelineStep>
      <TimelineStep label="Arrive" subLabel="May 4, 11:48">
        Arrive at your destination
      </TimelineStep>
    </Timeline>
  ),
  info: {
    title: "Step types",
    description:
      "Timeline steps can be one of four types: success, warning, critical, and default.",
  },
};
