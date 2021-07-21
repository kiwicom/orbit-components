// @flow
import * as React from "react";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Badge from "../Badge";
import Button from "../Button";
import List, { ListItem } from "../List";
import Tooltip from "../Tooltip";
import Text from "../Text";
import Check from "../icons/Check";
import FeatureIcon from "../FeatureIcon";
import Layout, { LayoutColumn } from "../Layout";
import Card, { CardSection } from "../Card";

import PricingTable, { PricingTableItem } from ".";

const content = (
  <List>
    <ListItem label="Kiwi.com services" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>Extended.</Text>
      </Tooltip>
    </ListItem>
    <ListItem label="Calleer priority" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>Medium</Text>
      </Tooltip>
    </ListItem>
    <ListItem label="Email support" icon={<Check size="small" color="success" />}>
      <Text>Yes</Text>
    </ListItem>
    <ListItem label="Additional Services" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>$10 processing fee</Text>
      </Tooltip>
    </ListItem>
  </List>
);

const Wrapper = ({ name }) => {
  return (
    <PricingTableItem
      dataTest="PricingTableItem"
      name={name}
      priceBadge={<Badge type="info">Included</Badge>}
      action={
        <Button
          onClick={ev => {
            ev.stopPropagation();
          }}
          type="secondary"
          fullWidth
        >
          Don&#39;t upgrade
        </Button>
      }
      mobileDescription={name}
      onClick={action("onClick")}
    >
      {content}
    </PricingTableItem>
  );
};

const longerContent = (
  <List>
    <ListItem label="Kiwi.com services" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>Extended.</Text>
      </Tooltip>
    </ListItem>
    <ListItem label="Calleer priority" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>Medium</Text>
      </Tooltip>
    </ListItem>
    <ListItem label="Email support" icon={<Check size="small" color="success" />}>
      <Text>Yes</Text>
    </ListItem>
    <ListItem label="Additional Services" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>$10 processing fee</Text>
      </Tooltip>
    </ListItem>
    <ListItem label="Additional Services" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>$10 processing fee</Text>
      </Tooltip>
    </ListItem>
  </List>
);

const germanContent = (
  <List>
    <ListItem label="Verfügbarkeit Support" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>Begrenzt</Text>
      </Tooltip>
    </ListItem>
    <ListItem label="Anruferpriorität" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>Gering</Text>
      </Tooltip>
    </ListItem>
    <ListItem label="Email support" icon={<Check size="small" color="success" />}>
      <Text>Yes</Text>
    </ListItem>
    <ListItem label="E-Mail-Support" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>Nein</Text>
      </Tooltip>
    </ListItem>
    <ListItem label="Zusatzleistungen" icon={<Check size="small" color="success" />}>
      <Tooltip content="Extra info about provided service" stopPropagation>
        <Text>$10 Rückerstattung</Text>
      </Tooltip>
    </ListItem>
  </List>
);

export default {
  title: "PricingTable",
  decorators: [withKnobs],
};

export const Compact = (): React.Node => {
  const activeElement = number("activeElement", 0);
  const hasError = boolean("hasError", false);

  return (
    <PricingTable hasError={hasError} activeElement={activeElement} dataTest="PricingTable">
      <PricingTableItem
        dataTest="PricingTableItem"
        name="Limited Services"
        priceBadge={<Badge type="info">Included</Badge>}
        action={
          <Button
            onClick={ev => {
              ev.stopPropagation();
            }}
            type="secondary"
            fullWidth
          >
            Don&#39;t upgrade
          </Button>
        }
        mobileDescription="Basic ticket fare includes:"
        onClick={action("onClick")}
      >
        {content}
      </PricingTableItem>
      <PricingTableItem
        dataTest="PricingTableItem"
        name="Plus Services"
        priceBadge={<Badge type="info">+ 10</Badge>}
        badge="Popular"
        action={
          <Button
            onClick={ev => {
              ev.stopPropagation();
            }}
            fullWidth
          >
            Upgrade and continue
          </Button>
        }
        mobileDescription="Flexi ticket fare includes:"
        onClick={action("onClick")}
      >
        {longerContent}
      </PricingTableItem>
      <PricingTableItem
        dataTest="PricingTableItem"
        name="Premium Services"
        priceBadge={<Badge type="info">+ 20</Badge>}
        action={
          <Button
            onClick={ev => {
              ev.stopPropagation();
            }}
            type="secondary"
            fullWidth
          >
            Upgrade and continue
          </Button>
        }
        mobileDescription="Premium ticket fare includes:"
        onClick={action("onClick")}
      >
        {content}
      </PricingTableItem>
    </PricingTable>
  );
};

