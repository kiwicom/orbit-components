// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { array, text } from "@storybook/addon-knobs";

import Heading from "../Heading";
import Text from "../Text";
import Card, { CardSection } from "../deprecated/Card";
import Stack from "../Stack";
import Modal, { ModalHeader, ModalSection, ModalFooter } from "../Modal";
import Button from "../Button";
import Illustration from "../Illustration";
import ChevronLeft from "../icons/ChevronLeft";
import FlightDirect from "../icons/FlightDirect";
import { CarrierLogo } from "..";
import CardSectionHeader from "../deprecated/Card/CardSection/CardSectionHeader";
import Tooltip from "../Tooltip";

import SkipLink from ".";

const Content = (
  <Stack>
    <Heading id="guarantee">Kiwi guarantee</Heading>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula porta gravida.
      Praesent at scelerisque augue. Sed vel dapibus neque, sed pretium ex. Nam dapibus accumsan
      odio. Vivamus mauris neque, rhoncus nec gravida eget, semper non tellus. Integer mauris leo,
      consectetur condimentum dui nec, semper consectetur nunc. Proin non posuere mauris. Sed porta
      id urna ac interdum. Praesent fermentum faucibus pellentesque.
    </Text>
    <Heading id="cancelation">Cancelation</Heading>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula porta gravida.
      Praesent at scelerisque augue. Sed vel dapibus neque, sed pretium ex. Nam dapibus accumsan
      odio. Vivamus mauris neque, rhoncus nec gravida eget, semper non tellus. Integer mauris leo,
      consectetur condimentum dui nec, semper consectetur nunc. Proin non posuere mauris. Sed porta
      id urna ac interdum. Praesent fermentum faucibus pellentesque.
    </Text>
  </Stack>
);

export default {
  title: "SkipLink",
};

export const Playground = (): React.Element<"div"> => {
  const links = array("links", [
    {
      href: "#guarantee",
      name: "Go to kiwi guarantee information",
    },
    {
      href: "#cancelation",
      name: "Go to cancelation information",
    },
    {
      name: "Reguest a refund",
      onClick: action("Reguest a refund"),
    },
  ]);
  const buttonLabel = text(
    "buttonLabel",
    "Description for screen readers about where the user currently is or describing a more complex component.",
  );

  return (
    <div>
      <SkipLink links={links} buttonLabel={buttonLabel} />
      {Content}
    </div>
  );
};

Playground.story = {
  parameters: {
    info:
      "All possible options for SkipLink. SkipLink is displayed only when focused. Use Tab or Shift + Tab to focus it.",
  },
};

