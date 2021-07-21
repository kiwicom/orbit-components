// @flow
import * as React from "react";

import Button from "../../Button";
import ButtonLink from "../../ButtonLink";
import Popover from "../index";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
    <Popover
      content={
        <Stack spacing="small">
          <ButtonLink
            external
            type="secondary"
            fullWidth
            href="https://orbit.kiwi/components/popover/react/"
          >
            Reference
          </ButtonLink>
          <ButtonLink
            external
            type="secondary"
            fullWidth
            href="https://orbit.kiwi/components/popover/"
          >
            Guidelines
          </ButtonLink>
        </Stack>
      }
      placement="bottom"
    >
      <Button iconRight={<Icons.ChevronDown />} type="secondary">
        Learn more
      </Button>
    </Popover>
  ),
  info: {
    title: "Clear trigger",
    description:
      "Popovers hide information from the initial screen, so make it clear to users how they can get that information, such as with a button with a chevron down icon on the right.",
  },
};