Compact.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Booking = (): React.Node => {
  const activeElement = number("activeElement", 0);
  const desktopRadio = boolean("desktopRadio", true);

  return (
    <Layout type="Booking">
      <LayoutColumn>
        <Card>
          <CardSection>
            <PricingTable activeElement={activeElement} desktopRadio={desktopRadio}>
              <PricingTableItem
                name="Limited Services"
                priceBadge={<Badge type="info">Included</Badge>}
                active
                action={
                  <Button
                    onClick={ev => {
                      ev.stopPropagation();
                    }}
                    type="secondary"
                    fullWidth
                  >
                    Don&#39;t upgrade
                  </Button>
                }
                mobileDescription="Basic ticket fare includes:"
                onClick={action("onClick")}
              >
                {content}
              </PricingTableItem>

              <PricingTableItem
                name="Plus Services"
                priceBadge={<Badge type="info">+ 10</Badge>}
                badge="Popular"
                action={
                  <Button
                    onClick={ev => {
                      ev.stopPropagation();
                    }}
                    fullWidth
                  >
                    Upgrade and continue
                  </Button>
                }
                mobileDescription="Flexi ticket fare includes:"
                onClick={action("onClick")}
              >
                {longerContent}
              </PricingTableItem>
              <PricingTableItem
                name="Premium Services"
                priceBadge={<Badge type="info">+ 20</Badge>}
                action={
                  <Button
                    onClick={ev => {
                      ev.stopPropagation();
                    }}
                    type="secondary"
                    fullWidth
                  >
                    Upgrade and continue
                  </Button>
                }
                mobileDescription="Premium ticket fare includes:"
                onClick={action("onClick")}
              >
                {content}
              </PricingTableItem>
            </PricingTable>
          </CardSection>
        </Card>
      </LayoutColumn>
      <LayoutColumn>
        <Card>
          <CardSection>Test</CardSection>
        </Card>
      </LayoutColumn>
    </Layout>
  );
};

export const Translated = (): React.Node => {
  const activeElement = number("activeElement", 0);

  return (
    <Layout type="Booking">
      <LayoutColumn>
        <Card>
          <CardSection>
            <PricingTable activeElement={activeElement}>
              <PricingTableItem
                name="Basic Service"
                priceBadge={<Badge type="info">Inbegriffen</Badge>}
                action={
                  <Button
                    onClick={ev => {
                      ev.stopPropagation();
                    }}
                    type="secondary"
                    fullWidth
                  >
                    Mit Basic fortfahren{" "}
                  </Button>
                }
                mobileDescription="Basic ticket fare includes:"
                onClick={action("onClick")}
              >
                {germanContent}
              </PricingTableItem>
              <PricingTableItem
                name="Premium Service"
                priceBadge={<Badge type="info">+ 20</Badge>}
                action={
                  <Button
                    onClick={ev => {
                      ev.stopPropagation();
                    }}
                    type="secondary"
                    fullWidth
                  >
                    Auswählen und fortfahren
                  </Button>
                }
                mobileDescription="Premium ticket fare includes:"
                onClick={action("onClick")}
              >
                {germanContent}
              </PricingTableItem>
            </PricingTable>
          </CardSection>
        </Card>
      </LayoutColumn>
      <LayoutColumn>
        <Card>
          <CardSection>Test</CardSection>
        </Card>
      </LayoutColumn>
    </Layout>
  );
};

export const WithFeatureIcon = (): React.Node => {
  return (
    <PricingTable>
      <PricingTableItem
        name="Basic"
        price="$749"
        featureIcon={<FeatureIcon name="TicketSaver" />}
        action={
          <Button
            onClick={ev => {
              ev.stopPropagation();
            }}
            fullWidth
          >
            Continue with Basic
          </Button>
        }
        mobileDescription="Basic ticket fare includes:"
        onClick={action("onClick")}
      >
        {content}
      </PricingTableItem>
      <PricingTableItem
        name="Premium"
        price="$1,095"
        featureIcon={<FeatureIcon name="TicketFlexi" />}
        badge={<Badge type="info">Recommended</Badge>}
        action={
          <Button
            onClick={ev => {
              ev.stopPropagation();
            }}
            fullWidth
          >
            Continue with Basic
          </Button>
        }
        mobileDescription="Premium ticket fare includes:"
        onClick={action("onClick")}
      >
        {content}
      </PricingTableItem>
    </PricingTable>
  );
};

WithFeatureIcon.story = {
  name: "With FeatureIcon",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Badges = (): React.Node => {
  return (
    <PricingTable>
      <PricingTableItem
        name="Basic"
        price="$749"
        featureIcon={<FeatureIcon name="TicketSaver" />}
        badge={<Badge type="info">Recommended</Badge>}
        action={
          <Button
            onClick={ev => {
              ev.stopPropagation();
            }}
            fullWidth
          >
            Continue with Basic
          </Button>
        }
        mobileDescription="Basic ticket fare includes:"
        onClick={action("onClick")}
      >
        {content}
      </PricingTableItem>
      <PricingTableItem
        name="Premium"
        price="$1,095"
        featureIcon={<FeatureIcon name="TicketFlexi" />}
        badge={<Badge type="info">Lorem ipsum dolor sit amet</Badge>}
        action={
          <Button
            onClick={ev => {
              ev.stopPropagation();
            }}
            fullWidth
          >
            Continue with Basic
          </Button>
        }
        mobileDescription="Premium ticket fare includes:"
        onClick={action("onClick")}
      >
        {content}
      </PricingTableItem>
      <PricingTableItem
        name="Premium"
        price="$1,095"
        featureIcon={<FeatureIcon name="TicketFlexi" />}
        badge={<Badge type="info">Loremipsumdolorsitamet</Badge>}
        action={
          <Button
            onClick={ev => {
              ev.stopPropagation();
            }}
            fullWidth
          >
            Continue with Basic
          </Button>
        }
        mobileDescription="Premium ticket fare includes:"
        onClick={action("onClick")}
      >
        {content}
      </PricingTableItem>
    </PricingTable>
  );
};

Badges.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Wrapped = (): React.Node => {
  const activeElement = number("activeElement", 0);

  return (
    <PricingTable activeElement={activeElement}>
      <Wrapper name="Basic" />
      <Wrapper name="Standard" />
      <Wrapper name="Premium" />
    </PricingTable>
  );
};

Wrapped.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};