export const WithinModal = (): React.Node => (
  <Modal onClose={action("onClose")} fixedFooter>
    <SkipLink
      links={[
        {
          name: "Go to outbound",
          href: "#outbound",
        },
        {
          name: "Go to inbound",
          href: "#inbound",
        },
      ]}
      buttonLabel="Description"
    />
    <ModalHeader
      title="Enjoy something to eat while you fly"
      illustration={<Illustration name="Meal" size="extraSmall" />}
      description="Select a flight below to see the menu (where available)"
    />
    <ModalSection suppressed>
      <Stack>
        <Tooltip content={<div>Lorem ipsum dolor sit amet</div>}>
          <Text uppercase weight="bold" id="outbound">
            OUTBOUND
          </Text>
        </Tooltip>
        <Card>
          <CardSection expandable>
            <CardSectionHeader
              actions={
                <Button type="secondary" size="small">
                  Edit
                </Button>
              }
            >
              <Stack direction="row" align="center" justify="between" spacing="XSmall">
                <CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} size="large" />
                <Stack spacing="XXSmall">
                  <Text size="small" type="secondary">
                    Sat, Mar 31 Trip length: 1h55m
                  </Text>
                  <Stack direction="row" spacing="XXSmall" align="center">
                    <Text weight="bold">London LHR</Text>
                    <FlightDirect size="small" />
                    <Text weight="bold">Prague PRG</Text>
                  </Stack>
                </Stack>
              </Stack>
            </CardSectionHeader>
          </CardSection>
          <CardSection expandable>
            <CardSectionHeader
              actions={
                <Button type="secondary" size="small">
                  Edit
                </Button>
              }
            >
              <Stack direction="row" align="center" justify="between" spacing="XSmall">
                <CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} size="large" />
                <Stack spacing="XXSmall">
                  <Text size="small" type="secondary">
                    Sat, Mar 31 Trip length: 1h55m
                  </Text>
                  <Stack direction="row" spacing="XXSmall" align="center">
                    <Text weight="bold">London LHR</Text>
                    <FlightDirect size="small" />
                    <Text weight="bold">Prague PRG</Text>
                  </Stack>
                </Stack>
              </Stack>
            </CardSectionHeader>
          </CardSection>
          <CardSection expandable>
            <CardSectionHeader
              actions={
                <Button type="secondary" size="small">
                  Edit
                </Button>
              }
            >
              <Stack direction="row" align="center" justify="between" spacing="XSmall">
                <CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} size="large" />
                <Stack spacing="XXSmall">
                  <Text size="small" type="secondary">
                    Sat, Mar 31 Trip length: 1h55m
                  </Text>
                  <Stack direction="row" spacing="XXSmall" align="center">
                    <Text weight="bold">London LHR</Text>
                    <FlightDirect size="small" />
                    <Text weight="bold">Prague PRG</Text>
                  </Stack>
                </Stack>
              </Stack>
            </CardSectionHeader>
          </CardSection>
        </Card>
      </Stack>
    </ModalSection>
    <ModalSection>
      <Stack>
        <Text uppercase weight="bold" id="inbound">
          INBOUND
        </Text>
        <Card>
          <CardSection expandable>
            <CardSectionHeader
              actions={
                <Button type="secondary" size="small">
                  Edit
                </Button>
              }
            >
              <Stack direction="row" align="center" justify="between" spacing="XSmall">
                <CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} size="large" />
                <Stack spacing="XXSmall">
                  <Text size="small" type="secondary">
                    Sat, Mar 31 Trip length: 1h55m
                  </Text>
                  <Stack direction="row" spacing="XXSmall" align="center">
                    <Text weight="bold">London LHR</Text>
                    <FlightDirect size="small" />
                    <Text weight="bold">Prague PRG</Text>
                  </Stack>
                </Stack>
              </Stack>
            </CardSectionHeader>
          </CardSection>
          <CardSection expandable>
            <CardSectionHeader
              actions={
                <Button type="secondary" size="small">
                  Edit
                </Button>
              }
            >
              <Stack direction="row" align="center" justify="between" spacing="XSmall">
                <CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} size="large" />
                <Stack spacing="XXSmall">
                  <Text size="small" type="secondary">
                    Sat, Mar 31 Trip length: 1h55m
                  </Text>
                  <Stack direction="row" spacing="XXSmall" align="center">
                    <Text weight="bold">London LHR</Text>
                    <FlightDirect size="small" />
                    <Text weight="bold">Prague PRG</Text>
                  </Stack>
                </Stack>
              </Stack>
            </CardSectionHeader>
          </CardSection>
          <CardSection expandable>
            <CardSectionHeader
              actions={
                <Button type="secondary" size="small">
                  Edit
                </Button>
              }
            >
              <Stack direction="row" align="center" justify="between" spacing="XSmall">
                <CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} size="large" />
                <Stack spacing="XXSmall">
                  <Text size="small" type="secondary">
                    Sat, Mar 31 Trip length: 1h55m
                  </Text>
                  <Stack direction="row" spacing="XXSmall" align="center">
                    <Text weight="bold">London LHR</Text>
                    <FlightDirect size="small" />
                    <Text weight="bold">Prague PRG</Text>
                  </Stack>
                </Stack>
              </Stack>
            </CardSectionHeader>
          </CardSection>
        </Card>
      </Stack>
    </ModalSection>
    <ModalFooter flex={["0 0 auto", "1 1 100%"]}>
      <Button iconLeft={<ChevronLeft />} type="secondary">
        Back
      </Button>
      <Button fullWidth>Proceed to Payment (23.98€)</Button>
    </ModalFooter>
  </Modal>
);

WithinModal.story = {
  parameters: {
    info: "SkipLink is displayed only when focused. Use Tab or Shift + Tab to focus it.",
  },
};
