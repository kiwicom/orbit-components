// @flow
import * as React from "react";

import Button from "../../Button";
import ButtonLink from "../../ButtonLink";
import Heading from "../../Heading";
import Popover from "../index";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
    <Stack>
      <Stack>
        <Heading type="title3" as="h4">
          Start
        </Heading>
        <Popover
          placement="bottom-start"
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
        >
          <Button circled title="Help" iconLeft={<Icons.QuestionCircle />} />
        </Popover>
      </Stack>
      <Stack>
        <Heading type="title3" as="h4">
          Center
        </Heading>
        <Popover
          placement="bottom"
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
        >
          <Button circled title="Help" iconLeft={<Icons.QuestionCircle />} />
        </Popover>
      </Stack>
      <Stack>
        <Heading type="title3" as="h4">
          End
        </Heading>
        <Popover
          placement="bottom-end"
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
        >
          <Button circled title="Help" iconLeft={<Icons.QuestionCircle />} />
        </Popover>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Alignment",
    description:
      "If you set a preferred alignment, the popover will be placed there if there's room. Otherwise, preference is given in the order of: start, center, end.",
  },
};
